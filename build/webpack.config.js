/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue Mar 06 2018
 *  File : webpack.config.js.js
 *******************************************/
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
	mode: 'production',
	entry: {
		app: path.join(__dirname, '../src/app.js')
	},
	module: {
		rules: [
			{
				test: /.(css)$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.sass$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}],
				exclude: [
					path.join(__dirname, '../node_modules')
				]
			},
			{
				test: /\.(js)$/,
				loader: 'babel-loader',
				exclude: [
					path.join(__dirname, '../node_modules')
				]
			}
		]
	},
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].[hash].js',
		// chunkFilename: "[chunkhash].js",
		publicPath: ''
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.shtml',
			template: path.join(__dirname, '../src/tmp.html')
		})
	]
}
if (isDev) {
	config.devServer = {
		host: '0.0.0.0',
		port: '9000',
		contentBase: path.join(__dirname, '../dist'),
		// hot: true,
		overlay: {
			errors: true
		},
		publicPath: '',
		historyApiFallback: {
			index: 'index.html'
		}
	}
}
module.exports = config