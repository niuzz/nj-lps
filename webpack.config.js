const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 使用 ExtractTextPlugin 将样式表抽离成专门的单独文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
	filename: "[name].[contenthash].css",
	disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.jsx?/,
				include: [
					path.resolve(__dirname, 'src')
				],
				use: 'babel-loader',
			},
			{
				test: /\.css/,
				include: [
					path.resolve(__dirname, 'src'),
				],
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
							fallback: 'style-loader',
							use: [
								'css-loader',
								'sass-loader',
							],
						})			
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'public/img/[name].[ext]'
						},
					},
				],
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
			},
		],
	},

	resolve: {
		modules: [
			"node_modules",
			path.resolve(__dirname, 'src')
		],

		extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
	},

	plugins: [
		// 生成html
		new HtmlWebpackPlugin({
			filename: 'index.html', 
			template: path.join(__dirname, '/public/index.html'), 
		}),
		// 单独打包css
		new ExtractTextPlugin("index[hash].css"),
		// 单独打包sass
		// extractSass,
	],
}