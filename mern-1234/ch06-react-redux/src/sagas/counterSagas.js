const { delay, put, takeEvery } = require("redux-saga/effects");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_ASYNC = "INCREMENT_ASYNC";
const DECREMENT_ASYNC = "DECREMENT_ASYNC"

function* incrementAsync() {
    yield delay(1000)
    yield put({ type: INCREMENT })
}

function* decrementAsync() {
    yield delay(1000);
    yield put({ type: DECREMENT })
}

function* watchCounterSaga() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync);
    yield takeEvery(DECREMENT_ASYNC, decrementAsync)
}



export default watchCounterSaga;

