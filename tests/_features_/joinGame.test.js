import createBrowser from './setup/phantom';
import createAppStarter from './setup/server';
import paths from '../../client/src/shared/paths';
import res from '../../client/src/resources/pages/startScreen';

describe('joining a game', () => {
  let browser;
  let appStarter;
  let host;

  beforeAll(async () => appStarter = await createAppStarter(5050));

  beforeEach(async () =>{
    host = appStarter();
    browser = await createBrowser(host.port);
    await browser.visit(paths.startScreen);
  });

  describe('clicking "join as player" button', () =>{
    it('takes you to waiting page', async () => {
      await browser.click('.player-join-button');
      expect(await browser.currentPath()).toBe(paths.waiting);
    });
  });

  describe('clicking "join as table" button', () => {
    it('takes you to waiting page', async () => {
      await browser.click('.table-join-button');
      expect(await browser.currentPath()).toBe(paths.waiting);
    });
  });

  afterEach(() => {
    browser.exit();
    host.server.close();
  });
});
