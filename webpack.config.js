module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "./bundle.js"
  },
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react"]
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
