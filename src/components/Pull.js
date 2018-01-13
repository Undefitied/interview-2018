import React from 'react'
import PropTypes from 'prop-types'

const Pull = ({ pull, index }) => (
    <div className="list-item">
        <div className="list-item-index">
            {index + 1}
        </div>
        <div className="list-item-content">
            <div className="list-item-name">
                { pull.title }
            </div>
            <div className="list-item-meta">
                { pull.user.login }
            </div>
            <div className="list-item-meta">
                { pull.number }
            </div>
        </div>
        <div className="list-item-right">
            <div className="list-item-state">
                { pull.state }
            </div>
        </div>
    </div>
)

Pull.propTypes = {
    pull: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default Pull