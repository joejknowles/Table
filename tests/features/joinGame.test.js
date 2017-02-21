import { server } from '../../app/server';
import createBrowser from '../browser/phantom';

let browser;
beforeAll(async () =>{
  browser = await createBrowser();
});

it('join game page matches snapshot', async () => {
  await browser.visit('/');
  const content = await browser.pageContent();
  expect(content).toMatchSnapshot();
});

it('shows join as player button', async () => {
  await browser.visit('/');
  const playerJoinButton = await browser.find('.player-join-button')
  expect(playerJoinButton.getText()).toBe('Join as a player');
});

afterAll(async () => {
  await browser.exit();
  server.close();
});
