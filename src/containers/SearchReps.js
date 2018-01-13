import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Reps from '../components/Reps'

class SearchReps extends React.Component {

    render() {
        const { loading, items, query } = this.props

        return (
            <div className="reps-list-section">
                { query && <div className="reps-list-section-in">
                    <div className="reps-list-heading">
                        <h1>Searching for "{query}"</h1>
                    </div>
                    { loading && <h2>Searching...</h2> }
                    { !loading && items.length < 1 && <h2>Nothing Found</h2> }
                    { !loading && items.length > 0 &&
                    <Reps items={items} />
                    }
                </div> }
            </div>
        )
    }
}

SearchReps.propTypes = {
    loading: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    query: PropTypes.string,
}

function mapStateToProps(state) {
    const { search } = state

    const {
        loading,
        items,
        query,
    } = search;

    return {
        loading,
        items,
        query,
    }
}

export default connect(mapStateToProps)(SearchReps)