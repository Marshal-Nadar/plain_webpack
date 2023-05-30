const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: {
    "mac-book": "./src/macbook.js",
  },
  output: {
    filename: "[name].[contenthash].js",

    /**
     * With zero configuration,
     *   clean-webpack-plugin will remove files inside the directory below
     */
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9002/",
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
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },

      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
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
        test: /\.hbs$/,
        use: ["handlebars-loader"],
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
      filename: "mac-book.html",
      title: "Mac Book!",
      description: `Mac Book Air M1!`,
      template: "src/page-template.hbs",
    }),
    new ModuleFederationPlugin({
      name: "MacBookApp",
      filename: "remoteEntry.js",
      exposes: {
        "./MacBookPage": "./src/components/macbook-page/macbook-page.js",
      },
    }),
  ],
};
