import { call } from 'redux-saga/effects';
import { tableJoin } from './table';

export function* newGame(socket) {
  yield call(tableJoin, socket);
}
