import {
  watchJoin,
  watchPlayerJoin, playerJoin,
  watchTableJoin, tableJoin
 } from '../../sagas';

 import { takeEvery, fork, call } from 'redux-saga/effects';

 import * as toPath from '../../routing';
 
describe('tableJoin', () => {
  const gen = tableJoin();
  it('forks go to table', () => {
    expect(
      gen.next().value
    ).toEqual(
      call(toPath.table)
    );
  });
});
