import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Pull from '../../src/components/Pull'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        pull: {
            title: 'Pull Title',
            user: {
                login: 'User Login'
            },
            number: 123,
            state: 'Pull State'
        },
        index: 0
    }

    const enzymeWrapper = mount(<Pull {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('Pull component', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper, props } = setup()

        expect(enzymeWrapper.find('.list-item').length).toBeGreaterThan(0)
        expect(enzymeWrapper.find('.list-item-index').text()).toBe(props.index + 1 + '')

        enzymeWrapper.find('.list-item-meta').forEach((node, i) => {
            if (i === 0) {
                expect(node.text()).toBe(props.pull.user.login)
            } else {
                expect(node.text()).toBe(props.pull.number + '')
            }
        })

        expect(enzymeWrapper.find('.list-item-state').text()).toBe(props.pull.state)
    })
})