var path = require('path');
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
				test: /\.(woff2|woff|png|jpg|gif)$/,
				exclude: /(node_modules)/,
				loader: 'url'
			},
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
			},
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json'
      }
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{from: 'src/index.html', to: './'},
			{from: 'src/elements', to: './elements'}
		], {
			ignore: ['.DS_Store']
		})
	]
};