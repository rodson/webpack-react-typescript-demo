import path from "path";
import { Configuration } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin';
const devMode = process.env.NODE_ENV !== "production";

const config: Configuration = {
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
  plugins: [
    new HtmlWebpackPlugin({
		template: path.resolve(__dirname, "public", "index.html")
    }),
	... (devMode ? [] : [new MiniCssExtractPlugin()]),
  ],
};

export default config;
