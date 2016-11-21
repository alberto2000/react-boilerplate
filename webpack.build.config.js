var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/js/index.jsx',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: './js/bundle.min.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				exclude: /(node_modules)/,
				loader: 'babel'
			},
			{
				test: /\.(woff2|woff|png|jpg|gif)$/,
				exclude: /(node_modules)/,
				loader: 'url'
			},
			{
				test: /\.scss$/,
				exclude: /(node_modules)/,
				loader: ExtractTextPlugin.extract('css!sass')
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: 'json'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('./css/styles.css', {
			allChunks: true
		}),
		new CopyWebpackPlugin([
			{from: 'src/index-prod.html', to: './index.html'},
			{from: 'src/elements', to: './elements'}
		], {
			ignore: ['.DS_Store']
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin()
	]
};