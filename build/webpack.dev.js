/**
 * node webpack.dev.js
 *        --hot         开启热更新
 *        --uglify      压缩 
 *
 * NODE_ENV=development node build/webpack.dev.js --hot
 * NODE_ENV=production node build/webpack.dev.js --uglify
 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var PORT = 8088;
var HOST = "localhost";

var args = process.argv;
var hot = args.indexOf('--hot') > -1;

// 本地环境静态资源路径
var localPublicPath = 'http://' + HOST + ':' + PORT + '/';

config.output.publicPath = localPublicPath; 
config.entry.app.unshift('webpack-dev-server/client?' + localPublicPath);

// 开启热替换相关设置
if (hot === true) {
  config.entry.app.unshift('webpack/hot/only-dev-server');
  // 注意这里 loaders[0] 是处理 .js 文件的 loader
  config.module.loaders[0].loaders.unshift('react-hot');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

// see http://webpack.github.io/docs/build-performance.html#sourcemaps
config.devtool = '#eval-cheap-module-source-map';

new WebpackDevServer(webpack(config), {
  hot: hot,
  inline: true,
  compress: true,
  stats: {
    chunks: false,
    children: false,
    colors: true
  },
  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: true,
}).listen(PORT, HOST, function() {
  console.log(localPublicPath);
});