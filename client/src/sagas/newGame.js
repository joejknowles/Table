import { call } from 'redux-saga/effects';
import * as toPath from '../routing';

import { tableJoin } from './table';

export function* emitNewGame(socket) {
  yield call([socket, socket.emit], 'NEW_GAME');
}

export function* newGame(socket) {
  yield call(emitNewGame, socket);
  yield call(tableJoin, socket);
  yield call(toPath.waiting);
}
