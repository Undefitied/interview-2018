import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeSearchInput } from '../actions/index'
import { withRouter } from 'react-router-dom'

class SearchForm extends React.Component {
    componentDidMount() {
        const { history } = this.props

        const locationSearch = history.location.search.slice(1).split('&').reduce((result, item) => {
            item = item.split('=')

            result[item[0]] = item[1]

            return result
        }, {})

        if (locationSearch.q) {
            this.inputChange({}, locationSearch.q)
        }
    }

    inputChange = (e, customQuery) => {
        const { dispatch, history } = this.props

        const query = e.target ? e.target.value : customQuery

        history.push('?q=' + query)

        dispatch(changeSearchInput(query))
    }

    render() {
        const { searchInputValue } = this.props

        return (
          <div className='reps-search'>
            <input type='text' className='reps-search-input'
              onChange={this.inputChange}
              value={searchInputValue}
              placeholder='Search...'
                />
          </div>
        )
    }
}

SearchForm.propTypes = {
    searchInputValue: PropTypes.string,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { search } = state

    const { query } = search

    return {
        searchInputValue: query
    }
}

export default withRouter(connect(mapStateToProps)(SearchForm))
