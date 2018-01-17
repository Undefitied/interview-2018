import 'babel-polyfill'
import './styles/main.scss'

import React from 'react'
import { render } from 'react-dom'
import App from './App'

render(
  <div>
    <App />
  </div>,
    document.getElementById('root')
)
