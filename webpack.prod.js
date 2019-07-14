const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const { HashedModuleIdsPlugin } = require("webpack");

module.exports = merge(common, {
  mode: "production",

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          cacheCompression: false,
          cacheDirectory: true,
          envName: "production",
        },
      },
    ],
  },

  plugins: [
    new HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[chunkhash].css" }),
    new OptimizeCssAssetsPlugin(),
  ],
});
