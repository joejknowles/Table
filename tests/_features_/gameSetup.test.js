import createBrowser from './setup/phantom';
import createAppStarter from './setup/server';
import paths from '../../client/src/shared/paths';
import res from '../../client/src/resources/pages/startScreen';

describe('setting up a game', () => {
  let tableBrowser;
  let player1Browser;
  let player2Browser;
  let appStarter;
  let host;
  let gameCode;

  beforeAll(async () => {
    appStarter = await createAppStarter(5020);
    host = appStarter();
    tableBrowser = await createBrowser(host.port);
    player1Browser = await createBrowser(host.port);
    player2Browser = await createBrowser(host.port);
    await tableBrowser.visit(paths.startScreen);
    await tableBrowser.click('.new-game');
    gameCode = (await tableBrowser.find('.game-code')).innerHTML;
  });

  it('displays a game code', async () => {
    expect(
      await tableBrowser.hasElement('.game-code')
    ).toBe(true);
  });

  it('player joins by entering code in url', async () => {
    await player1Browser.visit(`${paths.play}/${gameCode}`);
    expect(
      await tableBrowser.hasElement('.number-of-players')
    ).toBe(true);
  });

  xit('says 1 player', async () => {

  });

  xit('player joins by entering code on first screen', async () => {

  });

  xit('says 2 players', async () => {

  });

  xit('player joins by going to /play then entering code', async () => {

  });

  it('begins game on own browser', async () => {
    tableBrowser.click('.begin-button');
    expect(
      await tableBrowser.hasElement('.pile')
    ).toBe(true);
  });

  it('begins game on other browsers', async () => {
    expect(
      await player1Browser.hasElement('.pile')
    ).toBe(true);
  });

  afterAll(() => {
    tableBrowser.exit();
    player1Browser.exit();
    player2Browser.exit();
    host.server.close();
  });
});
