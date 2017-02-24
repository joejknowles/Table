import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

export default () => {
  const middleware = [];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }
  const store = createStore(() => ({}), {}, applyMiddleware(...middleware));

  return store;
};
