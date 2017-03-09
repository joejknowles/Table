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
    it('shows a play card button', async () => {
      await browser.click('.player-join-button');
      await browser.click('.begin-button');
      expect(
        await browser.hasElement('.play-card')
      ).toBe(true);
    });

    it('takes you to play page', async () => {
      await browser.click('.player-join-button');
      await browser.click('.begin-button');
      expect(await browser.currentPath()).toBe(paths.play);
    });
  });

  describe('clicking "join as table" button', () => {
    it( 'shows a deck of cards', async () => {
      await browser.click('.table-join-button');
      await browser.click('.begin-button');
      expect(
        await browser.hasElement('.pile')
      ).toBe(true);
    });

    it('takes you to table page', async () => {
      await browser.click('.table-join-button');
      await browser.click('.begin-button');
      expect(await browser.currentPath()).toBe(paths.table);
    });
  });

  afterEach(() => {
    browser.exit();
    host.server.close();
  });
});
