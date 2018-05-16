import React from 'react'
import { shallow } from 'enzyme'
import App from '../app'

describe('App', () => {

    let element
    let component

    beforeEach(() => {
        element = <App />

        component = shallow(element)
    })

    it('has error boundary', () => {
        const child = component.find('ErrorBoundary')
        expect(child.exists()).toBe(true)
    })

    it('has header', () => {
        const child = component.find('Header')
        expect(child.exists()).toBe(true)
    })

    it('has footer', () => {
        const child = component.find('Footer')
        expect(child.exists()).toBe(true)
    })

    it('has empty state', () => {
        const child = component.find('EmptyState')
        expect(child.exists()).toBe(true)
    })

    it('has movie details', () => {
        const child = component.find('MovieDetails')
        expect(child.exists()).toBe(true)
    })

    it('has index page', () => {
        const child = component.find('IndexPage')
        expect(child.exists()).toBe(true)
    })
})
