import { call, put, fork, takeEvery } from 'redux-saga/effects';

import * as toPath from '../routing';
import * as events from '../api/sockets';
import * as actions from '../actions';
import { createChannelForEvent } from './socketEvents';

export const createAddCardChannel = (socket) => {
  return createChannelForEvent(socket, 'PLAY_CARD');
};

export function* addCard(card) {
  yield put(actions.addCard(card));
}

export function* watchCards(socket) {
  const channel = yield call(createAddCardChannel, socket);
  yield takeEvery(channel, addCard);
}

export function* connectAsTable(socket, gameCode) {
  yield call(events.joinTablesRoom, socket, gameCode);
  yield call(watchCards, socket);
}

export function* tableJoin(socket, gameCode) {
  yield fork(connectAsTable, socket, gameCode);
  yield takeEvery('BEGIN_GAME', tableBegin, socket);
  yield call(toPath.waiting);
}

export function* tableBegin(socket) {
  yield call(toPath.table);
}
