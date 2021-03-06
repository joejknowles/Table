import {
  watchBegin,
  requestBeginGame
} from '../../sagas/beginGame';
import { itEnds } from './common';

import { call, takeEvery } from 'redux-saga/effects';

const socket = {
  emit: jest.fn()
};

describe('watchBegin', () => {
  const gen = watchBegin(socket);

  it('takes every request to begin game', () => {
    expect(gen.next().value).toEqual(
      takeEvery('REQUEST_BEGIN_GAME', requestBeginGame, socket)
    );
  });

  itEnds(gen);
});
