import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Rep from '../../src/components/Rep'
import { MemoryRouter } from 'react-router'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        item: {
            full_name: 'AuthorName/ReposName',
            stargazers_count: 1,
            watchers_count: 2,
            open_issues_count: 3,
        },
        index: 0
    }

    const enzymeWrapper = mount(
        <MemoryRouter>
            <Rep {...props} />
        </MemoryRouter>
    )

    return {
        props,
        enzymeWrapper
    }
}

describe('Rep component', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper, props } = setup()

        const Link = enzymeWrapper.find('Link');
        const LinkProps = Link.props()

        expect(Link.length).toBe(1)
        expect(LinkProps.to).toBe('/rep/' + props.item.full_name.replace('/', '-'))
        expect(enzymeWrapper.find('.list-item').length).toBeGreaterThan(0)
        expect(enzymeWrapper.find('.list-item-index').text()).toBe(props.index + 1 + '')

        expect(enzymeWrapper.find('.list-item-name').text()).toBe(props.item.full_name)

        enzymeWrapper.find('.list-item-meta .meta').forEach((node, i) => {
            if (i === 0) {
                expect(node.text()).toBe(props.item.stargazers_count + '')
            } else if (i === 1) {
                expect(node.text()).toBe(props.item.watchers_count + '')
            } else {
                expect(node.text()).toBe(props.item.open_issues_count + '')
            }
        })
    })
})