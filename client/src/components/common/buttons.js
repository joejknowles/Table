import React from 'react';
import { connect } from 'react-redux';

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
