import { server } from '../../app/server';
import createBrowser from '../browser/phantom';
import res from '../../client/src/resources/pages/startScreen';

let browser;

beforeAll(async () =>{
  browser = await createBrowser();
});

it('join game page matches snapshot', async () => {
  await browser.visit('/');
  const content = await browser.pageContent();
  expect(content).toMatchSnapshot();
});

it('shows "join as player" button', async () => {
  await browser.visit('/');
  const playerJoinButton = await browser.find('.player-join-button');
  expect(playerJoinButton.innerText).toBe(res.playerJoinButton);
});

it('clicking "join as player" button shows a deck of cards', async () => {
  await browser.visit('/');
  const playerJoinButton = await browser.click('.player-join-button');
  const cardDeck = await browser.find('.deck');
  expect(cardDeck.className).toBe('deck');
});

afterAll(async () => {
  await browser.exit();
  server.close();
});
