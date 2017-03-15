import createGame from '../setup/users/fullGame';
import createAppStarter from '../setup/server';
import playRes from '../../../client/src/resources/pages/play';
import sharedRes from '../../../client/src/resources/pages/shared';
jest.mock('lodash.shuffle', () => jest.fn((cards) => cards));
jest.mock('../../../app/game/cardSpecies', () => [
  { id: 2, suit: 'HEARTS', rank: '2' },
  { id: 1, suit: 'HEARTS', rank: '5' },
  { id: 3, suit: 'CLUBS', rank: 'A' },
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
    const appStarter = await createAppStarter(5090);
    host = appStarter();
    game = await createGame(host.port, 2);
    ({
      tableBrowser,
      players: [ player1Browser, player2Browser ]
    } = game);
    await player1Browser.playCard();
    await player2Browser.playCard();
    await player1Browser.playCard();
    await player1Browser.snap();
  }, 20000);

  it('player 1 sees his snap was successful', async () => {
    expect(
      await player1Browser.containsText(playRes.youWin)
    ).toBe(true);
  });

  it('table shows Snap happened', async () => {
    expect(
      await tableBrowser.containsText(sharedRes.snapNotification)
    ).toBe(true);
  });

  it('other player shows snap happened', async () => {
    expect(
      await player2Browser.containsText(sharedRes.snapNotification)
    ).toBe(true);
  });

  it('table cards disappear', async () => {
    expect(
      await tableBrowser.hasElement('.noCards')
    ).toBe(true);
  });

  afterAll(() => {
    game.exit();
    host.server.close();
  });
});
