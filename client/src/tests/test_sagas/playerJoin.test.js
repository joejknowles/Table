import { playerJoin, playerBegin, playCard, emitGameAction } from '../../sagas/play';

import { call, takeEvery, put } from 'redux-saga/effects';

import * as toPath from '../../routing';
import createWebSocketConnection, * as events from '../../api/sockets';

const socket = {
  emit: jest.fn(),
  id: 'test'
}

describe('playerJoin', () => {
  const gen = playerJoin(socket, { gameCode: '1234' });

  it('joins player room', () => {
    expect(gen.next().value).toEqual(
      call(events.joinPlayersRoom, socket, '1234')
    );
  });

  it('takes every BEGIN_GAME', () => {
    expect(gen.next().value).toEqual(
      takeEvery('BEGIN_GAME', playerBegin, socket)
    );
  });

  it('calls go to play', () => {
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

const action = {
  piles: {
    'test': [1, 2, 3]
  }
}

describe('playerBegin', () => {
  const gen = playerBegin(socket, action);

  it('dispatches SET_CARD_COUNT', () => {
    expect(gen.next().value).toEqual(
      put({ type: 'SET_CARD_COUNT', cardCount: 3})
    );
  });

  it('takes every PLAY_CARD', () => {
    expect(gen.next().value).toEqual(
      takeEvery('PLAY_CARD', emitGameAction, socket)
    );
  });

  it('goes to player path', () => {
    expect(gen.next().value).toEqual(
      call(toPath.play)
    );
  });

  it('takes every SNAP action', () => {
    expect(gen.next().value).toEqual(
      takeEvery('SNAP', emitGameAction, socket)
    );
  });
});
