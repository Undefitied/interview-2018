import React from 'react'
import SearchForm from '../containers/SearchForm'
import TopReps from '../containers/TopReps'
import SearchReps from '../containers/SearchReps'

const HomeRoute = () => (
  <div>
    <SearchForm />
    <SearchReps />
    <TopReps />
  </div>
)

export default HomeRoute
