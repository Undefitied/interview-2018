export const REQUEST_REPS = 'REQUEST_REPS'
export const RECEIVE_REPS = 'RECEIVE_REPS'
export const RECEIVE_REPS_ERROR = 'RECEIVE_REPS_ERROR'
export const FETCH_REPS = 'FETCH_REPS'

export const EMPTY_SEARCH = 'EMPTY_SEARCH'
export const REQUEST_SEARCH_REPS = 'REQUEST_SEARCH_REPS'
export const RECEIVE_SEARCH_REPS = 'RECEIVE_SEARCH_REPS'
export const RECEIVE_SEARCH_REPS_ERROR = 'RECEIVE_SEARCH_REPS_ERROR'
export const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT'

export const REQUEST_SINGLE_REP = 'REQUEST_SINGLE_REP'
export const RECEIVE_SINGLE_REP = 'RECEIVE_SINGLE_REP'
export const RECEIVE_SINGLE_REP_ERROR = 'RECEIVE_SINGLE_REP_ERROR'
export const FETCH_SINGLE_REP = 'FETCH_SINGLE_REP'

export const FETCH_REPS_URI = 'https://api.github.com/search/repositories?q=stars:>1&s=stars'
export const FETCH_SEARCH_REPS_URI = (query) => `https://api.github.com/search/repositories?s=stars&q=${query}`
export const FETCH_SINGLE_REP_URI = (fullName) => `https://api.github.com/repos/${fullName}/pulls`
