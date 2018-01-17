import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PullList from '../../src/components/PullList'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        pulls: [
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
        ],
    }

    const enzymeWrapper = mount(<PullList {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('PullList component', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper, props } = setup()

        expect(enzymeWrapper.find('.pull-list').length).toBeGreaterThan(0)
        expect(enzymeWrapper.find('Pull').length).toBe(props.pulls.length)

        enzymeWrapper.find('Pull').forEach((node, i) => {
            const nodeProps = node.props()

            expect(nodeProps.pull).toEqual(props.pulls[i])
            expect(nodeProps.index).toEqual(i)
        })
    })
})