import { cardsMatch } from '../../../app/game/snap';
import dal from '../../../app/game/dal';
jest.mock('../../../app/game/dal', () => ({
  getLastTableCards: jest.fn((game) => {
    if (game === 'match') {
      return [ { rank: 'A' }, { rank: 'A' } ];
    } else {
      return [ { rank: 'A' }, { rank: 'K' } ];
    }
  })
}));

describe('cardsMatch', () => {
  it('returns true if the last two cards match rank', () => {
    expect(cardsMatch('match')).toBe(true);
  });
  it('returns false if the last two cards don\'t match rank', () => {
    expect(cardsMatch('second')).toBe(false);
  });
});
