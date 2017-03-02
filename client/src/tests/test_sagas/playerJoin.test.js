import { playerJoin } from '../../sagas/play';

import { call } from 'redux-saga/effects';

import * as toPath from '../../routing';

describe('playerJoin', () => {
  const gen = playerJoin();

  it('calls go to play', () => {
    expect(gen.next().value).toEqual(
      call(toPath.play)
    );
  });
});
