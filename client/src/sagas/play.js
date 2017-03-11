import { call, takeEvery, select } from 'redux-saga/effects';

import * as toPath from '../routing';
import { gameCodeSelector } from '../reducers';
import * as events from '../api/sockets';

export function* playCard(socket) {
  const gameCode = yield select(gameCodeSelector);
  yield call([socket, socket.emit], 'PLAY_CARD', { gameCode });
}

export function* playerBegin(socket) {
  yield takeEvery('PLAY_CARD', playCard, socket);
  yield call(toPath.play);
}

export function* playerJoin(socket, action) {
  let { gameCode } = action;
  if (!gameCode) {
    gameCode = yield select(gameCodeSelector);
  }
  yield call(events.joinPlayersRoom, socket, gameCode);
  yield takeEvery('BEGIN_GAME', playerBegin, socket);
  yield call(toPath.waiting);
}
