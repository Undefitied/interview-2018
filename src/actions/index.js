import * as constants from '../constants'

export function requestSingleRep() {
    return {
        type: constants.REQUEST_SINGLE_REP,
    }
}

export function receiveSingleRep(pullRequests) {
    return {
        type: constants.RECEIVE_SINGLE_REP,
        pullRequests
    }
}

export function receiveSingleRepError() {
    return {
        type: constants.RECEIVE_SINGLE_REP_ERROR
    }
}

export function fetchSingleRep(fullName) {
    return {
        type: constants.FETCH_SINGLE_REP,
        fullName
    }
}

export function emptySearch() {
    return {
        type: constants.EMPTY_SEARCH,
        query: ''
    }
}

export function requestSearchReps() {
    return {
        type: constants.REQUEST_SEARCH_REPS,
    }
}

export function receiveSearchReps(reps) {
    return {
        type: constants.RECEIVE_SEARCH_REPS,
        reps
    }
}

export function receiveSearchRepsError() {
    return {
        type: constants.RECEIVE_SEARCH_REPS_ERROR
    }
}

export function changeSearchInput(query) {
    return {
        type: constants.CHANGE_SEARCH_INPUT,
        query
    }
}

export function requestReps() {
    return {
        type: constants.REQUEST_REPS,
    }
}

export function receiveReps(reps) {
    return {
        type: constants.RECEIVE_REPS,
        reps,
    }
}

export function receiveRepsError() {
    return {
        type: constants.RECEIVE_REPS_ERROR,
    }
}

export function fetchReps() {
    return {
        type: constants.FETCH_REPS,
    }
}
