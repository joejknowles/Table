import { call, takeEvery, select, put } from 'redux-saga/effects';

import * as toPath from '../routing';
import { gameCodeSelector } from '../reducers';
import * as events from '../api/sockets';

export function* emitGameAction(socket, action) {
  const gameCode = yield select(gameCodeSelector);
  yield call([socket, socket.emit], action.type, { gameCode });
}

export function* playerBegin(socket, action) {
  const cardCount = action.piles[socket.id].length;
  yield put({ type: 'SET_CARD_COUNT', cardCount })
  yield takeEvery('PLAY_CARD', emitGameAction, socket);
  yield call(toPath.play);
  yield takeEvery('SNAP', emitGameAction, socket)
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
