import { takeEvery, fork, call } from 'redux-saga/effects';

import * as toPath from '../routing';

export function* playerJoin(action) {
  yield call(toPath.play);
}

export function* watchPlayerJoin() {
  yield takeEvery('PLAYER_JOIN', playerJoin);
}

export function* tableJoin(action) {
  yield call(toPath.table);
}

export function* watchTableJoin() {
  yield takeEvery('TABLE_JOIN', tableJoin);
}

export function* watchJoin() {
  yield fork(watchPlayerJoin);
  yield call(watchTableJoin);
}

export default function*() {
  yield [ watchJoin() ];
}
