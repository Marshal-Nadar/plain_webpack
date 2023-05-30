const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/dashboard.js",

  output: {
    filename: "[name].bundle.js",

    /**
     * With zero configuration,
     *   clean-webpack-plugin will remove files inside the directory below
     */
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9000/",
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    index: "dashboard.html",
    port: 9000,
    historyApiFallback: {
      index: "dashboard.html",
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
            plugins: ["transform-class-properties"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
    resolve: {
      extensions: [".ts", ".js"],
    },
  },
  plugins: [
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
