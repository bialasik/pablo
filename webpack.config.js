module.exports = {
  entry: [
    './src/assets/scripts/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist/public/scripts',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist/public/scripts'
  }
};
