import $ from 'jquery'

export const functions = {
	initApp: () => {
		window.log = console.log.bind(console)
		$(document).ready(() => {
			console.log('init app!')
		})
	}
}