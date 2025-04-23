import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import counterSaga from "../sagas/counterSagas";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddlware) =>
        getDefaultMiddlware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(counterSaga)