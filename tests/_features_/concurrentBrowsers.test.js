import createBrowser from './setup/phantom';
import createAppStarter from './setup/server';
import paths from '../../client/src/shared/paths';

describe('concurrent phantom instances', async () => {
  let tableBrowser;
  let playerBrowser;
  let appStarter;
  let host;

  beforeAll(async () => appStarter = await createAppStarter(5000));

  beforeEach(async () => {
    host = appStarter();
    tableBrowser = await createBrowser(host.port);
    playerBrowser = await createBrowser(host.port);
    await tableBrowser.visit(paths.table);
    await playerBrowser.visit(paths.play);
  });

  it('loads table correctly', async () => {
    expect(
      await tableBrowser.hasElement('.pile')
    ).toBe(true);
  });

  it('loads player correctly', async () => {
    await playerBrowser.click('.begin-button');
    expect(
      await playerBrowser.hasElement('.play-card')
    ).toBe(true);
  });

  afterEach(() => {
    tableBrowser.exit();
    playerBrowser.exit();
    host.server.close();
  });
});
