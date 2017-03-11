import { createChannelForEvent } from './socketEvents';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import { gameCodeSelector } from '../reducers';

export const createBeginGameChannel = (socket) => {
  return createChannelForEvent(socket, 'BEGIN_GAME')
}

export function* requestBeginGame(socket) {
  const gameCode = yield select(gameCodeSelector)
  yield call([socket, socket.emit], 'REQUEST_BEGIN_GAME', { gameCode });
}

export function* beginGame() {
  yield put({ type: 'BEGIN_GAME' });
}

export function* watchBegin(socket) {
  const beginGameChannel = yield call(createBeginGameChannel, socket);
  yield takeEvery('REQUEST_BEGIN_GAME', requestBeginGame, socket);
  yield takeEvery(beginGameChannel, beginGame);
}
