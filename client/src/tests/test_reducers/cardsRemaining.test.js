import { cardsRemaining } from '../../reducers';

describe('cardsRemaining reducer', () => {
  it('defaults to one', () => (
    expect(cardsRemaining(undefined, {})).toBe(1)
  ));

  it('decreases by 1 after PLAY_CARD', () => (
    expect(cardsRemaining(1, { type: 'PLAY_CARD'})).toBe(0)
  ));
});
