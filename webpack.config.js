var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

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
      //图片
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/, //正则表达式匹配图片规则
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
              name: "images/[name]-[hash:8].[ext]",
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
    new CopyWebpackPlugin([{ from: "./src/assets", to: "assets" }]),
  ],
};

module.exports = webpackConfig;
