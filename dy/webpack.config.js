var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var validate = require('webpack-validator');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Merge = require('webpack-merge');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

/*
 *  Detect how npm is run and branch based on that
 * */
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

 /*
 * proxy target address
 * */
var proxyTarget = 'http://localhost:8080/';   
var PATHS = {
    /*
     * publish path
     * */
    publicPath: devServer ? '/' : './',


    /*
     * public resource path
     * */
    libsPath: path.resolve(process.cwd(), './src/libs'),

    /*
     * resource path
     * */
    srcPath: path.resolve(process.cwd(), './src'),

    /*
    * node_modules path
    */
    node_modulesPath: path.resolve('./node_modules'),
}

function resolvedir (dir) {
  return path.join(__dirname, '.', dir)
}
var resolve = {
    extensions: ['', '.js', '.css', '.scss', '.png', '.jpg'],

    /*
     * The directory (absolute path) that contains your modules
     * */
    root: [
        PATHS.node_modulesPath
    ],

    /*
     * Replace modules with other modules or paths.
     * */
    alias: {
        '@': resolvedir('src')
        /*
         * js
         */
        // jquery: path.join(PATHS.libsPath, "./js/jquery")
        /*
         * css
         */

    }
}

/*
 * The entry point for the bundle.
 * */
var entry = {
    index: './src/js/index.js',
    about: './src/js/about.js',
    list: './src/js/list.js',
    vendor: ['jquery']
};


/*
 * output options tell Webpack how to write the compiled files to disk
 * */
var output = {
    /*
     *  determines the location on disk the files are written to
     * */
    path: path.join(__dirname, 'dist'),

    /*
     * The publicPath specifies the public URL address of the output files when referenced in a browser
     * */
    publicPath: PATHS.publicPath,

    /*
     * Specifies the name of each output file on disk
     * */
    filename: devServer ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js',

    /*
     * The filename of non-entry chunks as relative path inside the output.path directory.
     * （按需加载模块时输出的文件名称）
     * */
    chunkFilename: devServer ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js'
}

var loaders = [
    
    {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolvedir('src')]
    },
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
    },

    { 
        test: /\.scss$/, 
        loader:ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader?outputStyle=expanded")
    },
    {
        test: /\.html$/,
        loader: "html-loader"
    },

    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
            limit: 10000,
            name: 'img/[name]-[hash:7].[ext]'
        }
    },

    {
       test   : /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
       loader : 'url-loader',
       query: {
           limit: 10000,
           name: 'font/[name]-[hash:7].[ext]'
       }
    }
];

var plugins = [

    new webpack.DefinePlugin({
        /*
         * dev flag
         * （开发标识）
         * */
        __DEV__: debug,
        /*
         * proxy flag
         * （代理的标识）
         * */
        __DEVAPI__: devServer ? "/devApi/" : "''",
    }),

    new CleanWebpackPlugin(['dist'], {
        root: '', // An absolute path for the root  of webpack.config.js
        verbose: true,// Write logs to console.
        dry: false // Do not delete anything, good for testing.
    }),
    new webpack.optimize.CommonsChunkPlugin(
        {name: "vendor", filename: "js/vendor.js"}
    ),

    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
        
        // $: "webpack-zepto"
    }),

    /*
     * Search for equal or similar files and deduplicate them in the output
     */
    new webpack.optimize.DedupePlugin(),

    /*
     * Using this config the vendor chunk should not be changing its hash unless you change its code or dependencies
     * （避免在文件不改变的情况下hash值不变化）
     * */
    new webpack.optimize.OccurenceOrderPlugin(),

   

    new ExtractTextPlugin(devServer ? "css/[name].css" : "css/[name]-[chunkhash:8].css",{allChunks: true})
];

var pages = Object.keys(getEntry('./src/*.html'));

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
//按文件名来获取入口文件(即需要生成的模板文件数量)
function getEntry(globPath) {
    var files = glob.sync(globPath);
    var entries = {},
        entry, dirname, basename, pathname, extname;
    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        extname = path.extname(entry);
        basename = path.basename(entry, extname);
        pathname = path.join(dirname, basename);
        entries[pathname] = './' + entry;
    }
    return entries;
}


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
    entry: entry,
    /*
     *  Like resolve but for loaders(find the position of loader).
     * */
    resolveLoader: {root: path.join(__dirname, "node_modules")},
    output: output,
    module: {
        loaders: loaders
    },
    resolve: resolve,
    plugins: plugins,

}


/*
 *  Hrm setting
 * */
if (devServer) {

    config = Merge(
        config,
        {
            plugins: [
                // Enable multi-pass compilation for enhanced performance
                // in larger projects. Good default.
                new webpack.HotModuleReplacementPlugin({
                    multiStep: true
                }),
                new OpenBrowserPlugin({url: 'http://localhost:5000' + PATHS.publicPath })
            ],
            devServer: {
                // Enable history API fallback so HTML5 History API based
                // routing works. This is a good default that will come
                // in handy in more complicated setups.
                historyApiFallback: true,

                // Unlike the cli flag, this doesn't set
                // HotModuleReplacementPlugin!
                hot: true,
                inline: true,

                // Display only errors to reduce the amount of output.
                stats: 'errors-only',

                // Parse host and port from env to allow customization.
                //
                // If you use Vagrant or Cloud9, set
                // host: options.host || '0.0.0.0';
                //
                // 0.0.0.0 is available to all network devices
                // unlike default `localhost`.
                host: "0.0.0.0", // Defaults to `localhost`   process.env.HOST
                port: "5000",  // Defaults to 8080   process.env.PORT
                proxy: {
                    __DEVAPI__: {
                        target: proxyTarget,
                        changeOrigin: true,
                        pathRewrite: {
                          '^/devApi/': ''
                        }
                    }
                }
                
            }
        }
    );
}

module.exports = validate(config);