import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router'
import App from '../src/App'
import HomeRoute from '../src/routes/HomeRoute'
import RepRoute from '../src/routes/RepRoute'
import NotFountRoute from '../src/routes/NotFoundRoute'

Enzyme.configure({ adapter: new Adapter() })

test('invalid path should redirect to 404', () => {
    const enzymeWrapper = mount(
        <MemoryRouter initialEntries={[ '/random' ]}>
            <App />
        </MemoryRouter>
    )

    expect(enzymeWrapper.find(HomeRoute).length).toBe(0)
    expect(enzymeWrapper.find(NotFountRoute).length).toBe(1)
})

test('path "/" should render HomeRoute', () => {
    const enzymeWrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <App />
        </MemoryRouter>
    )

    expect(enzymeWrapper.find(HomeRoute).length).toBe(1)
    expect(enzymeWrapper.find(NotFountRoute).length).toBe(0)
})

test('path "/rep/:slug" should render RepRoute', () => {
    const enzymeWrapper = mount(
        <MemoryRouter initialEntries={[ '/rep/facebook-react' ]}>
            <App />
        </MemoryRouter>
    )

    expect(enzymeWrapper.find(RepRoute).length).toBe(1)
    expect(enzymeWrapper.find(NotFountRoute).length).toBe(0)
})
