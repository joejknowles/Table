import { createTable } from './table';
import { addPlayer } from './player';

export default async (port, numberOfPlayers) => {
  const tableBrowser = await createTable(port);
  const gameCode = await tableBrowser.getGameCode();
  const players = [];
  for ( let i = 0; i < numberOfPlayers; i++ ) {
    await players.push(
      await addPlayer(port, gameCode)
    );
  }
  await tableBrowser.clickBegin();
  const exit = () => {
    tableBrowser.exit();
    players.forEach(player => player.exit());
  };

  if (!await players[0].find('.play-card')) throw new Error('not loaded yet');
  return {
    tableBrowser,
    players,
    exit
  };
};
