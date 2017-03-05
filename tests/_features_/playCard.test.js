import createBrowser from './setup/phantom';
import { addPlayer } from './setup/player';
import { addTable } from './setup/table';
import createAppStarter from './setup/server';
import paths from '../../client/src/shared/paths';
import res from '../../client/src/resources/pages/play';


describe('clicking the card on the players browser', async () => {
  let tableBrowser;
  let playerBrowser;
  let host;

  beforeAll(async () => {
    const appStarter = await createAppStarter(5100);
    host = appStarter();
    playerBrowser = await addPlayer(host.port);
    tableBrowser = await addTable(host.port);
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
    tableBrowser.exit();
    playerBrowser.exit();
    host.server.close();
  });
});
