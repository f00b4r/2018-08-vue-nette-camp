const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: ["./webapp/index.js"],
  output: {
    path: path.resolve(__dirname, "./www/dist"),
    publicPath: "/dist",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
