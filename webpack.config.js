var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

var webpackConfig = {
  devServer: {
    hot: true,
    inline: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

module.exports = webpackConfig;
