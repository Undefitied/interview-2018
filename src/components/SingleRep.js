import React from 'react'
import PropTypes from 'prop-types'
import PullList from './PullList'
import BackButton from './BackButton'

const SingleRep = ({ fullName, pullRequests }) => (
  <div className='single-rep-wr'>
    <BackButton>
        Back
    </BackButton>

    <div className='single-rep'>
      <h1>{fullName}</h1>

      <div className='pulls'>
        <h2>{pullRequests.length} Last Pull Requests</h2>
        <PullList pulls={pullRequests} />
      </div>
    </div>

  </div>
)

SingleRep.propTypes = {
    fullName: PropTypes.string.isRequired,
    pullRequests: PropTypes.array.isRequired,
}

export default SingleRep
