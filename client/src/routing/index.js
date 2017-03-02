import paths from '../paths';

import { browserHistory } from 'react-router';

const toPath = (path) => browserHistory.push(path);

export const play = () => toPath(paths.play);

export const table = () => toPath(paths.table);
