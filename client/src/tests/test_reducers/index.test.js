import { hand, tablePile } from '../../reducers';

describe('hand reducer', () => {
  it('defaults to one', () => (
    expect(hand(undefined, {})).toBe(1)
  ));

  it('decreases by 1 after PLAY_CARD', () => (
    expect(hand(1, { type: 'PLAY_CARD'})).toBe(0)
  ));
});

describe('table pile reducer', () => {
  it('defaults to empty array', () => (
    expect(tablePile(undefined, {})).toEqual([])
  ));

  it('adds card after ADD_CARD', () => (
    expect(tablePile([], { type: 'ADD_CARD', card: 'card'})).toEqual(['card'])
  ));
});
