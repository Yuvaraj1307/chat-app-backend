const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    entry: './src/server.ts',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map'
};
