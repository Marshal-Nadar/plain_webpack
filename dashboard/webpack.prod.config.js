const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/dashboard.js",

  output: {
    filename: "[name].[contenthash].js",

    /**
     * With zero configuration,
     *   clean-webpack-plugin will remove files inside the directory below
     */
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9000/",
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 10000,
      automaticNameDelimiter: "~",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*"),
      ],
    }),

    new HtmlWebpackPlugin({
      filename: "dashboard.html",
      title: "Dashboard!",
    }),
    new ModuleFederationPlugin({
      name: "App",
      remotes: {
        HelloWorldApp: "HelloWorldApp@http://localhost:9001/remoteEntry.js",
        MacBookApp: "MacBookApp@http://localhost:9002/remoteEntry.js",
      },
    }),
  ],
};
