import React, { Component } from 'react'
import SearchForm from '../containers/SearchForm'
import TopReps from '../containers/TopReps'
import SearchReps from '../containers/SearchReps'

const App = () => (
    <div>
        <SearchForm />
        <SearchReps />
        <TopReps />
    </div>
)

export default App