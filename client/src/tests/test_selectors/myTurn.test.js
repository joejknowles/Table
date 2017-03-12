import { myTurnSelector } from '../../selectors';

describe('myTurnSelector', () => {
  it('returns false when no currentPlayer', () => (
    expect(myTurnSelector({ currentPlayer: '', socketId: '' })).toEqual(false)
  ));

  it('returns true when currentPlayer matches socketId', () => (
    expect(myTurnSelector({ currentPlayer: 'test', socketId: 'test' })).toEqual(true)
  ));
});
