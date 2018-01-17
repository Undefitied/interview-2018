import { delay } from 'redux-saga'
import fetch from 'isomorphic-fetch'
import { takeLatest, put, call } from 'redux-saga/effects'
import {
    FETCH_REPS_URI,
    FETCH_SEARCH_REPS_URI,
    FETCH_SINGLE_REP_URI,

    FETCH_REPS,
    FETCH_SINGLE_REP,
    CHANGE_SEARCH_INPUT,
} from '../constants'
import {
    requestReps,
    receiveReps,
    receiveRepsError,

    emptySearch,
    requestSearchReps,
    receiveSearchReps,
    receiveSearchRepsError,

    requestSingleRep,
    receiveSingleRep,
    receiveSingleRepError,
} from '../actions'

export function fetchRepsApi() {
    return fetch(FETCH_REPS_URI)
        .then(response => response.json())
        .catch(err => {
            throw new Error(err)
        })
}

export function* fetchReps() {
    try {
        yield put(requestReps())
        const json = yield call(fetchRepsApi)
        yield put(receiveReps(json.items.splice(0, 5)))
    } catch (e) {
        yield put(receiveRepsError(e))
    }
}

function fetchSearchRepsApi(query) {
    return fetch(FETCH_SEARCH_REPS_URI(query))
        .then(response => response.json())
        .catch(err => {
            throw new Error(err)
        })
}

function* fetchSearchReps(action) {
    try {
        const { query } = action

        if (!query) {
            return yield put(emptySearch())
        }

        yield put(requestSearchReps())
        const json = yield call(fetchSearchRepsApi, query)
        yield put(receiveSearchReps(json.items || []))
    } catch (e) {
        yield put(receiveSearchRepsError(e))
    }
}

function fetchSignleRepApi(fullName) {
    return fetch(FETCH_SINGLE_REP_URI(fullName))
        .then(response => response.json())
        .catch(err => {
            throw new Error(err)
        })
}

function* fetchSignleRep(action) {
    try {
        const { fullName } = action
        yield put(requestSingleRep())
        const json = yield call(fetchSignleRepApi, fullName)
        yield put(receiveSingleRep(json.splice(0, 10)))
    } catch (e) {
        yield put(receiveSingleRepError(e))
    }
}

function* handleSearchInput(action) {
    yield call(delay, 500)
    yield call(fetchSearchReps, action)
}

function* mySaga() {
    yield takeLatest(FETCH_REPS, fetchReps)
    yield takeLatest(CHANGE_SEARCH_INPUT, handleSearchInput)
    yield takeLatest(FETCH_SINGLE_REP, fetchSignleRep)
}

export default mySaga
