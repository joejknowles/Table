import { tableJoin } from '../../sagas/table';

import { call } from 'redux-saga/effects';

import * as toPath from '../../routing';

describe('tableJoin', () => {
  const gen = tableJoin();
  it('calls go to table', () => {
    expect(gen.next().value).toEqual(
      call(toPath.table)
    );
  });
});
