import { emitGameAction } from '../../sagas/play';

import { gameCodeSelector } from '../../reducers';
import { select, call } from 'redux-saga/effects';

const socket = {
  emit: jest.fn()
};

describe('emitGameAction', () => {
  const gen = emitGameAction(socket, { type: 'PLAY_CARD'});
  it('selects game code from store', () => {
    expect(gen.next().value).toEqual(
      select(gameCodeSelector)
    );
  });

  const gameCode = '1234';
  it('emits play card', () => {
    expect(gen.next(gameCode).value).toEqual(
      call([socket, socket.emit], 'PLAY_CARD', { gameCode })
    );
  });

  it('ends', () => {
    expect(gen.next()).toEqual({
      done: true, value: undefined
    });
  });
});
