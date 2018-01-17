import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reps from '../../src/components/Reps'
import { MemoryRouter } from 'react-router'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        items: [
            {
                id: 1,
                full_name: 'AuthorName/ReposName',
                stargazers_count: 1,
                watchers_count: 2,
                open_issues_count: 3,
            },
            {
                id: 2,
                full_name: 'AuthorName/ReposName',
                stargazers_count: 1,
                watchers_count: 2,
                open_issues_count: 3,
            }
        ],
    }

    const enzymeWrapper = mount(
        <MemoryRouter>
            <Reps {...props} />
        </MemoryRouter>
    )

    return {
        props,
        enzymeWrapper
    }
}

describe('Reps component', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper, props } = setup()

        expect(enzymeWrapper.find('.reps-list').length).toBeGreaterThan(0)
        expect(enzymeWrapper.find('Rep').length).toBe(props.items.length)

        enzymeWrapper.find('Pull').forEach((node, i) => {
            const nodeProps = node.props()

            expect(nodeProps.item).toEqual(props.items[i])
            expect(nodeProps.index).toEqual(i)
        })
    })
})