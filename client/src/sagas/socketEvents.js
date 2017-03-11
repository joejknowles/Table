import { eventChannel } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

export const createChannelForEvent = (socket, eventName) => {
  return eventChannel(emit => {
    socket.on(eventName, (data) => {
      emit(data);
    });
    return () => socket.off();
  });
};

export function* dispatchSocketEvent(eventName, data = {}) {
  yield put({ type: eventName, ...data });
}

export function* watchAllSocketEvents(socket, socketEvents) {
  for (let i = 0; i < socketEvents.length; i++) {
    const eventName = socketEvents[i]
    const channel = yield call(createChannelForEvent, socket, eventName);
    yield takeEvery(channel, dispatchSocketEvent, eventName);
  }
}
