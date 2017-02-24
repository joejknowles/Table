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
    tableBrowser = await createBrowser(host.port);
    playerBrowser = await createBrowser(host.port);
    await playerBrowser.visit(paths.play);
    const result = await playerBrowser.click('.playCard');
    console.log(result);
    await tableBrowser.visit(paths.table);
  });

  it('says no more cards on the player\'s browser', async () => {
    const message = await playerBrowser.find('.noCardsMessage');
    expect(message.innerText).toBe(res.noCardsMessage);
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
