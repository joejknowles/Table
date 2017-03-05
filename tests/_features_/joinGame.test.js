import createBrowser from './setup/phantom';
import createAppStarter from './setup/server';
import paths from '../../client/src/shared/paths';
import res from '../../client/src/resources/pages/startScreen';

let browser;
let appStarter;
let host;

beforeAll(async () => appStarter = await createAppStarter(5050));

beforeEach(async () =>{
  host = appStarter();
  browser = await createBrowser(host.port);
    await browser.visit(paths.startScreen);
});

it('clicking "join as player" button shows a play card button', async () => {
  const playerJoinButton = await browser.click('.player-join-button');
  const button = await browser.find('.play-card');
  expect(button.className).toBe('btn play-card');
});

it('clicking "join as table" button shows a deck of cards', async () => {
  const playerJoinButton = await browser.click('.table-join-button');
  const cardDeck = await browser.find('.pile');
  expect(cardDeck.className).toBe('pile');
});

afterEach(() => {
  browser.exit();
  host.server.close();
});
