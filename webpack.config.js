// webpack.config.js
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
      filename: 'script.js',
      path: `${__dirname}/dist/js` // バッククォート（ ` ）で囲ってね
    },
  module: {
    rules: [
      { test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: 'dist',
    port: 3001
  }

};
