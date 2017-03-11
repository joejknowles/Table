import { createTable } from './table';
import { addPlayer } from './player';
import { recheck } from '../asyncHelpers';

export default async (port, numberOfPlayers) => {
  const tableBrowser = await createTable(port);
  const gameCode = await tableBrowser.getGameCode();
  const players = [];
  for ( let i = 0; i < numberOfPlayers; i++ ) {
    const player = await addPlayer(port, gameCode);
    players.push(player);
  }
  await tableBrowser.clickBegin();
  const exit = () => {
    tableBrowser.exit();
    players.forEach(player => player.exit());
  };

  const isLoaded = await recheck(async () => {
    const isLoaded = await players[0].find('.play-card');
    return !!isLoaded;
  });

  if (!isLoaded) {
    throw new Error('still not loaded, after 5 attempts');
  }

  return {
    tableBrowser,
    players,
    exit
  };
};
