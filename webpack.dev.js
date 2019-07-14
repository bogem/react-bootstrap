const merge = require("webpack-merge");
const path = require("path");
const { NamedModulesPlugin } = require("webpack");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  devtool: "source-map",

  devServer: {
    contentBase: path.join(__dirname, "dst"),
    historyApiFallback: true,
    port: 3002,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          cacheCompression: false,
          cacheDirectory: true,
        },
      },
    ],
  },

  plugins: [new NamedModulesPlugin()],
});
