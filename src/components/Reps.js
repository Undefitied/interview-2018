import React from 'react'
import PropTypes from 'prop-types'
import Rep from './Rep'

const Reps = ({ items }) => (
    <div className="reps-list">
        { items.map((item, index) => (
            <Rep item={item} index={index} key={item.id} />
        )) }
    </div>
)

Reps.propTypes = {
    items: PropTypes.array.isRequired,
}

export default Reps