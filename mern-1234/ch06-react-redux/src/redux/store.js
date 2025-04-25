// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// Existing imports
import counterReducer from './counterSlice';
import counterSaga from '../sagas/counterSagas';

// New user feature imports
import userReducer from './user/userSlice';
import userSagas from './user/userSagas';

import { all } from 'redux-saga/effects';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Combine all sagas
function* rootSaga() {
    yield all([
        counterSaga(),
        userSagas()
    ]);
}

// Configure store
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware),
});

// Run saga middleware
sagaMiddleware.run(rootSaga);
