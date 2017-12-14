module.exports = {
  context: __dirname,
  entry: './src/app.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
     loaders: [
       {
         test: /\.jsx?$/,
         exclude: /(node_modules|bower_components)/,
         loader: 'babel-loader',
         query: {
           presets: ['react', 'es2015', 'stage-1']
         }
       }
     ]
   },
   devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
