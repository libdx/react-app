import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Hello from './Hello.js'
import Label from './Label.js'
import Button from './Button.js'
import Input from './Input.js'

//
// Component
//
class Sample extends Component {
    render() {
        return (
            <div>
                <div>
                    {Hello}
                </div>
                <form>
                    <div className="form-group">
                        <Label text="Email" />
                        <Input type="text" placeholder="Email" />
                    </div>

                    <div className="form-group">
                        <Label text="Password" />
                        <Input type="password" placeholder="Password" />
                    </div>

                    <div>
                        <Button title="Sign up" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Sample
