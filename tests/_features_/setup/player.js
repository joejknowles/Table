import createBrowser from './phantom';
import paths from '../../../client/src/shared/paths';

const createPlayerMoves = (playerBrowser) => {
  const playCard = () => (
    playerBrowser.click('.play-card')
  );
  return { playCard };
}

export const addPlayer = async (port) => {
  const playerBrowser = await createBrowser(port);
  await playerBrowser.visit(paths.startScreen);
  await playerBrowser.click('.player-join-button');
  await playerBrowser.click('.begin-button')
  return {
    ...playerBrowser,
    moves: createPlayerMoves(playerBrowser)
  };
};
