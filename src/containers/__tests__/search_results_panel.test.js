import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import shallowWithStore from '../../test_helpers/shallow_with_store'
import SearchResultsPanel from '../search_results_panel'

const mockStore = configureMockStore()

describe('SearchResultsPanel', () => {
    const title = 'abc'
    const query = {
        term: 'xyz',
        searchScope: 'TITLE',
        sortKey: 'RATING',
        sortOrder: 'ASC'
    }

    let store
    let element
    let component
    let onChange

    beforeEach(() => {
        store = mockStore({ query })
        onChange = jest.fn()
        element = <SearchResultsPanel title={title} />
        component = shallowWithStore(element, store).dive()
        //console.log(component.debug())
    })

    it('has SearchPanel child', () => {
        const panel = component.find('SearchPanel')
        expect(panel.exists()).toBe(true)
    })

    it('has ButtonGroup child', () => {
        const buttonGroup = component.find('ButtonGroup')
        expect(buttonGroup.exists()).toBe(true)
    })

    it('passes state to child SearchPanel', () => {
        const panel = component.find('SearchPanel')
        expect(panel.props().term).toEqual(query.term)
    })

    it('passes state to child ButtonGroup', () => {
        const buttonGroup = component.find('ButtonGroup')
        expect(buttonGroup.props().title).toEqual(title)
        expect(buttonGroup.props().selectedButtonId).toEqual(query.searchScope)
    })

    // TODO: find a way to get input
    //it('passes correct text on change', () => {
    //    const input = component.find('input[type="text"]') 
    //    const newTerm = 'abcde'
    //    const event = { target: { value: newTerm } }
    //    input.simulate('change', event)
    //    const newQuery = { ...query, term: newTerm }
    //    expect(onChange).toBeCalledWith(newQuery)
    //})
})
