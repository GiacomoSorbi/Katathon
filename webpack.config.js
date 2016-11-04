var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/app/app.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader"
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
};