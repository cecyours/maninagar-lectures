import { call, put, takeLatest } from "redux-saga/effects";

// Simulated API call
const fetchUserApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
};

function* fetchUserData() {
    try {
        const data = yield call(fetchUserApi)
        yield put({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
        yield put({ type: "FETCH_FAILURE", error })
    }
}


export function* watchFetchUser() {
    yield takeLatest('FETCH_REQUEST', fetchUserData);
}