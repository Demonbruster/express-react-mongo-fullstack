const path = require('path');

module.export = {
  mode:"development",
  entry:path.resolve(__dirname,'src','app'),
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    publicPath:'/'
  },
  resolve:{
    extensions:['.js','.jsx']
  },
  devServer:{
    historyApiFallback:true
  },
  module:{
    rules:[{
      test:/\.jsx?/,
      loader:'bable-loader'
    }]
  }
}
