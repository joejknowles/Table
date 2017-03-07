import { call, takeEvery } from 'redux-saga/effects';

import * as toPath from '../routing';
import * as events from '../api/sockets';

export function* playCard(socket, action) {
  yield call(events.playCard, socket, action.card)
}

export function* playerJoin(socket) {
  yield call(events.joinPlayersRoom, socket);
  yield takeEvery('PLAY_CARD', playCard, socket);
  yield call(toPath.play);
}
