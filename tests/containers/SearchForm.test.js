import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ConnectedSearchForm, { SearchForm } from '../../src/containers/SearchForm'
import { Provider } from 'react-redux'
import { initialState } from '../config/store'
import { MemoryRouter } from 'react-router'
import configureStore from 'redux-mock-store'

import { CHANGE_SEARCH_INPUT } from '../../src/constants'

Enzyme.configure({ adapter: new Adapter() })

function setup(customProps) {
    const props = {
        dispatch: jest.fn(),
        history: {
            location: {
                search: ''
            }
        },
        searchInputValue: initialState.search.query,
        ...customProps
    }

    const enzymeWrapper = mount(
        <MemoryRouter>
            <SearchForm {...props} />
        </MemoryRouter>
    )

    return {
        props,
        enzymeWrapper
    }
}

describe('SearchForm as connected container', () => {
    const mockStore = configureStore()
    const query = '12345';
    let store, enzymeWrapper

    beforeEach(() => {
        store = mockStore(initialState)
        enzymeWrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={[ '/?q=' + query ]}>
                    <ConnectedSearchForm/>
                </MemoryRouter>
            </Provider>
        )
    })

    it('render the connected component', () => {
        expect(enzymeWrapper.find(ConnectedSearchForm).length).toEqual(1)
        expect(enzymeWrapper.find(SearchForm).length).toEqual(1)
    })

    it('props should match initialState', () => {
        const enzymeSearchFormProps = enzymeWrapper.find(SearchForm).props()

        expect(enzymeSearchFormProps).toHaveProperty('searchInputValue', initialState.search.query)
    })

    it('should dispatch changeSearchInput on mount', () => {
        const actions = store.getActions()
        expect(actions[0].type).toBe(CHANGE_SEARCH_INPUT)
        expect(actions[0].query).toBe(query)
    })
})

describe('SearchForm as component', () => {
    it('should render', () => {
        const { enzymeWrapper } = setup()

        expect(enzymeWrapper.find('.reps-search').length).toBe(1)
        expect(enzymeWrapper.find('.reps-search-input').prop('placeholder')).toBe('Search...')
    })
})
