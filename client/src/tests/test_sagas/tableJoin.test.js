import {
  tableJoin, connectAsTable,
  createSocketChannel, watchCards } from '../../sagas/table';

import { call, fork } from 'redux-saga/effects';

import * as toPath from '../../routing';
import createWebSocketConnection, * as events from '../../api/sockets';

describe('tableJoin', () => {
  const gen = tableJoin();

  it('calls connect as table', () => {
    expect(gen.next().value).toEqual(
      fork(connectAsTable)
    );
  });

  it('calls go to table', () => {
    expect(gen.next().value).toEqual(
      call(toPath.table)
    );
  });
});

describe('connectAsTable', () => {
  const gen = connectAsTable();

  it('connects to socket', () => {
    expect(gen.next().value).toEqual(
      call(createWebSocketConnection)
    );
  });

  const socket = {
    emit: jest.fn()
  }
  it('joins table room', () => {
    expect(gen.next(socket).value).toEqual(
      call(events.joinTablesRoom, socket)
    );
  });

  it('creates socket channel', () => {
    expect(gen.next().value).toEqual(
      call(createSocketChannel, socket)
    );
  });

  const channel = jest.fn();
  it('calls watchCards', () => {
    expect(gen.next(channel).value).toEqual(
      call(watchCards, channel)
    );
  });
});
