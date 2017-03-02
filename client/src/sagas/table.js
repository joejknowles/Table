import { call } from 'redux-saga/effects';

import * as toPath from '../routing';

export function* tableJoin(action) {
  yield call(toPath.table);
}
