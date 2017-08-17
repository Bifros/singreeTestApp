const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map', 
  module: {
    loaders: [
      // JS Babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        },
      },
      // CSS stylus
      { 
        test: /\.styl$/, 
        include: path.join(__dirname, 'src'),
        loader: 'style-loader!css-loader!stylus-loader'
      },
      // URL loader
      {
        test: /\.png$/,
        loader: "url-loader",
        query: { 
          mimetype: "image/png" 
        }
      }
    ]
  }
};