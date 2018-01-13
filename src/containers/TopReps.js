import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchReps } from '../actions'
import Reps from '../components/Reps'

class TopReps extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchReps())
    }

    render() {
        const { loading, items } = this.props

        return (
            <div className="reps-list-section">
                <div className="reps-list-heading">
                    <h1>Top repositories</h1>
                </div>
                { loading && <h2>Loading...</h2> }
                { !loading && items.length < 1 && <h2>Error</h2> }
                { !loading && items.length > 0 &&
                <Reps items={items} />
                }
            </div>
        )
    }
}

TopReps.propTypes = {
    loading: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
    const { repList } = state

    const {
        loading,
        items,
    } = repList;

    return {
        loading,
        items,
    }
}

export default connect(mapStateToProps)(TopReps)