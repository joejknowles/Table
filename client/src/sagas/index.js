import { takeEvery, fork, call } from 'redux-saga/effects';

import { playerJoin } from './play';
import { tableJoin } from './table';

export function* watchPlayerJoin() {
  yield takeEvery('PLAYER_JOIN', playerJoin);
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
