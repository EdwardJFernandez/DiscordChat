import path from "path";
import { Configuration } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";

const config: Configuration = {
  mode:
    (process.env.NODE_ENV as "production" | "development" | undefined) ??
    "development",
  entry: "./src/App.tsx",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
};

export default config;
