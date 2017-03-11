import { takeEvery, fork, call } from 'redux-saga/effects';
import createWebSocketConnection from '../api/sockets';

import { playerJoin } from './play';
import { tableJoin } from './table';
import { newGame } from './newGame';
import { watchBegin } from './beginGame';
import { watchAllSocketEvents } from './socketEvents';

export function* watchPlayerJoin(socket) {
  yield takeEvery('PLAYER_JOIN', playerJoin, socket);
}

export function* watchTableJoin(socket) {
  yield takeEvery('TABLE_JOIN', tableJoin, socket);
}

export function* watchNewGame(socket) {
  yield takeEvery('REQUEST_NEW_GAME', newGame, socket);
}

export function* watchJoin(socket) {
  yield fork(watchAllSocketEvents, socket, [ 'PLAYER_ADDED' ]);
  yield fork(watchNewGame, socket);
  yield fork(watchPlayerJoin, socket);
  yield fork(watchTableJoin, socket);
  yield call(watchBegin, socket);
}

export default function*() {
  const socket = yield call(createWebSocketConnection);
  yield [ watchJoin(socket) ];
}
