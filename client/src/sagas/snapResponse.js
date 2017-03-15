import { select, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import res from '../resources/pages/play';
import sharedRes from '../resources/pages/shared';

import { socketIdSelector } from '../reducers';

export function* snapResponse(action) {
  if(action.snapped) {
    const yourId = yield select(socketIdSelector);
    if (yourId === action.snapBy) {
      yield put({ type: 'ADD_NOTIFICATION', message: res.youWin });
    } else {
      yield put({ type: 'ADD_NOTIFICATION', message: sharedRes.snapNotification })
    }
    yield call(delay, 2000);
    yield put({ type: 'REMOVE_NOTIFICATION' });
  }
}
