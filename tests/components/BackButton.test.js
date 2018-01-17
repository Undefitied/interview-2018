import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BackButton from '../../src/components/BackButton'
import { MemoryRouter } from 'react-router'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {

    }

    const enzymeWrapper = mount(
        <MemoryRouter>
            <BackButton {...props} />
        </MemoryRouter>
    )

    return {
        props,
        enzymeWrapper
    }
}

describe('BackButton component', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup()

        expect(enzymeWrapper.find('button').length).toBeGreaterThan(0)
    })
})