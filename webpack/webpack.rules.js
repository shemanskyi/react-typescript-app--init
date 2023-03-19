const { isDev } = require('./webpack.helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
	{
		// Typescript loader
		test: /\.tsx?$/,
		exclude: /(node_modules|\.webpack)/,
		use: {
			loader: 'ts-loader',
			options: {
				transpileOnly: true,
			},
		},
	},
	{
		// CSS Loader
		test: /\.css$/,
		use: [
			{ loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
			{ loader: 'css-loader' },
		],
	},
	{
		// SCSS (SASS) Loader
		test: /\.s[ac]ss$/i,
		use: [
			{ loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
			{ loader: 'css-loader' },
			{ loader: 'sass-loader' },
		],
	},
	{
		// Less loader
		test: /\.less$/,
		use: [
			{ loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
			{ loader: 'css-loader' },
			{ loader: 'less-loader' },
		],
	},
	{
		// Assets loader
		// More information here https://webpack.js.org/guides/asset-modules/
		test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
		type: 'asset',
		generator: {
			filename: 'src/assets/[hash][ext][query]',
		},
	},
];
