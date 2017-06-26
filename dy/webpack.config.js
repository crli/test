var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Merge = require('webpack-merge');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var utils = require('./config/utils');

var currentTarget = process.env.npm_lifecycle_event;

var debug,          // is debug
    devServer,      // is hrm mode
    minimize;       // is minimize

if (currentTarget == "build") { // online mode 
    debug = false, devServer = false, minimize = true;
} else if (currentTarget == "dev") { // dev mode 
    debug = true, devServer = false, minimize = false;
} else if (currentTarget == "start") { // dev HRM mode 
    debug = true, devServer = true, minimize = false;
}

var resolvedir = function (dir) {
  return path.join(__dirname, '.', dir)
}

var PATHS = {
    publicPath: devServer ? '/' : './',
    libsPath: path.resolve(process.cwd(), './src/libs'),
    srcPath: path.resolve(process.cwd(), './src'),
    node_modulesPath: path.resolve('./node_modules'),
}

var entry = {
    index: './src/js/index.js',
    about: './src/js/about.js',
    list: './src/js/list.js',
    vendor: ['jquery']
};

var output = {
    path: path.join(__dirname, 'dist'),
    filename: devServer ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js',
    publicPath: PATHS.publicPath,
    chunkFilename: devServer ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js'
}



var rules = [  
    {
        test: /\.js$/,
        use: 'babel-loader',
        include: [resolvedir('src')]
    },
    {
        test: /\.html$/,
        use: "html-loader"
    },
    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use:[
            {
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'img/[name]-[hash:7].[ext]'
                }
            }
        ]     
    },
    {
       test : /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
       use: [
            {
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'font/[name]-[hash:7].[ext]'
                }
            }    
        ]   
    }
];


var resolve = {
    extensions: ['.js', '.css', '.scss', '.png', '.jpg'],
    modules: [PATHS.node_modulesPath],
    alias: {
        '@': resolvedir('src')
    }
}

var plugins = [
    new webpack.DefinePlugin({       
        __DEV__: debug,//（开发标识）        
        __DEVAPI__: devServer ? "/api" : "https://www.uworldeal.com/",//（代理的标识）
    }),
    new CleanWebpackPlugin(['dist'], {
        root: __dirname, 
        verbose: true,
        dry: false
    }),
    new webpack.optimize.CommonsChunkPlugin(
        {name: "vendor", filename: "js/vendor.js"}
    ),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
    new ExtractTextPlugin(devServer ? {filename: "css/[name].css"} : {filename:"css/[name]-[chunkhash:8].css", disable: false, allChunks: true})
];

var pages = Object.keys(utils.getEntry('./src/*.html'));

var confTitle = [ 
    {name: 'index', title: '这是首页标题'},
    {name: 'list', title: '这是列表标题'},
    {name: 'about', title: '这是关于我标题'}
]

//生成HTML模板
pages.forEach(function(pathname) {
    var itemName  = pathname.split('src\\') //根据系统路径来取文件名,window下的做法//,其它系统另测

    var conf = {
        filename: itemName[1] + '.html', //生成的html存放路径,相对于path
        template: pathname + '.html', //html模板路径
        inject: true, //允许插件修改哪些内容,包括head与body
        hash: false, //是否添加hash值
        minify: { //压缩HTML文件
            removeComments: true,//移除HTML中的注释
            collapseWhitespace: false //删除空白符与换行符
        }
    };

    conf.chunks = ['vendor', itemName[1]];

    for (var i in confTitle) { 
        if (confTitle[i].name === itemName[1]) { 
            conf.title = confTitle[i].title
        }
    }
    plugins.push(new HtmlWebpackPlugin(conf));
});

if (minimize) {

    plugins.push(

        new webpack.optimize.UglifyJsPlugin({ // js、css
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module', '_']
            },
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        })
    )
}

var config = {
    devtool: 'eval-source-map',
    entry: entry,
    output: output,
    module: {
        loaders: rules
    },
    resolve: resolve,
    plugins: plugins,
}

var proxyTarget = 'http://192.168.1.100/'; //proxy target address 
/*
 *  Hrm setting
 * */
if (devServer) {
    config = Merge(
        config,
        {
            plugins: [
                new webpack.HotModuleReplacementPlugin({}),
                new OpenBrowserPlugin({url: 'http://localhost:5000'})
            ],
            module:{
                loaders:[
                    {
                        test: /\.(css|scss)$/,
                        loader:"style-loader!css-loader!postcss-loader!sass-loader"
                    }
                ]
            },
            devServer: {
                historyApiFallback: true,
                hot: true,
                inline: true,
                stats: 'errors-only',
                // contentBase: path.join(__dirname, "dist"),
                // compress: true,
                host: "0.0.0.0", // Defaults to `localhost`   process.env.HOST
                port: 5000,  // Defaults to 5000   process.env.PORT
                proxy: {
                    __DEVAPI__: {
                        target: proxyTarget,
                        changeOrigin: false,
                        pathRewrite: {
                          '^/api': ''
                        }
                    }
                }
                
            }
        }
    );
}else{
    config = Merge(
        config,
        {
            module:{
                loaders:[
                    {
                        test: /\.css$/,
                        use: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: [ 
                                { loader: 'css-loader', options: { importLoaders: 2 ,minimize: true} },
                                'postcss-loader'
                            ]
                        })
                    },

                    { 
                        test: /\.scss$/, 
                        use:ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: [ 
                                { loader: 'css-loader', options: { importLoaders: 2 ,minimize: true} },
                                'postcss-loader',
                                'sass-loader'
                            ]

                        })
                    },
                ]
            }
        }
    );
}

module.exports = config;