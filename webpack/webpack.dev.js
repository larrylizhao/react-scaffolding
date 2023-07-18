const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        port: 3000,
        hot: true
    },
    devtool: 'eval-source-map',
});
