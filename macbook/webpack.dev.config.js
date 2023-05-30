const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: {
    "mac-book": "./src/macbook.js",
  },

  output: {
    filename: "[name].bundle.js",

    /**
     * With zero configuration,
     *   clean-webpack-plugin will remove files inside the directory below
     */
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9002/",
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    port: 9002,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },

      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
