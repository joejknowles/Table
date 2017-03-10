import { playerCount } from '../../reducers/game';

describe('playerCount', () => {
  it('defaults to 0', () => (
    expect(playerCount(undefined, {})).toBe(0)
  ));

  it('changes to new number when player added', () => (
    expect(playerCount(0, {
      type: 'PLAYER_ADDED',
      game: { playerCount: 2 }
    })).toBe(2)
  ));
});
