import { playerJoin, playerBegin, playCard } from '../../sagas/play';

import { call, takeEvery } from 'redux-saga/effects';

import * as toPath from '../../routing';
import createWebSocketConnection, * as events from '../../api/sockets';

const socket = {
  emit: jest.fn()
}

describe('playerJoin', () => {
  const gen = playerJoin(socket);

  it('joins player room', () => {
    expect(gen.next().value).toEqual(
      call(events.joinPlayersRoom, socket)
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

describe('playerBegin', () => {
  const gen = playerBegin(socket);

  it('takes every PLAY_CARD', () => {
    expect(gen.next().value).toEqual(
      takeEvery('PLAY_CARD', playCard, socket)
    );
  });

  it('goes to table path', () => {
    expect(gen.next().value).toEqual(
      call(toPath.play)
    );
  });
});
