import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class BackButton extends React.Component {
    handleClick = () => {
        this.props.history.goBack()
    }

    render() {
        return (
          <button type='button' onClick={() => this.handleClick()}>
            {this.props.children}
          </button>
        )
    }
}

BackButton.propTypes = {
    history: {
        goBack: PropTypes.func.isRequired
    },
    children: PropTypes.object.isRequired
}

export default withRouter(BackButton)
