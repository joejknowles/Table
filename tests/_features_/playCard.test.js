import createBrowser from '../setup/phantom';
import createAppStarter from '../setup/server';
import paths from '../../client/src/paths';
import res from '../../client/src/resources/pages/play';

describe('clicking the card on the players browser', async () => {
  let tableBrowser;
  let playerBrowser;
  let appStarter;
  let host;

  beforeAll(async () => appStarter = await createAppStarter(5100));

  beforeEach(async () => {
    host = appStarter();
    playerBrowser = await createBrowser(host.port);
    tableBrowser = await createBrowser(host.port);
    await tableBrowser.visit(paths.startScreen);
    await tableBrowser.click('.table-join-button');
    await playerBrowser.visit(paths.startScreen);
    await playerBrowser.click('.player-join-button');
    await playerBrowser.click('.play-card');
  });

  it('says no more cards on the player\'s browser', async () => {
    const message = await playerBrowser.find('.no-cards-message');
    expect(message.innerText).toBe(res.noCardsMessage);
  });

  it('stops displaying button on the player\'s browser', async () => {
    const playCardButton = await playerBrowser.find('.play-card');
    expect(playCardButton.length).toBe(0);
  });

  it('displays the card on the table browser', async () => {
    const card = await tableBrowser.find('.card');
    expect(card.className).toBe('card');
  });

  afterEach(() => {
    tableBrowser.exit();
    playerBrowser.exit();
    host.server.close();
  });
});
