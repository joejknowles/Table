import createBrowser from '../phantom';
import { createSharedMoves } from './moves';
import { sleep } from '../asyncHelpers';
import paths from '../../../../client/src/shared/paths';

const createPlayerMoves = (playerBrowser) => {
  const playCard = async () => (
    await playerBrowser.click('.play-card')
  );
  const snap = async () => {
    await sleep(2000);
    return await playerBrowser.click('.snap');
  };
  return {
    playCard,
    snap,
    ...createSharedMoves(playerBrowser)
  };
}

export const addPlayer = async (port, gameCode = '') => {
  const playerBrowser = await createBrowser(port);
  await playerBrowser.visit(paths.playWithCode(gameCode));
  return {
    ...playerBrowser,
    ...createPlayerMoves(playerBrowser)
  };
};
