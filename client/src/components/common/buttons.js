import React from 'react';
import { connect } from 'react-redux';

export const DumbDispatchButton = ({
  res, className,
  dispatch, action
}) => (
  <button
    onClick={ () => dispatch(action) }
    className={ 'btn ' + className }
    >
    { res }
  </button>
);

export const DumbImageDispatch = ({
  res, className,
  dispatch, action, ...rest
}) => (
  <input
    onClick={ () => dispatch(action) }
    className={ 'btn ' + className }
    { ...rest }
  />
);

const connectDispatch =  connect(
  undefined, dispatch => ({ dispatch })
);

export const DispatchButton = connectDispatch(DumbDispatchButton);
export const ImageDispatch = connectDispatch(DumbImageDispatch);
