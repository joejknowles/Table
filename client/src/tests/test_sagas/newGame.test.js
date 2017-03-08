import { newGame, emitNewGame } from '../../sagas/newGame';
import { tableJoin } from '../../sagas/table';

import * as toPath from '../../routing';

import { call, takeEvery } from 'redux-saga/effects';

const socket = {
  emit: jest.fn()
}

describe('newGame', () => {
  const gen = newGame(socket);

  it('emits NEW_GAME', () => {
    expect(gen.next().value).toEqual(
      call(emitNewGame, socket)
    );
  });

  it('joins as table', () => {
    expect(gen.next().value).toEqual(
      call(tableJoin, socket)
    );
  });

  xit('watches for begin game event', () => {
    expect(gen.next().value).toEqual(

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

describe('emitNewGame', () => {
  const gen = emitNewGame(socket);

  it('emits new game to socket', () => {
    expect(gen.next().value).toEqual(
      call([socket, socket.emit], 'NEW_GAME')
    );
  });

  it('ends', () => {
    expect(gen.next()).toEqual(
      { done: true, value: undefined }
    );
  });
});
