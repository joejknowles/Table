import { addCard, setGameCode } from '../../actions';

it('creates ADD_CARD action', () => {
  const card = 'test'
  expect(addCard(card)).toEqual({
    type: 'ADD_CARD', card
  });
});

it('creates SET_GAME_CODE action', () => {
  const gameCode = 'test'
  expect(setGameCode(gameCode)).toEqual({
    type: 'SET_GAME_CODE', gameCode
  });
});
