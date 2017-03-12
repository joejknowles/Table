import { hand, tablePile, gameCode, clientType, socketId } from '../../reducers';

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

describe('client type', () => {
  it('defaults to empty string', () => (
    expect(clientType(undefined, {})).toEqual('')
  ));

  it('becomes player', () => (
    expect(clientType('', { type: 'PLAYER_JOIN' })).toEqual('PLAYER')
  ));

  it('becomes table', () => (
    expect(clientType('', { type: 'TABLE_JOIN' })).toEqual('TABLE')
  ));
});

describe('socketId', () => {
  it('defaults to empty string', () => (
    expect(socketId(undefined, {})).toEqual('')
  ));

  it('can be set', () => (
    expect(socketId('', { type: 'SET_SOCKET_ID', id: 'test' })).toEqual('test')
  ));
});
