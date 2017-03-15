import { cardCount, tablePile } from '../../reducers/cards';
import { defaultsTo, defaultsToEmptyArray } from './common'

describe('cardCount reducer', () => {
  defaultsTo(cardCount, 1);

  it('updates on SET_CARD_COUNT', () => (
    expect(cardCount(1, {type: 'SET_CARD_COUNT', cardCount: 10})).toBe(10)
  ));

  it('decreases by 1 after PLAY_CARD', () => (
    expect(cardCount(1, { type: 'PLAY_CARD'})).toBe(0)
  ));
});

describe('table pile reducer', () => {
  defaultsToEmptyArray(tablePile);

  it('adds card after ADD_CARD', () => (
    expect(tablePile([], { type: 'ADD_CARD', card: 'card'})).toEqual(['card'])
  ));

  it('removes all cards after snap result where snapped=true', () => (
    expect(tablePile(['card', 'card', 'card'], { type: 'SNAP_RESULT', snapped: true})).toEqual([])
  ));

  it('removes no cards after snap result where snapped=false', () => (
    expect(tablePile(['card', 'card', 'card'], { type: 'SNAP_RESULT', snapped: false})).toEqual(['card', 'card', 'card'])
  ));
});
