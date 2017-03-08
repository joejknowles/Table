import { newGame, createNewGame,
  watchNewGame, createNewGameChannel,
  dispatchNewGame
} from '../../sagas/newGame';
import { tableJoin } from '../../sagas/table';

import * as toPath from '../../routing';

import { call, fork, takeEvery, put } from 'redux-saga/effects';

const socket = {
  emit: jest.fn()
}

describe('newGame', () => {
  const gen = newGame(socket);

  it('emits REQUEST_NEW_GAME', () => {
    expect(gen.next().value).toEqual(
      fork(createNewGame, socket)
    );
  });

  it('joins as table', () => {
    expect(gen.next().value).toEqual(
      call(tableJoin, socket)
    );
  });

  it('goes to waiting path', () => {
    expect(gen.next().value).toEqual(
      call(toPath.waiting)
    );
  });

  it('ends', () => {
    expect(gen.next()).toEqual(
      { done: true, value: undefined }
    );
  });
});

describe('createNewGame', () => {
  const gen = createNewGame(socket);

  it('emits new game to socket', () => {
    expect(gen.next().value).toEqual(
      call([socket, socket.emit], 'REQUEST_NEW_GAME')
    );
  });

  it('watches for successful new game', () => {
    expect(gen.next().value).toEqual(
      call(watchNewGame, socket)
    );
  });

  it('ends', () => {
    expect(gen.next()).toEqual(
      { done: true, value: undefined }
    );
  });
});


describe('watchNewGame', () => {
  const gen = watchNewGame(socket);

  it('creates new game channel', () => {
    expect(gen.next().value).toEqual(
      call(createNewGameChannel, socket)
    );
  });

  const channel = jest.fn();
  it('takes every event from channel', () => {
    expect(gen.next(channel).value).toEqual(
      takeEvery(channel, dispatchNewGame)
    );
  });

  it('ends', () => {
    expect(gen.next()).toEqual(
      { done: true, value: undefined }
    );
  });
});

describe('dispatchNewGame', () => {
  const game = {
    code: '1234',
    status: 0
  }
  const newGameData = {
    data: game
  }
  const gen = dispatchNewGame(newGameData);

  it('creates new game channel', () => {
    expect(gen.next().value).toEqual(
      put({ type: 'NEW_GAME',  game })
    );
  });

  it('ends', () => {
    expect(gen.next()).toEqual(
      { done: true, value: undefined }
    );
  });
});
