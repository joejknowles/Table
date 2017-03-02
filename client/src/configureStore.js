import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import rootReducer from './reducers';
import rootSaga from './sagas';

export default () => {
  const reduxSaga = createSagaMiddleware();
  const middleware = [ reduxSaga ];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  reduxSaga.run(rootSaga);
  return store;
};
