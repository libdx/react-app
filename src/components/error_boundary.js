//@flow

import * as React from 'react'

type Props = {
    children?: React.Node
}

type State = {
    hasError: boolean,
}

export default class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error: Error, info: string) {
        this.setState({ hasError: true })
        console.error(error)
    }

    render() {
        return(
            <div>
                {this.state.hasError ? "Oops something went wront!" : this.props.children}
            </div>
        )
    }
}

