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

  let isLoaded = await recheck(async () => {
    const isLoaded = await tableBrowser.find('.begin-button');
    return !!isLoaded;
  }, ' load tableBrowser ');

  if (!isLoaded) {
    throw new Error('table still not loaded, after 5 attempts');
  }

  await tableBrowser.clickBegin();
  const exit = () => {
    tableBrowser.exit();
    players.forEach(player => player.exit());
  };

  isLoaded = await recheck(async () => {
    const isLoaded = await players[0].find('.play-card');
    return !!isLoaded;
  }, 'load player browser');

  if (!isLoaded) {
    throw new Error('player still not loaded, after 5 attempts');
  }

  return {
    tableBrowser,
    players,
    exit
  };
};
