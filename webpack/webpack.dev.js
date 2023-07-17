const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        port: 8080,
        hot: true
    },
    devtool: 'eval-source-map',
});
