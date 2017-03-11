import { createTable } from './table';
import { addPlayer } from './player';
import { sleep } from '../asyncHelpers';

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

  if (!await players[0].find('.play-card')) {
    await sleep(1000);
    if (!await players[0].find('.play-card')) throw new Error('still not loaded, second attempt');
  }
  return {
    tableBrowser,
    players,
    exit
  };
};
