import createBrowser from './phantom';
import paths from '../../../client/src/shared/paths';

export const addTable = async (port) => {
  const tableBrowser = await createBrowser(port);
  await tableBrowser.visit(paths.startScreen);
  await tableBrowser.click('.table-join-button');
  await tableBrowser.click('.begin-button');
  return tableBrowser;
};
