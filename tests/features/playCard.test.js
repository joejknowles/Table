import { server } from '../../app/server';
import createBrowser from '../browsers/phantom';

let tableBrowser;
let playerBrowser;

beforeAll(async () =>{
  tableBrowser = await createBrowser();
  playerBrowser = await createBrowser();
});

it('test concurrent phantom instances', async () => {
  await tableBrowser.visit('/table');
  await playerBrowser.visit('/play');
});


afterAll(async () => {
  await tableBrowser.exit();
  await playerBrowser.exit();
  server.close();
});
