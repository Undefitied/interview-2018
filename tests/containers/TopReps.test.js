import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ConnectedTopReps, { TopReps } from '../../src/containers/TopReps'
import { Provider } from 'react-redux'
import { initialState } from '../config/store'
import { MemoryRouter } from 'react-router'
import * as mockedData from '../config/mockedData'
import configureStore from 'redux-mock-store'

import { requestReps } from '../../src/actions'
import { FETCH_REPS, REQUEST_REPS } from '../../src/constants'

Enzyme.configure({ adapter: new Adapter() })

function setup(customProps) {
    const props = {
        dispatch: jest.fn(),
        ...initialState.repList,
        ...customProps
    }

    const enzymeWrapper = mount(
        <MemoryRouter>
            <TopReps {...props} />
        </MemoryRouter>
    )

    return {
        props,
        enzymeWrapper
    }
}

describe('TopReps as connected container', () => {
    const mockStore = configureStore()
    let store, enzymeWrapper

    beforeEach(() => {
        store = mockStore(initialState)
        enzymeWrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ConnectedTopReps/>
                </MemoryRouter>
            </Provider>
        )
    })

    it('render the connected component', () => {
        expect(enzymeWrapper.find(ConnectedTopReps).length).toEqual(1)
        expect(enzymeWrapper.find(TopReps).length).toEqual(1)
    })

    it('props should match initialState', () => {
        const enzymeTopRepsProps = enzymeWrapper.find(TopReps).props()

        Object.keys(initialState.search).forEach(key => {
            expect(enzymeTopRepsProps).toHaveProperty(key, initialState.repList[key])
        });
    })

    it('check action on dispatching', () => {
        store.dispatch(requestReps())
        const actions = store.getActions()
        expect(actions[0].type).toBe(FETCH_REPS)
        expect(actions[1].type).toBe(REQUEST_REPS)
    })
})

describe('TopReps as component', () => {
    it('should render', () => {
        const { enzymeWrapper } = setup()

        expect(enzymeWrapper.find('.reps-list-section').length).toBe(1)
        expect(enzymeWrapper.find('h1').text()).toBe('Top repositories')
    })

    it('should be in loading', () => {
        const { enzymeWrapper } = setup()

        expect(enzymeWrapper.find('h2').text()).toBe(`Loading...`)
    })

    it('should show an error', () => {
        const { enzymeWrapper } = setup({ loading: false })

        expect(enzymeWrapper.find('h2').text()).toBe(`Error`)
    })

    it('should show repos list', () => {
        const { enzymeWrapper, props } = setup({
            loading: false,
            items: [
                mockedData.RepItem(),
                mockedData.RepItem(),
                mockedData.RepItem(),
                mockedData.RepItem(),
                mockedData.RepItem(),
            ]
        })

        const RepsProps = enzymeWrapper.find('Reps').props()
        expect(RepsProps.items).toEqual(props.items)
    })
})
