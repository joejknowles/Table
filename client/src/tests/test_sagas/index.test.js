import {
  watchJoin,
  watchPlayerJoin, playerJoin,
  watchTableJoin, tableJoin
 } from '../../sagas';

import { takeEvery, fork, call } from 'redux-saga/effects';

describe('watchJoin', () => {
  const gen = watchJoin();
  it('forks watchPlayerJoin', () => {
    expect(gen.next().value).toEqual(
      fork(watchPlayerJoin)
    );
  });

  it('calls watchTableJoin', () => {
    expect(gen.next().value).toEqual(
      call(watchTableJoin)
    );
  });
});

describe('watchPlayerJoin', () => {
  it('takes every PLAYER_JOIN', () => {
    expect(
      watchPlayerJoin().next().value
    ).toEqual(
      takeEvery('PLAYER_JOIN', playerJoin)
    );
  });
});

describe('watchTableJoin', () => {
  it('takes every TABLE_JOIN', () => {
    expect(
      watchTableJoin().next().value
    ).toEqual(
      takeEvery('TABLE_JOIN', tableJoin)
    );
  });
});
