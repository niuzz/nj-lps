/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue Mar 06 2018
 *  File : webpack.config.js.js
 *******************************************/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: {
		app: path.join(__dirname + '/../src/app.js')
	},
	module: {
		rules: [
			{
				test: /.(css)$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(scss)$/,
				use: [{
					loader: 'style-loader', // inject CSS to page
				}, {
					loader: 'css-loader', // translates CSS into CommonJS modules
				}, {
					loader: 'postcss-loader', // Run post css actions
					options: {
						plugins: function () { // post css plugins, can be exported to postcss.config.js
							return [
								require('precss'),
								require('autoprefixer')
							];
						}
					}
				}, {
					loader: 'sass-loader' // compiles Sass to CSS
				}]
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
		path: path.join(__dirname + '/../dist'),
		filename: '[name].[hash].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../src/tmp.html')
		})
	]
}