import createGame from './setup/users/fullGame';
import createAppStarter from './setup/server';
jest.mock('lodash.shuffle', () => jest.fn((cards) => cards));
jest.mock('../../app/game/cardSpecies', () => [
  { id: 3 },
  { id: 2, suit: 'HEARTS', rank: '2' },
  { id: 1, suit: 'HEARTS', rank: 'A' }
]);

describe('correct cards get played when 3 cards', async () => {
  let tableBrowser;
  let player1Browser;
  let player2Browser;
  let game;
  let host;

  beforeAll(async () => {
    const appStarter = await createAppStarter(5080);
    host = appStarter();
    game = await createGame(host.port, 2);
    ({
      tableBrowser,
      players: [ player1Browser, player2Browser ]
    } = game);
  }, 20000);

  it('shows first card', async () => {
    await player1Browser.playCard();
    expect(
      await tableBrowser.containsText('A HEARTS')// TODO read some other way
    ).toBe(true);
  });

  it('shows second card', async () => {
    await player2Browser.playCard();
    expect(
      await tableBrowser.containsText('2 HEARTS')// TODO read some other way
    ).toBe(true);
  });

  it('player 1 browser has cards left', async () => {
    expect(
      await player1Browser.hasElement('.play-card')
    ).toBe(true);
  });

  it('player 2 browser has no cards left', async () => {
    expect(
      await player2Browser.hasElementNot('.play-card')
    ).toBe(true);
  });

  afterAll(() => {
    game.exit();
    host.server.close();
  });
});
