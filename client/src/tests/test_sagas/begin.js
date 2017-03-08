import { watchBegin, createBeginGameChannel } from '../../sagas';

import { call, put, takeEvery } from 'redux-saga/effects';

const socket = jest.fn();

describe('watchBegin', () => {
  const gen = watchBegin(socket);

  it('creates beginGameChannel', () => {
    expect(gen.next().value).toEqual(
      call(createBeginGameChannel, socket)
    );
  });

  const channel = jest.fn();
  it('takesEvery beginGameChannel event and dispatches BEGIN_GAME', ()=> {
    expect(gen.next().value).toEqual(
      takeEvery(channel, put({ type: 'BEGIN_GAME' }))
    );
  });
})
