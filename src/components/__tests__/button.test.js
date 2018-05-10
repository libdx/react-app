import React from 'react'
import { shallow } from 'enzyme'
import Button, { INFO, SECONDARY }  from '../button'

describe('Button', () => {

    const record = {id: '42', title: "A", selected: false, kind: INFO }

    let idOnClick

    const element = (
        <Button
            id={record.id}
            title={record.title}
            selected={record.selected}
            kind={record.kind}
            onClick={id => idOnClick = id }
        />
    )

    let component

    beforeEach(() => {
        component = shallow(element)
        idOnClick = undefined
    })

    it('has correct title', () => {
        expect(component.text()).toEqual(record.title)
    })

    it('passes correct id on click', () => {
        component.simulate('click')
        expect(idOnClick).toEqual(record.id)
    })
})
