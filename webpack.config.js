const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    "bundle.js": glob
      .sync("build/static/?(js|css)/main.*.?(js|css)")
      .map((f) => path.resolve(__dirname, f)),
  },
  output: {
    filename: "bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
