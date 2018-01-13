import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SingleRep from '../components/SingleRep'
import { fetchSingleRep } from '../actions'

class RepRoute extends React.Component {
    constructor(props) {
        super(props)

        this.fullName = this.props.match.params.slug.replace('-', '/');
    }

    componentDidMount() {
        this.props.dispatch(fetchSingleRep(this.fullName))
    }

    render() {
        const { loading, pullRequests } = this.props;

        return (
            <div>
                {loading && <h2>Loading...</h2>}
                {!loading && <SingleRep fullName={this.fullName} pullRequests={pullRequests} /> }
            </div>
        )
    }
}

RepRoute.propTypes = {
    match: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    pullRequests: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    const { singleRep } = state

    const {
        loading,
        pullRequests,
    } = singleRep

    return {
        loading,
        pullRequests
    };
}

export default connect(mapStateToProps)(RepRoute)