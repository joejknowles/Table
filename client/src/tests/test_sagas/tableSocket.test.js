import { createSocketChannel, watchCards } from '../../sagas/table';
import { addCard } from '../../actions';

import { eventChannel } from 'redux-saga';
import { take, put } from 'redux-saga/effects';

import * as toPath from '../../routing';
import createWebSocketConnection, * as events from '../../api/sockets';

describe('createSocketChannel', () => {
  const socket = {
    on: jest.fn()
  };
  it('sets a play card handler', () => {
    const channel = createSocketChannel(socket);
    expect(socket.on).toHaveBeenCalled();
  });
});

describe('watchCards', () => {
  const channel = () => jest.fn();
  const gen = watchCards(channel);
  it('takes channel', () => {
    expect(gen.next().value).toEqual(
      take(channel)
    );
  });

  it('puts ADD_CARD', () => {
    const card = 'data'
    expect(gen.next(card).value).toEqual(
      put(addCard(card))
    );
  });

  it('loops', () => {
    expect(gen.next().value).toEqual(
      take(channel)
    );
  });
});
