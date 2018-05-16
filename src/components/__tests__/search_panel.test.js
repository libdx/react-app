import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import SearchPanel from '../search_panel'

describe('SearchPanel ', () => {

    let component
    let onChange

    const child = <div id="test-child-id" />

    beforeEach(() => {
        onChange = jest.fn()

        component = shallow(
            <SearchPanel onChange={onChange}>
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

    it('passes correct text on change', () => {
        const searchInput = component.find('SearchInput')
    
        const newTerm = 'abcde'
        searchInput.simulate('change', newTerm)
        expect(onChange).toBeCalledWith(newTerm)
    })

    it('renders correctly', () => {
        let element = <SearchPanel>{child}</SearchPanel>
        const tree = renderer.create(element).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
