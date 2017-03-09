import createBrowser from '../phantom';
import { createSharedMoves } from './moves';
import paths from '../../../../client/src/shared/paths';

export const createTable = async (port) => {
  const tableBrowser = await createBrowser(port);
  await tableBrowser.visit(paths.startScreen);
  await tableBrowser.click('.new-game');
  return {
    ...tableBrowser,
    ...createSharedMoves(tableBrowser)
  };
};
