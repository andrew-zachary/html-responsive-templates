const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const pages = [
  "home-page",
  "big-burger",
  "yoga-classes",
  "healthy-food-restaurant",
  "spicy-restaurant",
  "food-4-you",
];

module.exports = {
  entry: {
    "home-page-data": "./src/home-page/index.js",
    "yoga-classes-data": "./src/yoga-classes/index.js",
    "big-burger-data": "./src/big-burger/index.js",
    "healthy-food-restaurant-data": "./src/healthy-food-restaurant/index.js",
    "spicy-restaurant-data": "./src/spicy-restaurant/index.js",
    "food-4-you-data": "./src/food-4-you/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]/main.js",
    publicPath: "./",
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      filename: "food-4-you.html",
      template: "src/food-4-you/index.html",
      chunks: ["food-4-you-data"],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: "spicy-restaurant.html",
      template: "src/spicy-restaurant/index.html",
      chunks: ["spicy-restaurant-data"],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: "healthy-food-restaurant.html",
      template: "src/healthy-food-restaurant/index.html",
      chunks: ["healthy-food-restaurant-data"],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: "big-burger.html",
      template: "src/big-burger/index.html",
      chunks: ["big-burger-data"],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: "yoga-classes.html",
      template: "src/yoga-classes/index.html",
      chunks: ["yoga-classes-data"],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/home-page/index.html",
      chunks: ["home-page-data"],
      title: "home",
      inject: "body",
    }),
  ],
  core_rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
      },
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      loader: "file-loader",
      options: {
        outputPath: (url, resourcePath, context) => {
          return pages
            .map((page) => {
              if (resourcePath.indexOf(page) > -1) {
                return page + `-data/${url}`;
              }
            })
            .filter((link) => {
              return typeof link !== "undefined";
            })[0];
        },
      },
    },
    {
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader",
      options: {
        outputPath: (url, resourcePath, context) => {
          return pages
            .map((page) => {
              if (resourcePath.indexOf(page) > -1) {
                return page + `-data/${url}`;
              }
            })
            .filter((link) => {
              return typeof link !== "undefined";
            })[0];
        },
      },
    },
  ],
};
