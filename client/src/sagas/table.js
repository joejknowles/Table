import { call, put, fork, takeEvery } from 'redux-saga/effects';

import { snapResponse } from './snapResponse';
import * as toPath from '../routing';
import * as events from '../api/sockets';
import * as actions from '../actions';

export function* addCard({ card }) {
  yield put(actions.addCard(card));
}

export function* watchCards() {
  yield takeEvery('CARD_PLAYED', addCard);
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
  yield takeEvery('SNAP_RESULT', snapResponse);
}
