const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== "production";

const config = {
  mode: devMode ? "development" : "production",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader"
		    ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
	  hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
		template: path.resolve(__dirname, "public", "index.html")
    }),
	... (devMode ? [] : [new MiniCssExtractPlugin(), new webpack.HotModuleReplacementPlugin()]),
  ],
};

module.exports = config;
