// redux/user/userSagas.js
import { takeLatest, put, call } from 'redux-saga/effects';
import {
    addUserRequest,
    addUserSuccess,
    addUserFailure,
    removeUserRequest,
    removeUserSuccess,
    removeUserFailure,
} from './userSlice';

import { addUserApi, removeUserApi } from '../../api/userApi';

// Worker saga: Add User
function* handleAddUser(action) {
    try {
        const response = yield call(addUserApi, action.payload);
        yield put(addUserSuccess(response));
    } catch (error) {
        yield put(addUserFailure(error.message));
    }
}

// Worker saga: Remove User
function* handleRemoveUser(action) {
    try {
        yield call(removeUserApi, action.payload);
        yield put(removeUserSuccess(action.payload));
    } catch (error) {
        yield put(removeUserFailure(error.message));
    }
}

export default function* userSagas() {
    yield takeLatest(addUserRequest.type, handleAddUser);
    yield takeLatest(removeUserRequest.type, handleRemoveUser);
}
