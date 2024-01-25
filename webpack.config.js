const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const devMode = process.env.NODE_ENV !== "production";

const config = {
  mode: devMode ? "development" : "production",
  entry: {
    main: "./src/index.tsx",
  },
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
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
		template: path.resolve(__dirname, "public", "index.html")
    }),
	... (devMode ? [new ReactRefreshWebpackPlugin()] : [new MiniCssExtractPlugin()]),
  ],
};

module.exports = config;
