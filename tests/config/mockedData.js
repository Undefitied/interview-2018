export const RepItem = () => ({
    id: '_' + Math.random().toString(36).substr(2, 9),
    full_name: 'AuthorName/ReposName',
    stargazers_count: 1,
    watchers_count: 2,
    open_issues_count: 3,
})

export const PullItem = () => ({
    id: '_' + Math.random().toString(36).substr(2, 9),
    title: 'Pull Title',
    user: {
        login: 'User Login'
    },
    number: 123,
    state: 'Pull State'
})