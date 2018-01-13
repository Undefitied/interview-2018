import React from 'react'
import { withRouter } from 'react-router-dom'

class BackButton extends React.Component {

    handleClick = () => {
        this.props.history.goBack()
    }

    render () {

        return (
            <button type="button" onClick={() => this.handleClick()}>
                {this.props.children}
            </button>
        )
    }
}

export default withRouter(BackButton)