import React from 'react';
import { connect } from 'react-redux';
import { goToPath } from '../../helpers/routing';

export const ToPathButton = (props) => (
  <button
    onClick={ () => goToPath(props.path) }
    className={ props.className }
    >
    { props.res }
  </button>
);

export const DumbDispatchButton = ({
  res, className,
  dispatch, action
}) => (
  <button
    onClick={ () => dispatch(action) }
    className={ className }
    >
    { res }
  </button>
);

const connectDispatch =  connect(
  undefined, dispatch => ({ dispatch })
);

export const DispatchButton = connectDispatch(DumbDispatchButton);
