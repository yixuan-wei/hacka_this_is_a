var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);

function callback(err, stats) {
  if (err) {
    console.log(err);
  } else {
    console.log(stats.toString({
      colors: true,
      chunks: false,
      children: false,
    }));
  }
}
compiler.watch({}, callback);