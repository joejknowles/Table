import { call, takeEvery } from 'redux-saga/effects';

import * as toPath from '../routing';
import createWebSocketConnection, * as events from '../api/sockets';

export function* playCard(socket, action) {
  yield call(events.playCard, socket, action.card)
}

export function* playerJoin() {
  const socket = yield call(createWebSocketConnection);
  yield call(events.joinPlayersRoom, socket);
  yield takeEvery('PLAY_CARD', playCard, socket);
  yield call(toPath.play);
}
