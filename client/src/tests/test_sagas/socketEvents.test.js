import {
  watchAllSocketEvents,
  createChannelForEvent,
  dispatchSocketEvent
  } from '../../sagas/socketEvents';

import { call, put, takeEvery } from 'redux-saga/effects';

const socket = jest.fn();

describe('watchAllSocketEvents', () => {
  const gen = watchAllSocketEvents(socket, [ 'PLAYER_ADDED' ]);

  it('creates addPlayerChannel', () => {
    expect(gen.next().value).toEqual(
      call(createChannelForEvent, socket, 'PLAYER_ADDED')
    );
  });

  const channel = jest.fn();
  it('takesEvery addPlayerChannel event and dispatches PLAYER_ADDED', ()=> {
    expect(gen.next(channel).value).toEqual(
      takeEvery(channel, dispatchSocketEvent, 'PLAYER_ADDED')
    );
  });
});

describe('dispatchSocketEvent', () => {
  const gen = dispatchSocketEvent(
    'PLAYER_ADDED', { game: { playerCount: 1 } }
  );
  it('dispatches event', () => {
    expect(gen.next().value).toEqual(
      put({ type: 'PLAYER_ADDED', game: { playerCount: 1 } })
    );
  })
});
