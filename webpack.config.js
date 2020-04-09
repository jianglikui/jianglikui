var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

var webpackConfig = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    hot: true,
    port: 3000,
    //open: true,
    quiet: true,
  },
  module: {
    rules: [
      //typescript jsx
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      //css(and css modlues) support
      {
        test: /\.css$/,
        include: /src\/commonCss/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /src\/commonCss/],
        use: [
          "style-loader",
          "@teamsupercell/typings-for-css-modules-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]-[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

module.exports = webpackConfig;
