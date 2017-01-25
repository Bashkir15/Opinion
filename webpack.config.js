const path = require('path');
const webpack = require('webpack');
//const VenderChunkPlugin = require('webpack-vendor-chunk-plugin');

module.exports = {
	entry: {
		app: './public/app.js',
		vendors: ['angular', 'angular-ui-router']
	},

	output: {
		path: path.resolve(__dirname, './dist/'),
		publicPath: '/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ['es2015']
				}
			}
		]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
	//	new VenderChunkPlugin('vendors'),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
	]
}