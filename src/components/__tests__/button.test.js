import React from 'react'
import { shallow } from 'enzyme'
import Button, { INFO, SECONDARY }  from '../button'

describe('Button', () => {

    const record = {id: '42', title: "A", selected: false, kind: INFO }

    const element = (
        <Button
            id={record.id}
            title={record.title}
            selected={record.selected}
            kind={record.kind}
        />
    )

    let component

    beforeEach(() => {
        component = shallow(element)
    })

    it('has correct title', () => {
        expect(component.text()).toEqual(record.title)
    })
})
