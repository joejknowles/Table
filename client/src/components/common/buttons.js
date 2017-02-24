import React from 'react';
import { goToPath } from '../../helpers/routing';

export const ToPathButton = (props) => (
  <button
    onClick={ () => goToPath(props.path) }
    className={ props.className }
    >
    { props.res }
  </button>
);
