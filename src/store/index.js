import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import PrimaryReducer from '../reducers/index';

const middleware = applyMiddleware(thunkMiddleware, logger);

export const store = createStore(
    PrimaryReducer, middleware

)

store.subscribe(() => {
  // console.log('store1',store.getState())
})