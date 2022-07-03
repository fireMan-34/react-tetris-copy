const { merge } = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(webpackConfigBase, {
    mode: "production",
    optimization: {
        minimizer: [
            new CssMinimizerPlugin({})
        ]
    }
});