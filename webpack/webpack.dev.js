const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
const common = require('./webpack.common.js');
const path = require('path');
const dist = path.resolve(__dirname, '../dist');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['index', 'home'],
            filename: 'index.html',
            template: '../src/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index', 'service'],
            filename: 'page/productService/index.html',
            template: '../src/page/productService/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: 'page/program/index.html',
            template: '../src/page/program/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: 'page/publicWelfare/index.html',
            template: '../src/page/publicWelfare/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index', 'ploicDy'],
            filename: 'page/policDynamics/index.html',
            template: '../src/page/policDynamics/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: 'page/contact/index.html',
            template: '../src/page/contact/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index', 'article'],
            filename: 'page/article/index.html',
            template: '../src/page/article/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: '404.html',
            template: '../src/404.html'
        })
    ]
});