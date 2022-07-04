const path = require('path');

const resolve = targetPath => path.join(__dirname, targetPath);

const NODE_MODULES = /node_modules/;

const IS_PROD = process.env.NODE_ENV === "prod";

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    target: "web",
    entry: {
        main: resolve('src/index.js'),
    },
    output: {
        filename: '[name].[contenthash].js',
        path: resolve('dist'),
        clean: true,
        publicPath: '/',
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".json", ".css", ".less"],
        alias: {
            "@": path.join(__dirname),
        }
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: NODE_MODULES,
                use: {
                    loader: 'babel-loader',
                    // plugin-transform-runtime is need @babel/runtime https://babeljs.io/docs/en/babel-plugin-transform-runtime
                },
            },
            {
                test: /\.(less|css)$/,
                use: [
                    IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    "postcss-loader",
                    "less-loader",
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: resolve("public/index.html"),
            // favicon
        }),

        new MiniCssExtractPlugin({
            filename: IS_PROD ? "[name][contenthash].css" : "[name].css",
            chunkFilename: IS_PROD ? "[id].[contenthash].css" : "[id].css",
        }),

    ]
};