var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//分离css
const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const dist = path.resolve(__dirname, '../dist');

module.exports = {
    mode: 'development',
    entry: {
        index: ['./src/js/index.js', './src/scss/style.scss'],
        article: './src/js/article.js',
        ploicDy: './src/js/policDynamics.js',
        service: ["@babel/polyfill",'./src/js/service.js'],
        home: './src/js/home.js'
    },
    output: {
        filename: module.exports.mode === 'production' ? 'js/app.[contenthash:10].js' : 'js/app.[name].[hash:10].js',
        path: dist
    },
    plugins: [
        new CleanWebpackPlugin(),

        new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src/favicon.ico'),
                        to: dist,
                    }
                ]
            }
        ),
        new MiniCssExtractPlugin({
            filename: 'css/style.[contenthash:10].css'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index', 'home'],
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index', 'service'],
            filename: 'page/productService/index.html',
            template: 'src/page/productService/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: 'page/program/index.html',
            template: 'src/page/program/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: 'page/publicWelfare/index.html',
            template: 'src/page/publicWelfare/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index', 'ploicDy'],
            filename: 'page/policDynamics/index.html',
            template: 'src/page/policDynamics/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: 'page/contact/index.html',
            template: 'src/page/contact/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index', 'article'],
            filename: 'page/article/index.html',
            template: 'src/page/article/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: '404.html',
            template: 'src/404.html'
        }),
        new UglifyJsPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2 // 最少引用两次
                },
                vendors: { // 抽取第三方模块
                    priority: 1, // 权重，权重越高越先抽取
                    name: 'vendors',
                    test: /node_modules/, // 如果你多次引用了node_modules第三方模块,就抽取出来
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2
                }
            }
        },
        minimizer: [new UglifyJsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    // 'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    // Translates CSS into CommonJS
                    'css-loader',
                    'postcss-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            // {
            //     test: /\.(png|jpg|jpeg|gif|svg)$/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             esModule:false,
            //             limit: 8*1024,        //把小于8192B的文件打成Base64的格式
            //             name: '[contenthash:10].[ext]',
            //             outputPath: 'images/'  //将文件打包至images路径
            //         }
            //     }]
            // },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name: '[contenthash:10].[ext]',
                    outputPath: 'images/',
                    publicPath: '../images/'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        esModule: true,
                        attributes: {
                            list: [
                                {
                                    tag: 'img',
                                    attribute: 'src',
                                    type: 'src'
                                },
                                {
                                    tag: 'img',
                                    attribute: 'data-src',
                                    type: 'src'
                                },
                                {
                                    tag: 'div',
                                    attribute: 'data-src',
                                    type: 'src'
                                },
                                {
                                    tag: 'img',
                                    attribute: 'data-srcset',
                                    type: 'srcset',
                                },
                                {
                                    tag: 'a',
                                    attribute: 'href',
                                    type: 'src',
                                    filter: (tag, attribute, attributes, resourcePath) => {
                                        return attributes.href && /\.(png|jpe?g|gif|svg)$/.test(attributes.href);
                                    }
                                }
                            ]
                        }
                    }
                }
            },
        ],

    },
    devServer: {
        contentBase: dist,
        port: 8080,
        historyApiFallback: true,
        overlay: true,
        hot: true,
        compress: true,
        host: '0.0.0.0'
    }
};