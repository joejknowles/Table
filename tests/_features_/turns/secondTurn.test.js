import createGame from '../setup/users/fullGame';
import createAppStarter from '../setup/server';

describe('on second turn', async () => {
  let tableBrowser;
  let player1Browser;
  let player2Browser;
  let game;
  let host;

  beforeAll(async () => {
    const appStarter = await createAppStarter(5070);
    host = appStarter();
    game = await createGame(host.port, 2);
    ({
      tableBrowser,
      players: [ player1Browser, player2Browser ]
    } = game);
    await player1Browser.playCard();
  }, 20000);

  it('shows button on second player browser', async () => {
    expect(
      await player2Browser.hasElement('.play-card')
    ).toBe(true);
  });

  it('doesn\'t show button on first player browser', async () => {
    expect(
      await player1Browser.hasElementNot('.play-card')
    ).toBe(true);
  });

  afterAll(() => {
    game.exit();
    host.server.close();
  });
});
