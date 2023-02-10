import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const composedMiddleware = [
  applyMiddleware(sagaMiddleware),
];


const composedEnhancers = compose(...composedMiddleware);

export default createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);
