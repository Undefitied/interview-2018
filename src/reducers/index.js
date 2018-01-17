import { combineReducers } from 'redux'
import * as constants from '../constants'

export function repList(state = {
    loading: true,
    items: [],
}, action) {
    switch (action.type) {
    case constants.REQUEST_REPS:
        return {
            ...state,
            loading: true,
        }

    case constants.RECEIVE_REPS:
        return {
            ...state,
            loading: false,
            items: action.reps,
        }

    case constants.RECEIVE_REPS_ERROR:
        return {
            ...state,
            loading: false,
        }

    default:
        return state
    }
}

export function singleRep(state = {
    loading: true,
    pullRequests: []
}, action) {
    switch (action.type) {
    case constants.REQUEST_SINGLE_REP:
        return {
            ...state,
            loading: true,
        }

    case constants.RECEIVE_SINGLE_REP:
        return {
            ...state,
            loading: false,
            pullRequests: action.pullRequests
        }

    case constants.RECEIVE_SINGLE_REP_ERROR:
        return {
            ...state,
            loading: false,
        }

    default:
        return state
    }
}

export function search(state = {
    query: '',
    loading: false,
    items: []
}, action) {
    switch (action.type) {
    case constants.CHANGE_SEARCH_INPUT:
        return {
            ...state,
            query: action.query
        }

    case constants.REQUEST_SEARCH_REPS:
        return {
            ...state,
            loading: true,
        }

    case constants.RECEIVE_SEARCH_REPS:
        return {
            ...state,
            loading: false,
            items: action.reps,
        }

    case constants.RECEIVE_SEARCH_REPS_ERROR:
        return {
            ...state,
            loading: false,
        }

    case constants.EMPTY_SEARCH:
        return {
            ...state,
            loading: false,
            query: action.query
        }

    default:
        return state
    }
}

const rootReducer = combineReducers({
    repList,
    singleRep,
    search
})

export default rootReducer
