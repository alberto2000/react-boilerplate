import React from 'react'
import {functions} from './functions.js'

import Child from './Child.jsx'

require('../scss/_app.scss')

class App extends React.Component {

	constructor() {
		super()
	}

	render() {
		return <div id="container">
			<Child/>
		</div>
	}
}

export default App