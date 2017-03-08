import paths from '../shared/paths';

import { browserHistory } from 'react-router';

const toPath = (path) => browserHistory.push(path);

export const play = () => toPath(paths.play);

export const table = () => toPath(paths.table);

export const waiting = () => toPath(paths.waiting);
