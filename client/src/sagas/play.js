import { call } from 'redux-saga/effects';

import * as toPath from '../routing';

export function* playerJoin(action) {
  yield call(toPath.play);
}
