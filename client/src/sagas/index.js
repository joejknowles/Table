import { takeEvery, fork, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import createWebSocketConnection from '../api/sockets';

import { playerJoin } from './play';
import { tableJoin } from './table';
import { newGame } from './newGame';

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
  yield takeEvery('NEW_GAME', newGame, socket);
}

export const createBeginGameChannel = (socket) => {
  return createChannelForEvent(socket, 'BEGIN_GAME')
}

function* requestBeginGame(socket) {
  yield call([socket, socket.emit], 'REQUEST_BEGIN_GAME');
}

function* beginGame() {
  yield put({ type: 'BEGIN_GAME' });
}

export function* watchBegin(socket) {
  const beginGameChannel = yield call(createBeginGameChannel, socket);
  yield takeEvery('REQUEST_BEGIN_GAME', requestBeginGame, socket);
  yield takeEvery(beginGameChannel, beginGame);
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
