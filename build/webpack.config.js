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
				test: /.css$/,
				use: ['style-loader', 'css-loader']
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