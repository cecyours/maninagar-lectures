import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../reducers/userReducer'
import createSagaMiddleware from "redux-saga";
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        user: userReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

// Run Sagas
sagaMiddleware.run(rootSaga);

export default store;

