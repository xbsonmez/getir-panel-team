import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from './reducers';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';

const sageMiddleWare = createSagaMiddleware();
const middleWare = [sageMiddleWare];

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleWare)
  )
);

sageMiddleWare.run(rootSaga);

export default store;