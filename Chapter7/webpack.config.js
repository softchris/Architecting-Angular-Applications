let webpack = require("webpack");

module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "cheap-module-source-map"
};
