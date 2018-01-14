import { delay } from 'redux-saga'
import { takeLatest, put, call } from 'redux-saga/effects'
import {
    FETCH_REPS,
    FETCH_SINGLE_REP,
    CHANGE_SEARCH_INPUT,

    requestReps,
    receiveReps,
    receiveRepsError,

    emptySearch,
    requestSearchReps,
    recieveSearchReps,
    recieveSearchRepsError,

    requestSingleRep,
    recieveSingleRep,
    recieveSingleRepError,
} from '../actions'

const FETCH_REPS_URI = 'https://api.github.com/search/repositories?q=stars:>1&s=stars'
const FETCH_SEARCH_REPS_URI = (query) => `https://api.github.com/search/repositories?s=stars&q=${query}`
const FETCH_SINGLE_REP_URI = (fullName) => `https://api.github.com/repos/${fullName}/pulls`

function fetchRepsApi() {
    return fetch(FETCH_REPS_URI)
        .then(response => response.json())
        .catch(err => {
            throw new Error(err)
        })
}

function * fetchReps() {
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

function * fetchSearchReps(action) {
    try {
        const { query } = action

        if (!query) {
            return yield put(emptySearch())
        }

        yield put(requestSearchReps(query))
        const json = yield call(fetchSearchRepsApi, query)
        yield put(recieveSearchReps(json.items || []))
    } catch (e) {
        yield put(recieveSearchRepsError(e))
    }
}

function fetchSignleRepApi(fullName) {
    return fetch(FETCH_SINGLE_REP_URI(fullName))
        .then(response => response.json())
        .catch(err => {
            throw new Error(err)
        })
}

function * fetchSignleRep(action) {
    try {
        const { fullName } = action
        yield put(requestSingleRep())
        const json = yield call(fetchSignleRepApi, fullName)
        yield put(recieveSingleRep(json.splice(0, 10)))
    } catch (e) {
        yield put(recieveSingleRepError(e))
    }
}

function * mySaga() {
    yield takeLatest(FETCH_REPS, fetchReps)
    yield takeLatest(CHANGE_SEARCH_INPUT, handleSearchInput)
    yield takeLatest(FETCH_SINGLE_REP, fetchSignleRep)
}

function * handleSearchInput(action) {
    yield call(delay, 500)
    yield call(fetchSearchReps, action)
}

export default mySaga
