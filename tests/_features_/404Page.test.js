import createBrowser from './setup/phantom';
import createAppStarter from './setup/server';

describe('404 page', async () => {
  let browser;
  let appStarter;
  let host;

  beforeAll(async () => appStarter = await createAppStarter(5010));

  beforeEach(async () => {
    host = appStarter();
    browser = await createBrowser(host.port);
    await browser.visit('/pathThatAlmostCertainlyWon');
  });

  it('loads', async () => {
    const pile = await browser.find('.not-found-message');
    expect(pile.className).toBe('not-found-message');
  });

  afterEach(() => {
    browser.exit();
    host.server.close();
  });
});
