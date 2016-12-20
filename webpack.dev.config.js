var path = require('path');
var DashboardPlugin = require('webpack-dashboard/plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/js/index.jsx',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: './js/bundle.js'
	},
	devtool: '#eval-source-map',
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
        loaders: ['style', 'css', 'sass']
			},
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json'
      }
		]
	},
	plugins: [
		new DashboardPlugin(),
		new CopyWebpackPlugin([
			{from: 'src/index.html', to: './index.html'},
			{from: 'src/favicon.png', to: './'}
		])
	]
};