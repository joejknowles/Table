import { watchCards, addCard } from '../../sagas/table';
import * as actions from '../../actions';

import { eventChannel } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';

import { itEnds } from './common';
import * as toPath from '../../routing';
import createWebSocketConnection, * as events from '../../api/sockets';

describe('watchCards', () => {
  const socket = () => jest.fn();
  const gen = watchCards();

  it('takes CARD_PLAYED to call addCard', () => {
    expect(gen.next().value).toEqual(
      takeEvery('CARD_PLAYED', addCard)
    );
  });

  itEnds(gen);
});
