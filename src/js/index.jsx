import React from 'react'
import {render} from 'react-dom'
import {functions} from './functions.js'

import App from './App.jsx'

render(<App/>, document.getElementById('app'))

functions.initApp()