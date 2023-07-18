const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "../src/index.js"),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.[t|j]sx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'../src/index.html'),
            inject: true
        })
    ],
    resolve: {
        alias: {
            '@Components': path.join(__dirname, '../src/components'),
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    }
}
