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

export const DispatchButton = ({
  action,
  dispatch,
  res,
  className
}) => (
  <button
    onClick={ () => dispatch(action) }
    className={ className }
    >
    { res }
  </button>
);
