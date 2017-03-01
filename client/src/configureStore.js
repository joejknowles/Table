import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

export default () => {
  const middleware = [ createSagaMiddleware() ];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }
  const store = createStore(reducer, applyMiddleware(...middleware));

  return store;
};
