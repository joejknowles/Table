import { takeEvery, fork, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import createWebSocketConnection from '../api/sockets';

import { playerJoin } from './play';
import { tableJoin } from './table';
import { newGame } from './newGame';
import { watchBegin } from './beginGame';

export const createChannelForEvent = (socket, event) => {
  return eventChannel(emit => {
    socket.on(event, (data) => {
      emit({ data });
    });
    return () => socket.off();
  });
};

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
  yield fork(watchNewGame, socket);
  yield fork(watchPlayerJoin, socket);
  yield fork(watchTableJoin, socket);
  yield call(watchBegin, socket);
}

export default function*() {
  const socket = yield call(createWebSocketConnection);
  yield [ watchJoin(socket) ];
}
