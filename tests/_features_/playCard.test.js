import createGame from './setup/users/fullGame';
import createAppStarter from './setup/server';
import res from '../../client/src/resources/pages/play';

describe('clicking the card on the players browser', async () => {
  let tableBrowser;
  let playerBrowser;
  let game;
  let host;

  beforeAll(async () => {
    const appStarter = await createAppStarter(5100);
    host = appStarter();
    game = await createGame(host.port, 1);
    ({ tableBrowser, players: [ playerBrowser ] } = game);
    await playerBrowser.moves.playCard();
  });

  it('says no more cards on the player\'s browser', async () => {
    expect(
      await playerBrowser.containsText(res.noCardsMessage)
    ).toBe(true);
  });

  it('stops displaying button on the player\'s browser', async () => {
    expect(
      await playerBrowser.hasElement('.play-card')
    ).toBe(false);
  });

  it('displays the card on the table browser', async () => {
    expect(
      await tableBrowser.hasElement('.card')
    ).toBe(true);
  });

  afterAll(() => {
    game.exit();
    host.server.close();
  });
});
