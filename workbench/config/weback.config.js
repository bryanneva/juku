const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devtool: isProd ? 'hidden-source-map' : 'cheap-module-source-map',
    entry: {
        app: './juku/start.ts',
        electron: './electron-main/main.ts'
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'bundle.[name].js'
    },
    node: {
        __dirname: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/.*\.js.map$/i),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv)
            }
        }),

        new CopyWebpackPlugin([{
            from: './electron-main/index.html',
            to: './index.html'
        }])
    ],
    target: 'electron'
};
