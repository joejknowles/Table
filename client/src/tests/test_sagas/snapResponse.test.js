import { snapResponse } from '../../sagas/snapResponse';

import playRes from '../../resources/pages/play';
import sharedRes from '../../resources/pages/shared';
import { socketIdSelector } from '../../reducers';

import { itEnds } from './common';
import { put, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';


describe('snapResponse when you win', () => {
  const action = {
    snapped: true,
    snapBy: 'yourId'
  }
  const gen = snapResponse(action);

  xit('puts new deck for correct player')

  it('selects playerId', () => {
    expect(gen.next().value).toEqual(
      select(socketIdSelector)
    );
  });

  it('puts display message', () => {
    expect(gen.next('yourId').value).toEqual(
      put({ type: 'ADD_NOTIFICATION', message: playRes.youWin })
    );
  });

  it('delays', () => {
    expect(gen.next().value).toEqual(
      call(delay, 2000)
    );
  });

  it('puts remove message', () => {
    expect(gen.next().value).toEqual(
      put({ type: 'REMOVE_NOTIFICATION' })
    );
  });

  itEnds(gen);
});

describe('snapResponse when someone else wins', () => {
  const action = {
    snapped: true,
    snapBy: 'other person\'s id'
  }
  const gen = snapResponse(action);

  gen.next();

  it('puts display message', () => {
    expect(gen.next('yourId').value).toEqual(
      put({ type: 'ADD_NOTIFICATION', message: sharedRes.snapNotification })
    );
  });

  it('delays', () => {
    expect(gen.next().value).toEqual(
      call(delay, 2000)
    );
  });

  it('puts remove message', () => {
    expect(gen.next().value).toEqual(
      put({ type: 'REMOVE_NOTIFICATION' })
    );
  });

  itEnds(gen);
});

describe('snapResponse when false snap', () => {
  const action = {
    snapped: false,
    snappedBy: 'other person\'s id'
  }
  const gen = snapResponse(action);

  gen.next();

  xit('puts display message', () => {
    expect(gen.next('yourId').value).toEqual(
      put({ type: 'ADD_NOTIFICATION', message: playRes.youWin })
    );
  });

  xit('delays', () => {
    expect(gen.next().value).toEqual(
      call(delay, 2000)
    );
  });

  xit('puts remove message', () => {
    expect(gen.next().value).toEqual(
      put({})
    );
  });

  //TODO itEnds(gen);
});
