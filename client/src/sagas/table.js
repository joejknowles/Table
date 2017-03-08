import { call, take, put, fork, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import * as toPath from '../routing';
import * as events from '../api/sockets';
import { addCard } from '../actions';

export const createSocketChannel = (socket) => {
  return eventChannel(emit => {
    socket.on('PLAY_CARD', (data) => {
      emit({ value: data });
    });
    return () => socket.off();
  });
};

export function* watchCards(socket) {
  const channel = yield call(createSocketChannel, socket);
  while(true) {
    const card = yield take(channel);
    yield put(addCard(card));
  }
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
