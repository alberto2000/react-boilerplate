import React from 'react'
import {functions} from './functions.js'

require('../scss/_child.scss')

class Child extends React.Component {

	constructor() {
		super()
	}

	render() {
		return <p>Hello React.js!</p>
	}
}

export default Child