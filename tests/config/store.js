export const initialState = {
    repList: {
        loading: true,
        items: [],
    },
    singleRep: {
        loading: true,
        pullRequests: []
    },
    search: {
        query: '',
        loading: false,
        items: []
    },
}