import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

//
// PureComponent
//
class Label extends PureComponent {
    render() {
        return (
            <label>{this.props.text}</label>
        )
    }
}

export default Label
