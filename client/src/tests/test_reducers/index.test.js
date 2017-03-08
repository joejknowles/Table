import { hand, tablePile, gameCode, clientType } from '../../reducers';

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

const game = {
  status: 0,
  code: '1234'
}

describe('game code reducer', () => {
  it('defaults to empty string', () => (
    expect(gameCode(undefined, {})).toEqual('')
  ));

  it('saves game code', () => (
    expect(gameCode('', { type: 'NEW_GAME', game})).toEqual(game.code)
  ));
});

describe('client type', () => {
  it('defaults to empty string', () => (
    expect(clientType(undefined, {})).toEqual('')
  ));

  it('', () => (
    expect(clientType('', { type: 'PLAYER_JOIN' })).toEqual('PLAYER')
  ));

  it('', () => (
    expect(clientType('', { type: 'TABLE_JOIN' })).toEqual('TABLE')
  ));
});
