//@flow

import * as React from 'react'

type Props = {
    errorMessage?: string,
    children?: React.Node
}

type State = {
    hasError: boolean,
}

const ERROR_MESSAGE="Oops something went wront!"

export default class ErrorBoundary extends React.Component<Props, State> {
    static defaultProps: Props = {
        errorMessage: ERROR_MESSAGE
    }

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
                {this.state.hasError ? this.props.errorMessage : this.props.children}
            </div>
        )
    }
}

