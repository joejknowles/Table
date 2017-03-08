import { createAddCardChannel, watchCards, addCard } from '../../sagas/table';
import * as actions from '../../actions';

import { eventChannel } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';

import * as toPath from '../../routing';
import createWebSocketConnection, * as events from '../../api/sockets';

describe('createAddCardChannel', () => {
  const socket = {
    on: jest.fn()
  };
  it('sets a play card handler', () => {
    const channel = createAddCardChannel(socket);
    expect(socket.on).toHaveBeenCalled();
  });
});

describe('watchCards', () => {
  const socket = () => jest.fn();
  const gen = watchCards(socket);

  it('creates socket channel', () => {
    expect(gen.next().value).toEqual(
      call(createAddCardChannel, socket)
    );
  });

  const channel = jest.fn();

  it('takes every event from channel to addCard', () => {
    expect(gen.next(channel).value).toEqual(
      takeEvery(channel, addCard)
    );
  });
});
