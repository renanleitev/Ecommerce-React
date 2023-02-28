import { persistStore } from 'redux-persist';
import persistedReducers from './modules/reduxPersist';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    middleware: [sagaMiddleware],
    reducer: persistedReducers(rootReducer)
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;