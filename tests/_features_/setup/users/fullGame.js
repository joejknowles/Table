import { createTable } from './table';
import { addPlayer } from './player';

export default async (port, numberOfPlayers) => {
  const tableBrowser = await createTable(port);
  const players = [];
  for ( let i = 0; i < numberOfPlayers; i++ ) {
    await players.push(
      await addPlayer(port)
    );
  }
  await tableBrowser.moves.clickBegin();
  const exit = () => {
    tableBrowser.exit();
    players.forEach(player => player.exit());
  };
  return {
    tableBrowser,
    players,
    exit
  };
};
