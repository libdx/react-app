import React from 'react'
import { shallow } from 'enzyme'
import SearchPanel from '../search_panel'

describe('SearchPanel ', () => {

    let component

    const child = <div id="test-child-id" />

    beforeEach(() => {
        component = shallow(
            <SearchPanel>
                {child}
            </SearchPanel>
        )
    })

    it('has search input', () => {
        const searchInput = component.find('SearchInput') 
        expect(searchInput.exists()).toBe(true)
    })

    it('renders children', () => {
        const child = component.find('#test-child-id')
        expect(child.exists()).toBe(true)
    })
})
