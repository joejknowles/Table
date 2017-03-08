import { call, fork, takeEvery, put } from 'redux-saga/effects';
import * as toPath from '../routing';
import { createChannelForEvent } from './index';

import { tableJoin } from './table';

export const createNewGameChannel = (socket) => {
  return createChannelForEvent(socket, 'NEW_GAME');
};

export function* dispatchNewGame(response) {
  yield put({ type: 'NEW_GAME', game: response.data });
}

export function* watchNewGame(socket) {
  const newGameChannel = yield call(createNewGameChannel, socket);
  yield takeEvery(newGameChannel, dispatchNewGame);
}

export function* createNewGame(socket) {
  yield call([socket, socket.emit], 'REQUEST_NEW_GAME');
  yield call(watchNewGame, socket);
}

export function* newGame(socket) {
  yield fork(createNewGame, socket);
  yield call(tableJoin, socket);
  yield call(toPath.waiting);
}
