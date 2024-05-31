import path from 'path';
import nodeExternals from 'webpack-node-externals';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export default {
  mode: 'development',
  entry: './src/server.ts',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
};
