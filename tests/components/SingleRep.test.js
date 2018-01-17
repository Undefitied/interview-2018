import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SingleRep from '../../src/components/SingleRep'
import { MemoryRouter } from 'react-router'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        fullName: 'AuthorName/ReposName',
        pullRequests: [
            {
                id: 11,
                title: 'Pull Title',
                user: {
                    login: 'User Login'
                },
                number: 123,
                state: 'Pull State'
            },
            {
                id: 22,
                title: 'Pull Title',
                user: {
                    login: 'User Login'
                },
                number: 123,
                state: 'Pull State'
            }
        ]
    }

    const enzymeWrapper = mount(
        <MemoryRouter>
            <SingleRep {...props} />
        </MemoryRouter>
    )

    return {
        props,
        enzymeWrapper
    }
}

describe('SingleRep component', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper, props } = setup()

        expect(enzymeWrapper.find('.single-rep-wr').length).toBeGreaterThan(0)
        expect(enzymeWrapper.find('BackButton').length).toBeGreaterThan(0)
        expect(enzymeWrapper.find('h1').text()).toBe(props.fullName)
        expect(enzymeWrapper.find('.pulls h2').text()).toBe(`${props.pullRequests.length} Last Pull Requests`)
        expect(enzymeWrapper.find('PullList').length).toBeGreaterThan(0)
        expect(enzymeWrapper.find('PullList').props().pulls).toEqual(props.pullRequests)
    })
})