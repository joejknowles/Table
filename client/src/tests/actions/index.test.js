import { addCard } from '../../actions';

it('creates ADD_CARD action', () => {
  const card = 'test'
  expect(addCard(card)).toEqual({
    type: 'ADD_CARD', card
  });
});
