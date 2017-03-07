import {
  watchJoin,
  watchNewGame,
  watchPlayerJoin,
  watchTableJoin,
 } from '../../sagas';
import { playerJoin } from '../../sagas/play';
import { tableJoin } from '../../sagas/table';

import { takeEvery, fork, call } from 'redux-saga/effects';

const socket = jest.fn();

describe('watchJoin', () => {
  const gen = watchJoin(socket);

  it('forks watchNewGame', () => {
    expect(gen.next().value).toEqual(
      fork(watchNewGame, socket)
    );
  });

  it('forks watchPlayerJoin', () => {
    expect(gen.next().value).toEqual(
      fork(watchPlayerJoin, socket)
    );
  });

  it('calls watchTableJoin', () => {
    expect(gen.next().value).toEqual(
      call(watchTableJoin, socket)
    );
  });
});

describe('watchPlayerJoin', () => {
  it('takes every PLAYER_JOIN', () => {
    expect(
      watchPlayerJoin(socket).next().value
    ).toEqual(
      takeEvery('PLAYER_JOIN', playerJoin, socket)
    );
  });
});

describe('watchTableJoin', () => {
  it('takes every TABLE_JOIN', () => {
    expect(
      watchTableJoin(socket).next().value
    ).toEqual(
      takeEvery('TABLE_JOIN', tableJoin, socket)
    );
  });
});
