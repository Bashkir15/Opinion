const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './public/app/app.js',
		vendors: ['angular', 'angular-ui-router', 'angular-material', 'angular-animate', 'angular-aria']
	},

	output: {
		path: path.resolve(__dirname, './dist/'),
		publicPath: '/',
		filename: '[name].js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			}
		]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
	]
}