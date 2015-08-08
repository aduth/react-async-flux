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
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: __dirname + '/src',
				loaders: [ 'babel' ]
			}
		]
	},
	resolve: {
		extensions: [ '', '.json', '.js', '.jsx' ],
		root: __dirname + '/src'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin( {
			compress: {
				warnings: false
			}
		} )
	]
};
