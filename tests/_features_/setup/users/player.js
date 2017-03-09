import createBrowser from '../phantom';
import { createSharedMoves } from './moves';
import paths from '../../../../client/src/shared/paths';

const createPlayerMoves = (playerBrowser) => {
  const playCard = async () => (
    await playerBrowser.click('.play-card')
  );
  return {
    playCard,
    ...createSharedMoves(playerBrowser)
  };
}

export const addPlayer = async (port) => {
  const playerBrowser = await createBrowser(port);
  await playerBrowser.visit(paths.startScreen);
  await playerBrowser.click('.player-join-button');
  return {
    ...playerBrowser,
    moves: createPlayerMoves(playerBrowser)
  };
};
