var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
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
				test: /\.(woff2|woff|png|jpg|gif|webm|mp4)$/,
				exclude: /(node_modules)/,
				loader: 'file?name=[path][name].[ext]&context=./src/'
			},
			{
				test: /\.scss$/,
				exclude: /(node_modules)/,
				loader: ExtractTextPlugin.extract(['css', 'postcss', 'sass'], {
					publicPath: '../'
				})
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: 'json'
			}
		]
	},
	postcss: function() {
		return [autoprefixer];
	},
	plugins: [
		new ExtractTextPlugin('./css/styles.css', {
			allChunks: true
		}),
		new CopyWebpackPlugin([
			{from: 'src/index-prod.html', to: './index.html'},
			{from: 'src/favicon.png', to: './'}
		]),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
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