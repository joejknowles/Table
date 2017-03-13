import deal from '../../app/game/deal';
import shuffle from 'lodash.shuffle';
import fullDeck from '../../app/game/cardSpecies';
jest.mock('lodash.shuffle', () => jest.fn((cards) => cards));

const mockDeck = [1, 2, 3, 4];

describe('deal', () => {
  it('shuffles the cards', () => {
    deal(mockDeck, 1);
    expect(shuffle).toHaveBeenCalledWith(mockDeck);
  });

  it('returns 2 equal piles of cards when 2 players', () => {
    const result = deal(mockDeck, 2);
    expect(result).toEqual([[1,3],[2,4]]);
  });

  it('returns 3 piles of cards when 3 players', () => {
    const result = deal(mockDeck, 3);
    expect(result).toEqual([[1,4],[2],[3]]);
  });

  it('deals a full deck', () => {
    const result = deal(fullDeck, 5);
    expect(result.length).toEqual(5);
    expect(result[0].length).toEqual(11);
    expect(result[4].length).toEqual(10);
  });
});
