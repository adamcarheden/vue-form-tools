const webpack = require( 'webpack' )
const path = require('path')
const projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: projectRoot+'/src/vue-form-tools.js',
  output: {
    path: projectRoot,
    filename: 'vue-form-tools.js',
    library: 'vue-form-tools',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: [ '.js', '.vue' ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  plugins: [
/*
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
*/
  ]
}
