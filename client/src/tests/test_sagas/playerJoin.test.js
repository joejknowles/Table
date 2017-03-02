import {
  watchJoin,
  watchPlayerJoin, playerJoin,
  watchTableJoin, tableJoin
 } from '../../sagas';

 import { takeEvery, fork, call } from 'redux-saga/effects';

 import * as toPath from '../../routing';
describe('playerJoin', () => {
  const gen = playerJoin();
  it('forks go to play', () => {
    expect(
      gen.next().value
    ).toEqual(
      call(toPath.play)
    );
  });
});
