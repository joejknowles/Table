import { playerJoin, playCard } from '../../sagas/play';

import { call, takeEvery } from 'redux-saga/effects';

import * as toPath from '../../routing';
import createWebSocketConnection, * as events from '../../api/sockets';

describe('playerJoin', () => {
  const gen = playerJoin();

  it('connects to socket', () => {
    expect(gen.next().value).toEqual(
      call(createWebSocketConnection)
    );
  });

  const socket = {
    emit: jest.fn()
  }
  it('joins player room', () => {
    expect(gen.next(socket).value).toEqual(
      call(events.joinPlayersRoom, socket)
    );
  });

  it('takes every PLAY_CARD', () => {
    expect(gen.next().value).toEqual(
      takeEvery('PLAY_CARD', playCard, socket)
    );
  });

  it('calls go to play', () => {
    expect(gen.next().value).toEqual(
      call(toPath.play)
    );
  });

  it('ends', () => {
    expect(gen.next()).toEqual(
      { done: true, value: undefined }
    );
  });
});

it('playCard emits PLAY_CARD event', () => {
  const action = { card: '5'};
  const socket = {
    emit: jest.fn()
  }
  expect(playCard(socket, action).next().value).toEqual(
    call(events.playCard, socket, action.card)
  );
});
