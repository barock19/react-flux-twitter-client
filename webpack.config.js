module.exports = {
  entry: "./app/main.js",
  output: {
    path: "./build",
    filename: "./bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader'},
    ]
  }
}
