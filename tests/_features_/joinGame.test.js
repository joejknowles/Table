import createBrowser from './setup/phantom';
import createAppStarter from './setup/server';
import res from '../../client/src/resources/pages/startScreen';

let browser;
let appStarter;
let host;

beforeAll(async () => appStarter = await createAppStarter(5050));

beforeEach(async () =>{
  host = appStarter();
  browser = await createBrowser(host.port);
});

it('clicking "join as player" button shows a deck of cards', async () => {
  await browser.visit('/');
  const playerJoinButton = await browser.click('.player-join-button');
  const cardDeck = await browser.find('.play-card');
  expect(cardDeck.className).toBe('play-card btn');
});

it('clicking "join as player" button shows a deck of cards', async () => {
  await browser.visit('/');
  const playerJoinButton = await browser.click('.table-join-button');
  const cardDeck = await browser.find('.pile');
  expect(cardDeck.className).toBe('pile');
});

afterEach(() => {
  browser.exit();
  host.server.close();
});
