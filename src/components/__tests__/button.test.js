import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Button, { INFO }  from '../button'

describe('Button', () => {

    const record = {id: '42', title: "A", selected: false, kind: INFO }

    let element
    let component
    let onClick

    beforeEach(() => {
        onClick = jest.fn()

        element = (
            <Button
                id={record.id}
                title={record.title}
                selected={record.selected}
                kind={record.kind}
                onClick={onClick}
            />
        )
        component = shallow(element)
    })

    it('has correct title', () => {
        expect(component.text()).toEqual(record.title)
    })

    it('passes correct id on click', () => {
        component.simulate('click')
        expect(onClick).toBeCalledWith(record.id)
    })

    it('renders correctly', () => {
        const tree = renderer.create(element).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
