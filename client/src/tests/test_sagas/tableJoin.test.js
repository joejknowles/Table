import {
  tableJoin, connectAsTable,
  createSocketChannel, watchCards,
  tableBegin } from '../../sagas/table';

import { call, fork, takeEvery } from 'redux-saga/effects';

import * as toPath from '../../routing';
import createWebSocketConnection, * as events from '../../api/sockets';

const socket = {
  emit: jest.fn()
}

const gameCode = '1234';

describe('tableJoin', () => {
  const gen = tableJoin(socket, gameCode);

  it('calls connect as table', () => {
    expect(gen.next().value).toEqual(
      fork(connectAsTable, socket, gameCode)
    );
  });

  it('watches for BEGIN_GAME', () => {
    expect(gen.next().value).toEqual(
      takeEvery('BEGIN_GAME', tableBegin, socket)
    );
  });

  it('calls go to waiting', () => {
    expect(gen.next().value).toEqual(
      call(toPath.waiting)
    );
  });

  it('ends', () => {
    expect(gen.next()).toEqual(
      { done: true, value: undefined }
    );
  });
});

describe('connectAsTable', () => {
  const gen = connectAsTable(socket, gameCode);

  it('joins table room', () => {
    expect(gen.next().value).toEqual(
      call(events.joinTablesRoom, socket, gameCode)
    );
  });

  const channel = jest.fn();
  it('calls watchCards', () => {
    expect(gen.next(socket).value).toEqual(
      call(watchCards, socket)
    );
  });
});

describe('tableBegin', () => {
  const gen = tableBegin(socket);

  it('goes to table path', () => {
    expect(gen.next().value).toEqual(
      call(toPath.table)
    );
  });
});
