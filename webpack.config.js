var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.scss$/,
        exclude: /node_modules/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			},
      {
        test: /\.jpg$/,
        exclude: /node_modules/,
				use: [
					{
						loader: "url-loader"
					}
				]
      }
		]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/build',
		publicPath: '/'
	},
	plugins: [HTMLWebpackPluginConfig]
};