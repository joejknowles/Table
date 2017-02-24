import createBrowser from '../setup/phantom';
import createAppStarter from '../setup/server';
import paths from '../../client/src/paths';

describe('clicking the card on the players browser', async () => {
  let tableBrowser;
  let playerBrowser;
  let appStarter;
  let host;

  beforeAll(async () => appStarter = await createAppStarter(5100));

  beforeEach(async () => {
    host = appStarter();
    tableBrowser = await createBrowser(host.port);
    playerBrowser = await createBrowser(host.port);
    await playerBrowser.visit(paths.play);
    const result = await playerBrowser.click('.playCard');
    console.log(result);
    await tableBrowser.visit(paths.table);
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
