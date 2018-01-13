import { combineReducers } from 'redux'
import {
    REQUEST_REPS,
    RECEIVE_REPS,
    RECEIVE_REPS_ERROR,

    EMPTY_SEARCH,
    REQUEST_SEARCH_REPS,
    RECIEVE_SEARCH_REPS,
    RECIEVE_SEARCH_REPS_ERROR,
    CHANGE_SEARCH_INPUT,

    REQUEST_SINGLE_REP,
    RECIEVE_SINGLE_REP,
    RECIEVE_SINGLE_REP_ERROR,
} from '../actions'

function repList(state = {
    loading: true,
    items: [],
}, action) {
    switch (action.type) {
        case REQUEST_REPS:
            return {
                ...state,
                loading: true,
            }

        case RECEIVE_REPS:
            return {
                ...state,
                loading: false,
                items: action.reps,
            }

        case RECEIVE_REPS_ERROR:
            return {
                ...state,
                loading: false,
            }

        default:
            return state;
    }
}

function singleRep(state = {
    loading: true,
    pullRequests: []
}, action) {
    switch (action.type) {
        case REQUEST_SINGLE_REP:
            return {
                ...state,
                loading: true,
            }

        case RECIEVE_SINGLE_REP:
            return {
                ...state,
                loading: false,
                pullRequests: action.pullRequests
            }

        case RECIEVE_SINGLE_REP_ERROR:
            return {
                ...state,
                loading: false,
            }

        default:
            return state
    }
}

function search(state = {
    query: '',
    loading: false,
    items: []
}, action) {
    switch (action.type) {

        case CHANGE_SEARCH_INPUT:
            return {
                ...state,
                query: action.query
            }

        case REQUEST_SEARCH_REPS:
            return {
                ...state,
                loading: true,
                query: action.query
            }

        case RECIEVE_SEARCH_REPS:
            return {
                ...state,
                loading: false,
                items: action.reps,
            }

        case RECIEVE_SEARCH_REPS_ERROR:
            return {
                ...state,
                loading: false,
            }

        case EMPTY_SEARCH:
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