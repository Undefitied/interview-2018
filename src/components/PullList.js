import React from 'react'
import PropTypes from 'prop-types'
import Pull from './Pull'

const PullList = ({ pulls }) => (
    <div className="pull-list">
        {pulls.map((item, index) => <Pull pull={item} index={index} key={item.id} />)}
    </div>
)

PullList.propTypes = {
    pulls: PropTypes.array.isRequired
}

export default PullList