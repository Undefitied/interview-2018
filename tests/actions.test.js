import * as actions from '../src/actions';
import * as constants from '../src/constants';

describe('actions for single repo', () => {
    it('should create an action to request', () => {
        const expectedAction = {
            type: constants.REQUEST_SINGLE_REP,
        }

        expect(actions.requestSingleRep()).toEqual(expectedAction);
    })

    it('should create an action to receive', () => {
        const pullRequests = [{}, {}, {}];
        const expectedAction = {
            type: constants.RECEIVE_SINGLE_REP,
            pullRequests
        }

        expect(actions.receiveSingleRep(pullRequests)).toEqual(expectedAction);
    })

    it('should create an action to receive error', () => {
        const expectedAction = {
            type: constants.RECEIVE_SINGLE_REP_ERROR,
        }

        expect(actions.receiveSingleRepError()).toEqual(expectedAction);
    })

    it('should create an action to fetch', () => {
        const fullName = 'My repo';
        const expectedAction = {
            type: constants.FETCH_SINGLE_REP,
            fullName
        }

        expect(actions.fetchSingleRep(fullName)).toEqual(expectedAction);
    })
})

describe('actions for search', () => {
    it('should create an action to empty search input value', () => {
        const query = '';
        const expectedAction = {
            type: constants.EMPTY_SEARCH,
            query
        }

        expect(actions.emptySearch()).toEqual(expectedAction);
    })

    it('should create an action to request', () => {
        const expectedAction = {
            type: constants.REQUEST_SEARCH_REPS,
        }

        expect(actions.requestSearchReps()).toEqual(expectedAction);
    })

    it('should create an action to receive', () => {
        const reps = [{}, {}, {}];
        const expectedAction = {
            type: constants.RECEIVE_SEARCH_REPS,
            reps
        }

        expect(actions.receiveSearchReps(reps)).toEqual(expectedAction);
    })

    it('should create an action to receive error', () => {
        const expectedAction = {
            type: constants.RECEIVE_SEARCH_REPS_ERROR,
        }

        expect(actions.receiveSearchRepsError()).toEqual(expectedAction);
    })

    it('should create an action to change search input value', () => {
        const query = 'input value';
        const expectedAction = {
            type: constants.CHANGE_SEARCH_INPUT,
            query
        }

        expect(actions.changeSearchInput(query)).toEqual(expectedAction);
    })
})

describe('actions for top 5 repos', () => {

    it('should create an action to request', () => {
        const expectedAction = {
            type: constants.REQUEST_REPS,
        }

        expect(actions.requestReps()).toEqual(expectedAction);
    })

    it('should create an action to receive', () => {
        const reps = [{}, {}, {}, {}, {}];
        const expectedAction = {
            type: constants.RECEIVE_REPS,
            reps
        }

        expect(actions.receiveReps(reps)).toEqual(expectedAction);
    })

    it('should create an action to receive error', () => {
        const expectedAction = {
            type: constants.RECEIVE_REPS_ERROR,
        }

        expect(actions.receiveRepsError()).toEqual(expectedAction);
    })

    it('should create an action to fetch repos', () => {
        const expectedAction = {
            type: constants.FETCH_REPS,
        }

        expect(actions.fetchReps()).toEqual(expectedAction);
    })
})
