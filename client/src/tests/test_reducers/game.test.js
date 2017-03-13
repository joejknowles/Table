import { playerCount, gameCode } from '../../reducers/game';

describe('playerCount', () => {
  it('defaults to 0', () => (
    expect(playerCount(undefined, {})).toBe(0)
  ));

  it('changes to new number when player added', () => (
    expect(playerCount(0, {
      type: 'PLAYER_ADDED',
       playerCount: 2
    })).toBe(2)
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

  it('saves game code from new game', () => (
    expect(gameCode('', { type: 'NEW_GAME', game})).toEqual(game.code)
  ));

  it('saves game code from player join', () => (
    expect(gameCode('', { type: 'PLAYER_JOIN', gameCode: game.code})).toEqual(game.code)
  ));

  it('saves game code from SET_GAME_CODE', () => (
    expect(gameCode('', { type: 'SET_GAME_CODE', gameCode: game.code})).toEqual(game.code)
  ));
});
