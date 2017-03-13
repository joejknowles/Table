import { playCard } from '../../app/game';
import dal from '../../app/game/dal';
jest.mock('../../app/game/dal', () => ({
  moveNextCard: jest.fn(() => 'card'),
  setNextPlayer: jest.fn(() => 'player')
}));

const gameCode = 'code';

describe('playCard', () => {
  it('calls moveNextCard in dal', () => {
    playCard(gameCode);
    expect(dal.moveNextCard).toHaveBeenCalledWith(gameCode);
  });

  it('calls setNextPlayer in dal', () => {
    playCard(gameCode);
    expect(dal.setNextPlayer).toHaveBeenCalledWith(gameCode);
  });

  it('returns card and currentPlayer', () => {
    const result = playCard(gameCode);
    expect(result).toEqual({
      card: dal.moveNextCard(),
      currentPlayer: dal.setNextPlayer()
    });
  });
});
