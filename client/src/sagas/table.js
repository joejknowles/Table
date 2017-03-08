import { call, put, fork, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import * as toPath from '../routing';
import * as events from '../api/sockets';
import * as actions from '../actions';

export const createAddCardChannel = (socket) => {
  return eventChannel(emit => {
    socket.on('PLAY_CARD', (data) => {
      emit({ value: data });
    });
    return () => socket.off();
  });
};

export function* addCard(card) {
  yield put(actions.addCard(card));
}

export function* watchCards(socket) {
  const channel = yield call(createAddCardChannel, socket);
  yield takeEvery(channel, addCard);
}

export function* connectAsTable(socket) {
  yield call(events.joinTablesRoom, socket);
  yield call(watchCards, socket);
}

export function* tableJoin(socket) {
  yield fork(connectAsTable, socket);
  yield takeEvery('BEGIN_GAME', tableBegin, socket);
  yield call(toPath.waiting);
}

export function* tableBegin(socket) {
  yield call(toPath.table);
}
