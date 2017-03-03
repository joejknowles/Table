import { call, take, put, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import * as toPath from '../routing';
import createWebSocketConnection, * as events from '../api/sockets';
import { addCard } from '../actions';

export const createSocketChannel = (socket) => {
  return eventChannel(emit => {
    socket.on('PLAY_CARD', (data) => {
      emit({ value: data });
    });

    return () => socket.off();
  });
};

export function* watchCards(channel) {
  while(true) {
    const card = yield take(channel);
    yield put(addCard(card));
  }
}

export function* connectAsTable() {
  const socket = yield call(createWebSocketConnection);
  yield call(events.joinTablesRoom, socket);
  const channel = yield call(createSocketChannel, socket);
  yield call(watchCards, channel);
}

export function* tableJoin() {
  yield fork(connectAsTable);
  yield call(toPath.table);
}
