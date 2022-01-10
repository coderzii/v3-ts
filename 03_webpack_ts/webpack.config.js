/*
 * @Date: 2022-01-10
 * @Description:
 */
const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "production",
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
};
