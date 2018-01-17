import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ConnectedSearchReps, { SearchReps } from '../../src/containers/SearchReps'
import { Provider } from 'react-redux'
import { initialState } from '../config/store'
import { MemoryRouter } from 'react-router'
import * as mockedData from '../config/mockedData'
import configureStore from 'redux-mock-store'

import { emptySearch } from '../../src/actions'
import { EMPTY_SEARCH } from '../../src/constants'

Enzyme.configure({ adapter: new Adapter() })

function setup(customProps) {
    const props = {
        ...initialState.search,
        ...customProps
    }

    const enzymeWrapper = mount(
        <MemoryRouter>
            <SearchReps {...props} />
        </MemoryRouter>
    )

    return {
        props,
        enzymeWrapper
    }
}

describe('SearchReps as connected container', () => {
    const mockStore = configureStore()
    let store, enzymeWrapper

    beforeEach(() => {
        store = mockStore(initialState)
        enzymeWrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ConnectedSearchReps/>
                </MemoryRouter>
            </Provider>
        )
    })

    it('render the connected component', () => {
        expect(enzymeWrapper.find(ConnectedSearchReps).length).toEqual(1)
        expect(enzymeWrapper.find(SearchReps).length).toEqual(1)
    })

    it('props should match initialState', () => {
        const enzymeSearchRepsProps = enzymeWrapper.find(SearchReps).props()

        Object.keys(initialState.search).forEach(key => {
            expect(enzymeSearchRepsProps).toHaveProperty(key, initialState.search[key])
        });
    })

    it('check action on dispatching', () => {
        store.dispatch(emptySearch())
        const actions = store.getActions()
        expect(actions[0].type).toBe(EMPTY_SEARCH)
    })
})

describe('SearchReps as component', () => {
    it('should be hidden by default', () => {
        const { enzymeWrapper } = setup()

        expect(enzymeWrapper.find('.reps-list-section').length).toBe(1)
        expect(enzymeWrapper.find('.reps-list-section-in').length).toBe(0)
    })

    it('should be visible and be in loading', () => {
        const { enzymeWrapper } = setup({ loading: true, query: 'asdfghjkl' })

        expect(enzymeWrapper.find('.reps-list-section').length).toBe(1)
        expect(enzymeWrapper.find('h2').text()).toBe(`Searching...`)
    })

    it('should be visible and with items', () => {
        const { enzymeWrapper, props } = setup({
            loading: false,
            query: 'asdfghjkl',
            items: [
                mockedData.RepItem(),
                mockedData.RepItem(),
                mockedData.RepItem(),
            ]
        })

        expect(enzymeWrapper.find('h1').text()).toBe(`Searching for "${props.query}"`)

        const Reps = enzymeWrapper.find('Reps')
        const RepsProps = Reps.props()
        expect(Reps.length).toBe(1)
        expect(RepsProps.items).toBe(props.items)
    })

    it('should be visible and with nothing found meesage', () => {
        const { enzymeWrapper, props } = setup({
            query: 'asdfghjkl'
        })

        expect(enzymeWrapper.find('.reps-list-section-in').length).toBe(1)
        expect(enzymeWrapper.find('h1').text()).toBe(`Searching for "${props.query}"`)
        expect(enzymeWrapper.find('h2').text()).toBe(`Nothing Found`)
    })
})
