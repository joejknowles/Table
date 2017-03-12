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
});
