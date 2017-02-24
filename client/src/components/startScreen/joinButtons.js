import res from '../../resources/pages/startScreen';
import { ToPathButton } from '../common/buttons';
import paths from '../../paths'

const tableProps = {
  res: res.tableJoinButton,
  path: paths.table,
  className: "table-join-button"
};

export const TableJoinButton = () => ToPathButton(tableProps);

const playerProps = {
  res: res.playerJoinButton,
  path: paths.play,
  className: "player-join-button"
};

export const PlayerJoinButton = () => ToPathButton(playerProps);
