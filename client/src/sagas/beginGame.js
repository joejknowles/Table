import { call, takeEvery, select } from 'redux-saga/effects';
import { gameCodeSelector } from '../reducers';

export function* requestBeginGame(socket) {
  const gameCode = yield select(gameCodeSelector)
  yield call([socket, socket.emit], 'REQUEST_BEGIN_GAME', { gameCode });
}

export function* watchBegin(socket) {
  yield takeEvery('REQUEST_BEGIN_GAME', requestBeginGame, socket);
}
