import { currentPlayer } from '../../reducers/game';

describe('currentPlayer', () => {
  it('defaults to an empty string', () => {
    expect(currentPlayer(undefined, {})).toEqual('');
  });

  it('saves player id when begin game dispatched', () => {
    expect(currentPlayer('', {
      type: 'BEGIN_GAME', currentPlayer: 'test'
    })).toEqual('test');
  });

  it('saves player id after card played is dispatched', () => {
    expect(currentPlayer('other player', {
      type: 'CARD_PLAYED', currentPlayer: 'test'
    })).toEqual('test');
  });

  it('saves player id after true SNAP_RESULT is dispatched', () => {
    expect(currentPlayer('other player', {
      type: 'SNAP_RESULT', snapped: true, currentPlayer: 'test'
    })).toEqual('test');
  });

  it('keeps player id after false SNAP_RESULT is dispatched', () => {
    expect(currentPlayer('other player', {
      type: 'SNAP_RESULT', snapped: false
    })).toEqual('other player');
  });

  it('resets to blank after PLAY_CARD is dispatched', () => {
    expect(currentPlayer('ME', {
      type: 'PLAY_CARD'
    })).toEqual('');
  });
});
