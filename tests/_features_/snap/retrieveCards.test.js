import createGame from '../setup/users/fullGame';
import createAppStarter from '../setup/server';
import playRes from '../../../client/src/resources/pages/play';
import sharedRes from '../../../client/src/resources/pages/shared';
import { sleep } from '../setup/asyncHelpers';
jest.mock('lodash.shuffle', () => jest.fn((cards) => cards));
jest.mock('../../../app/game/cardSpecies', () => [
  { id: 2, suit: 'HEARTS', rank: 'A' },
  { id: 3, suit: 'CLUBS', rank: 'A' },
  { id: 3, suit: 'CLUBS', rank: 'A' },
  { id: 4, suit: 'HEARTS', rank: 'A' }
]);

describe('snapping', async () => {
  let tableBrowser;
  let player1Browser;
  let player2Browser;
  let game;
  let host;

  beforeAll(async () => {
    const appStarter = await createAppStarter(5100);
    host = appStarter();
    game = await createGame(host.port, 2);
    ({
      tableBrowser,
      players: [ player1Browser, player2Browser ]
    } = game);
    await player1Browser.playCard();
    await player2Browser.playCard();
    await player1Browser.playCard();
  }, 20000);

  it('player 1 has no cards left before snapping', async () => {
    expect(
      await player1Browser.hasElementNot('.card')
    ).toBe(true);
  });

  it('cards return after snapping', async () => {
    await player1Browser.snap();
    expect(
      await player1Browser.hasElement('.card')
    ).toBe(true);
  }, 15000);

  it('1st player goes again after collecting cards', async () => {
    expect(
      await player1Browser.hasElement('.play-card')
    ).toBe(true);
  });

  afterAll(() => {
    game.exit();
    host.server.close();
  });
});
