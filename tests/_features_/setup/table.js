import createBrowser from './phantom';
import paths from '../../../client/src/paths';

export const addTable = async (port) => {
  const tableBrowser = await createBrowser(port);
  await tableBrowser.visit(paths.startScreen);
  await tableBrowser.click('.table-join-button');
  return tableBrowser;
};
