import { join } from "path";

const include = join(__dirname, "src");

export default {
  mode:
    process.argv.indexOf("--production") > -1 ? "production" : "development",
  entry: "./src/index",
  output: {
    path: join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "spotifyWrapper"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include
      }
    ]
  }
};
