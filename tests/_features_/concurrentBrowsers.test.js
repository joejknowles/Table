import createGame from './setup/users/fullGame';
import createAppStarter from './setup/server';

describe('concurrent browsers with phantom instances', async () => {
  let tableBrowser;
  let playerBrowser;
  let game;
  let host;
  let appStarter;

  beforeAll(async () => appStarter = await createAppStarter(5000));

  beforeEach(async () => {
    host = appStarter();
    game = await createGame(host.port, 1);
    ({ tableBrowser, players: [ playerBrowser ] } = game);
  }, 50000);

  it('loads table correctly', async () => {
    expect(
      await tableBrowser.hasElement('.pile')
    ).toBe(true);
  });

  it('loads player correctly', async () => {
    expect(
      await playerBrowser.hasElement('.play-card')
    ).toBe(true);
  });

  afterEach(() => {
    game.exit();
    host.server.close();
  });
});
