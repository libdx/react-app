import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Hello from './Hello.js'
import Label from './Label.js'
import Button from './Button.js'

//
// Component
//
class Sample extends Component {
    render() {
        return (
            <div className="form-group">
                <div>
                    {Hello}
                </div>

                <div>
                    <Label text="This is label" />
                </div>

                <div>
                    <Button title="Sign up" />
                </div>
            </div>
        )
    }
}

export default Sample
