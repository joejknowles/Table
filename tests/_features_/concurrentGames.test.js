import createGame from './setup/users/fullGame';
import createAppStarter from './setup/server';

describe('concurrent games', async () => {
  let game1;
  let game2;
  let host;
  let appStarter;

  beforeAll(async () => appStarter = await createAppStarter(5030));

  beforeEach(async () => {
    host = appStarter();
    game1 = await createGame(host.port, 1);
    game2 = await createGame(host.port, 1);
    await game1.players[0].playCard();
  }, 50000);

  it('table shows card in first game', async () => {
    expect(
      await game1.tableBrowser.hasElement('.playing-card')
    ).toBe(true);
  }, 15000);

  it('table doesn\'t show card in second game', async () => {
    expect(
      await game2.tableBrowser.hasElementNot('.playing-card')
    ).toBe(true);
  }, 15000);

  afterEach(() => {
    game1.exit();
    game2.exit();
    host.server.close();
  });
});
