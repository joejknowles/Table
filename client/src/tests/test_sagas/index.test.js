import {
  watchJoin,
  watchNewGame,
  watchPlayerJoin,
  watchTableJoin,
  watchConnect,
  socketEvents
 } from '../../sagas';
import { playerJoin } from '../../sagas/play';
import { tableJoin } from '../../sagas/table';
import { watchBegin } from '../../sagas/beginGame';
import { watchAllSocketEvents } from '../../sagas/socketEvents';

import { itEnds } from './common';

import { takeEvery, fork, call } from 'redux-saga/effects';

const socket = jest.fn();

describe('watchJoin', () => {
  const gen = watchJoin(socket);

  it('forks watchConnect', () => {
    expect(gen.next().value).toEqual(
      fork(watchConnect, socket)
    );
  });

  it('forks watchAllSocketEvents', () => {
    expect(gen.next().value).toEqual(
      fork(watchAllSocketEvents, socket, socketEvents)
    );
  });

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

  it('forks watchTableJoin', () => {
    expect(gen.next().value).toEqual(
      fork(watchTableJoin, socket)
    );
  });

  it('calls watchBegin', () => {
    expect(gen.next().value).toEqual(
      call(watchBegin, socket)
    );
  });

  itEnds(gen);
});

describe('watchPlayerJoin', () => {
  const gen = watchPlayerJoin(socket);
  it('takes every PLAYER_JOIN', () => {
    expect(
      gen.next().value
    ).toEqual(
      takeEvery('PLAYER_JOIN', playerJoin, socket)
    );
  });

  itEnds(gen);
});

describe('watchTableJoin', () => {
  const gen = watchTableJoin(socket)
  it('takes every TABLE_JOIN', () => {
    expect(
      gen.next().value
    ).toEqual(
      takeEvery('TABLE_JOIN', tableJoin, socket)
    );
  });


  itEnds(gen);
});
