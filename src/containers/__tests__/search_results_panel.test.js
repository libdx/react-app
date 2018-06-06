import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import shallowWithStore from '../../test_helpers/shallow_with_store'
import SearchResultsPanel from '../search_results_panel'
import { searchMovies } from '../../actions/search_movies'
import { fetchMovies } from '../../actions/fetch_movies'

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
        element = <SearchResultsPanel title={title} onChange={onChange} />
        component = shallowWithStore(element, store).dive()
    })

    it('has onChange prop', () => {
        expect(component.props().onChange).not.toBeUndefined()
        expect(component.props().onChange).not.toBeNull()
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

    it('passes correct query on input change', () => {
        const searchPanel = component.find('SearchPanel').dive()
        const searchInput = searchPanel.find('SearchInput').dive()

        const input = searchInput.find('input[type="text"]') 

        const newTerm = 'abcde'
        const event = { target: { value: newTerm } }

        input.simulate('change', event)
        const newQuery = { ...query, term: newTerm }

        expect(onChange).toBeCalledWith(newQuery)
    })

    it('passes correct query on button click', () => {
        const buttonGroup = component.find('ButtonGroup').dive()
        const button = buttonGroup.find('Button').at(1)
        button.simulate('click')
        const newQuery = { ...query, searchScope: 'GENRE' }
        expect(onChange).toBeCalledWith(newQuery)
    })

    it('dispatches correct action on input change', () => {
        element = <SearchResultsPanel title={title} />
        component = shallowWithStore(element, store).dive()

        const searchPanel = component.find('SearchPanel').dive()
        const searchInput = searchPanel.find('SearchInput').dive()

        const input = searchInput.find('input[type="text"]') 

        const newTerm = 'abcde'
        const event = { target: { value: newTerm } }
        const newQuery = { ...query, term: newTerm }

        input.simulate('change', event)

        const actions = store.getActions()
        const expectedActions = [searchMovies(newQuery)]
        // FIXME: Make use of debounce middleware instead of debouncing action dispatch in place (see `search_results_panel.js`)
        // than expect fetchMovies as well (uncomment following line)
        //const expectedActions = [fetchMovies(newQuery), searchMovies(newQuery)]
        expect(actions).toEqual(expectedActions)
    })
})
