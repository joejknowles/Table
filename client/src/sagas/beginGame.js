import { createChannelForEvent } from './index';
import { put, call, takeEvery } from 'redux-saga/effects';

export const createBeginGameChannel = (socket) => {
  return createChannelForEvent(socket, 'BEGIN_GAME')
}

export function* requestBeginGame(socket) {
  yield call([socket, socket.emit], 'REQUEST_BEGIN_GAME');
}

export function* beginGame() {
  yield put({ type: 'BEGIN_GAME' });
}

export function* watchBegin(socket) {
  const beginGameChannel = yield call(createBeginGameChannel, socket);
  yield takeEvery('REQUEST_BEGIN_GAME', requestBeginGame, socket);
  yield takeEvery(beginGameChannel, beginGame);
}
