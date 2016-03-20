module.exports = {
  entry: [
    './src/assets/js/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist/assets/js',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist/assets/js'
  }
};