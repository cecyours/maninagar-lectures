import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlicer'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})