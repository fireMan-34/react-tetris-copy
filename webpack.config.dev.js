const { merge } = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base');

const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = merge(webpackConfigBase, {
    mode: 'development',
    devtool: "eval",
    devServer: {
        compress: true,
        port: 3434,
        proxy: {
            "/api": {
                target: 'https://wwww.com:8000',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "",
                },
                //https ignore key
                secure: false,
            }
        }
    },
    plugins: [
        new EslintWebpackPlugin({}),
    ]

});