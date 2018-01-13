import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export const REQUEST_REPS = 'REQUEST_REPS'
export const RECEIVE_REPS = 'RECEIVE_REPS'
export const RECEIVE_REPS_ERROR = 'RECEIVE_REPS_ERROR'
export const FETCH_REPS = 'FETCH_REPS'

export const EMPTY_SEARCH = 'EMPTY_SEARCH'
export const REQUEST_SEARCH_REPS = 'REQUEST_SEARCH_REPS'
export const RECIEVE_SEARCH_REPS = 'RECIEVE_SEARCH_REPS'
export const RECIEVE_SEARCH_REPS_ERROR = 'RECIEVE_SEARCH_REPS_ERROR'
export const FETCH_SEARCH_REPS = 'FETCH_SEARCH_REPS'
export const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT'

export const REQUEST_SINGLE_REP = 'REQUEST_SINGLE_REP'
export const RECIEVE_SINGLE_REP = 'RECIEVE_SINGLE_REP'
export const RECIEVE_SINGLE_REP_ERROR = 'RECIEVE_SINGLE_REP_ERROR'
export const FETCH_SINGLE_REP = 'FETCH_SINGLE_REP'

export function requestSingleRep() {
    return {
        type: REQUEST_SINGLE_REP,
    }
}

export function recieveSingleRep(pullRequests) {
    return {
        type: RECIEVE_SINGLE_REP,
        pullRequests
    }
}

export function recieveSingleRepError() {
    return {
        type: RECIEVE_SINGLE_REP_ERROR
    }
}

export function fetchSingleRep(fullName) {
    return {
        type: FETCH_SINGLE_REP,
        fullName
    }
}

export function emptySearch() {
    return {
        type: EMPTY_SEARCH,
        query: ''
    }
}

export function requestSearchReps(query) {
    return {
        type: REQUEST_SEARCH_REPS,
        query
    }
}

export function recieveSearchReps(reps) {
    return {
        type: RECIEVE_SEARCH_REPS,
        reps
    }
}

export function recieveSearchRepsError() {
    return {
        type: RECIEVE_SEARCH_REPS_ERROR
    }
}

export function fetchSearchReps(query) {
    return {
        type: FETCH_SEARCH_REPS,
        query
    }
}

export function changeSearchInput(query) {
    return {
        type: CHANGE_SEARCH_INPUT,
        query
    }
}

export function requestReps() {
    return {
        type: REQUEST_REPS,
        items: [],
    }
}

export function receiveReps(reps) {
    return {
        type: RECEIVE_REPS,
        reps,
    }
}

export function receiveRepsError() {
    return {
        type: RECEIVE_REPS_ERROR,
    }
}

export function fetchReps() {
    return {
        type: FETCH_REPS,
    }
}
