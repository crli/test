var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var map = require('./map')
var ROOT = path.resolve(__dirname)
var ENV = process.env.ENV
var CDN = process.env.CDN

var entry = {
		'vendor': [
			'jquery'
		]
	},
	plugins = []

for (chunk in map) {
	entry[chunk] = map[chunk].src
	plugins.push(new HtmlWebpackPlugin({
		alwaysWriteToDisk: true,
		filename: ROOT + '/pages/html/' + map[chunk].tpl,
		template: ROOT + '/pages/tpl/' + map[chunk].tpl,
		chunks: ['vendor', chunk]
	}))
}

if(ENV == 'DEV') {
	plugins.push(new HtmlWebpackHarddiskPlugin()),
	plugins.push(new OpenBrowserPlugin({url: 'http://localhost:8080/index.html'}))
}else {
	plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}))	
}

module.exports = {
	devtool: ENV == 'DEV' ? 'cheap-eval-source-map' : 'source-map',
	entry: entry,
	output: {
		filename: '[name].[hash:8].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: CDN ? CDN : '/dist'
	},
	resolve: {
		extensions: ['', '.js', '.css', '.scss', '.png', '.jpg'],
		alias: {
			'src': path.resolve(__dirname,'src'),
			'pages': path.resolve(__dirname,'pages')
		}
	},
	externals: {
		'd3': 'window.d3'
	},
	devServer: {
		host: 'localhost',
		port: 8080, // 默认8080
		inline: true, // 可以监控js变化
		hot: true, // 热启动
		compress: true,
		watchContentBase: false,
		// proxy: {
		// 	'api': {
		// 		target: ''
		// 	}
		// }
	},
	module: {
		loaders: [
			{
		        test: /\.css$/,
		        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
		    },

		    { 
		        test: /\.scss$/, 
		        loader:ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader?outputStyle=expanded")
			},
			{
		        test: /\.(png|gif|jpe?g)$/,
		        loader: 'url-loader',
		        query: {
		            limit: 10000,
		            name: 'imgs/[name]-[hash:8].[ext]'
		        }
			},
			{
				test: /\.js$/,
				loader: "babel",
				exclude: /node_modules/
			},
			{
				test: /(\.html|\.php)$/,
      			loader: "raw-loader"
			}
		]
	},
	plugins: plugins.concat([
		new webpack.DefinePlugin({
			'ENV': JSON.stringify(process.env.ENV)
		}),
		new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js'),
		new ExtractTextPlugin('[name].[hash:8].css'),
		new webpack.ProvidePlugin({
			$: 'jquery',
	      	jQuery: 'jquery',
	      	'window.jQuery': 'jquery',
	      	'window.$': 'jquery',
		})
	])
}