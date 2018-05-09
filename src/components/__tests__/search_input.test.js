import React from 'react'
import { shallow } from 'enzyme'
import SearchInput from '../search_input'

describe('SearchPanel ', () => {

    let component
    let input
    let button

    const term = 'A'
    const placeholder = 'P'
    const buttonTitle = 'T'

    beforeEach(() => {
        component = shallow(
            <SearchInput
                term={term}
                placeholder={placeholder}
                buttonTitle={buttonTitle}
            />
        )
        input = component.find('input[type="text"]') 
        button = component.find('Button') 
    })

    it('has text input', () => {
        expect(input.exists()).toBe(true)
    })

    it('shows correct term text', () => {
        expect(input.props().value).toEqual(term)
    })

    it('shows correct placeholder text', () => {
        expect(input.props().placeholder).toEqual(placeholder)
    })

    it('has button', () => {
        expect(button.exists()).toBe(true)
    })

    it('shows corrent button title', () => {
        expect(button.props().title).toEqual(buttonTitle)
    })
})
