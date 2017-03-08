import { createSocketChannel, watchCards } from '../../sagas/table';
import { addCard } from '../../actions';

import { eventChannel } from 'redux-saga';
import { take, put, call } from 'redux-saga/effects';

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
  const socket = () => jest.fn();
  const gen = watchCards(socket);

  it('creates socket channel', () => {
    expect(gen.next().value).toEqual(
      call(createSocketChannel, socket)
    );
  });

  const channel = jest.fn();

  it('takes channel', () => {
    expect(gen.next(channel).value).toEqual(
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
