import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Rep = ({ item, index }) => (
  <Link to={`/rep/${item.full_name.replace('/', '-')}`} className='list-item'>
    <span className='list-item-index'>
      {index + 1}
    </span>
    <span className='list-item-content'>
      <span className='list-item-name'>
        {item.full_name}
      </span>
      <span className='list-item-meta'>
        <span className='meta' title='stars'>
          <i className='fa fa-star' />
          {item.stargazers_count}
        </span>

        <span className='meta' title='watchers'>
          <i className='fa fa-eye' />
          {item.watchers_count}
        </span>

        <span className='meta' title='open issues'>
          <i className='fa fa-bug' />
          {item.open_issues_count}
        </span>
      </span>

    </span>
    <span className='list-item-right'>
      <span className='list-item-icon'>
        <i className='fa fa-angle-right' />
      </span>
    </span>
  </Link>
)

Rep.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}

export default Rep
