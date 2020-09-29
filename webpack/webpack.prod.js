const {merge} = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('path');
const dist = path.resolve(__dirname, '../dist');
const srcPath = path.resolve(__dirname, '../src');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'js/app.[contenthash:10].js',
        path: dist,
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            chunks: ['index', 'home'],
            filename: 'index.html',
            template: srcPath + '/index.html',
            minify: {
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['index', 'service'],
            filename: 'page/productService/index.html',
            template: srcPath + '/page/productService/index.html',
            minify: {
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: 'page/program/index.html',
            template: srcPath + '/page/program/index.html',
            minify: {
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: 'page/publicWelfare/index.html',
            template: srcPath + '/page/publicWelfare/index.html',
            minify: {
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['index', 'ploicDy'],
            filename: 'page/policDynamics/index.html',
            template: srcPath + '/page/policDynamics/index.html',
            minify: {
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: 'page/contact/index.html',
            template: srcPath + '/page/contact/index.html',
            minify: {
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['index', 'article'],
            filename: 'page/article/index.html',
            template: srcPath + '/page/article/index.html',
            minify: {
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: '404.html',
            template: srcPath + '/404.html',
            minify: {
                minifyCSS: true,
                minifyJS: true
            }
        })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new UglifyJSPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', {discardComments: {removeAll: true}}],
                }
            })
        ]
    },
    devServer: {
        contentBase: dist,
        host: '0.0.0.0'
    }
});
