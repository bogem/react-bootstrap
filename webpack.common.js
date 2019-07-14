const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const srcPath = path.join(__dirname, "src");
const dstPath = path.join(__dirname, "dst");

module.exports = {
  entry: path.join(srcPath, "Index.tsx"),

  output: {
    filename: `[name].[contenthash].js`,
    chunkFilename: `[name].[chunkhash].js`,
    path: dstPath,
    pathinfo: false,
    publicPath: "/",
  },

  stats: {
    children: false,
    modules: false,
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "index.html"),
      filename: path.join(dstPath, "index.html"),
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.join(__dirname, "tsconfig.json"),
      watch: __dirname,
    }),
  ],
};
