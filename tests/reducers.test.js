import * as reducers from '../src/reducers'
import * as constants from '../src/constants'
import { initialState } from './config/store'

describe('repos top 5 reducers', () => {
    it('should return initial state', () => {
        expect(reducers.repList(undefined, {})).toEqual(initialState.repList)
    })

    it('should handle REQUEST_REPS', () => {
        expect(
            reducers.repList({}, {
                type: constants.REQUEST_REPS,
            })
        ).toEqual({
            loading: true
        })
    })

    it('should handle RECEIVE_REPS', () => {
        const items = [{}, {}, {}]

        expect(
            reducers.repList({}, {
                type: constants.RECEIVE_REPS,
                reps: items
            })
        ).toEqual({
            loading: false,
            items
        })
    })

    it('should handle RECEIVE_REPS_ERROR', () => {
        expect(
            reducers.repList({}, {
                type: constants.RECEIVE_REPS_ERROR,
            })
        ).toEqual({
            loading: false
        })
    })
})

describe('single repo reducers', () => {
    it('should return initial state', () => {
        expect(reducers.singleRep(undefined, {})).toEqual(initialState.singleRep)
    })

    it('should handle REQUEST_SINGLE_REP', () => {
        expect(
            reducers.singleRep({}, {
                type: constants.REQUEST_SINGLE_REP,
            })
        ).toEqual({
            loading: true
        })
    })

    it('should handle RECEIVE_SINGLE_REP', () => {
        const pullRequests = [{}, {}, {}]

        expect(
            reducers.singleRep({}, {
                type: constants.RECEIVE_SINGLE_REP,
                pullRequests
            })
        ).toEqual({
            loading: false,
            pullRequests
        })
    })

    it('should handle RECEIVE_SINGLE_REP_ERROR', () => {
        expect(
            reducers.singleRep({}, {
                type: constants.RECEIVE_SINGLE_REP_ERROR,
            })
        ).toEqual({
            loading: false
        })
    })
})

describe('search reducers', () => {
    it('should return initial state', () => {
        expect(reducers.search(undefined, {})).toEqual(initialState.search)
    })

    it('should handle CHANGE_SEARCH_INPUT', () => {
        const query = 'input value'

        expect(
            reducers.search({}, {
                type: constants.CHANGE_SEARCH_INPUT,
                query
            })
        ).toEqual({
            query
        })
    })

    it('should handle REQUEST_SEARCH_REPS', () => {

        expect(
            reducers.search({}, {
                type: constants.REQUEST_SEARCH_REPS,
            })
        ).toEqual({
            loading: true
        })
    })

    it('should handle RECEIVE_SEARCH_REPS', () => {
        const items = [{}, {}, {}]

        expect(
            reducers.search({}, {
                type: constants.RECEIVE_SEARCH_REPS,
                reps: items
            })
        ).toEqual({
            loading: false,
            items
        })
    })

    it('should handle RECEIVE_SEARCH_REPS_ERROR', () => {
        expect(
            reducers.search({}, {
                type: constants.RECEIVE_SEARCH_REPS_ERROR,
            })
        ).toEqual({
            loading: false
        })
    })

    it('should handle EMPTY_SEARCH', () => {
        const query = ''

        expect(
            reducers.search({}, {
                type: constants.EMPTY_SEARCH,
                query
            })
        ).toEqual({
            loading: false,
            query
        })
    })
})