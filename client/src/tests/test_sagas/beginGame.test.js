import {
  watchBegin, createBeginGameChannel,
  requestBeginGame, beginGame
} from '../../sagas/beginGame';

import { call, takeEvery } from 'redux-saga/effects';

const socket = {
  emit: jest.fn()
};

describe('watchBegin', () => {
  const gen = watchBegin(socket);

  it('creates a begin game channel', () => {
    expect(gen.next().value).toEqual(
      call(createBeginGameChannel, socket)
    );
  });

  const channel = jest.fn();

  it('takes every request to begin game', () => {
    expect(gen.next(channel).value).toEqual(
      takeEvery('REQUEST_BEGIN_GAME', requestBeginGame, socket)
    );
  });

  it('takes every event from begin game channel', () => {
    expect(gen.next().value).toEqual(
      takeEvery(channel, beginGame)
    );
  });

  it('ends', () => {
    expect(gen.next()).toEqual(
      { done: true, avalue: undefined }
    );
  });
});
