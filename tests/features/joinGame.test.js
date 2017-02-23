import createBrowser from '../browsers/phantom';
import res from '../../client/src/resources/pages/startScreen';

let browser;
let server;

beforeAll(async () =>{
  server = require('../../app/server').server;
  browser = await createBrowser();
});

it('join game page matches snapshot', async () => {
  await browser.visit('/');
  const content = await browser.pageContent();
  expect(content).toMatchSnapshot();
});

it('clicking "join as player" button shows a deck of cards', async () => {
  await browser.visit('/');
  const playerJoinButton = await browser.click('.player-join-button');
  const cardDeck = await browser.find('.deck');
  expect(cardDeck.className).toBe('deck');
});

it('clicking "join as player" button shows a deck of cards', async () => {
  await browser.visit('/');
  const playerJoinButton = await browser.click('.table-join-button');
  const cardDeck = await browser.find('.pile');
  expect(cardDeck.className).toBe('pile');
});

afterAll(async () => {
  await browser.exit();
  await server.close();
  const thing = await server.on('close');
  console.log(thing);
});
