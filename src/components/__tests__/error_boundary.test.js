import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import ErrorBoundary from '../error_boundary'

const Broken = () => {
    throw new Error('some error') 
    return <div>Error</div>
}

describe('ErrorBoundary ', () => {

    let element
    let component

    beforeEach(() => {
        element = <ErrorBoundary><a>Link</a></ErrorBoundary>
        component = shallow(element)
    })

    it('shows children', () => {
        const a = component.find('a') 
        expect(a.exists()).toBe(true)
    })

    it('shows error message when child throws', () => {
        const errorMessage='Error Message'

        const spy = jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch')
        const component = mount(
            <ErrorBoundary errorMessage={errorMessage}>
                <Broken />
            </ErrorBoundary>
        )

        expect(ErrorBoundary.prototype.componentDidCatch).toHaveBeenCalled()

        const text = component.text()
        expect(text).toEqual(expect.stringContaining(errorMessage))
    })

    it('shows error message', () => {
        const errorMessage='Error Message'

        const component = shallow(
            <ErrorBoundary errorMessage={errorMessage}>
                <span>test</span>
            </ErrorBoundary>
        )
        component.setState({
            hasError: true
        })
        const text = component.text()
        expect(text).toEqual(expect.stringContaining(errorMessage))
    })

    it('renders correctly', () => {
        const tree = renderer.create(element).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
