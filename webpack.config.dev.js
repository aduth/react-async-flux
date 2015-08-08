/**
 * External dependencies
 */

var webpack = require( 'webpack' );

module.exports = {
	entry: __dirname + '/src/client.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	cache: true,
	watch: true,
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: __dirname + '/src',
				loaders: [ 'babel?cacheDirectory' ]
			}
		]
	},
	resolve: {
		extensions: [ '', '.json', '.js', '.jsx' ],
		root: __dirname + '/src'
	}
};
