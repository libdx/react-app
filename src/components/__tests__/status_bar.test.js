import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import StatusBar from '../status_bar'

describe('StatusBar', () => {

    const title = "A Title"
    let element
    let component

    beforeEach(() => {
        element = <StatusBar title={title} />
        component = shallow(element)
    })

    it('show correct title', () => {
        expect(component.text()).toEqual(expect.stringContaining(title))
    })

    it('renders correctly', () => {
        const tree = renderer.create(element).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
