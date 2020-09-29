var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//分离css
const CopyPlugin = require("copy-webpack-plugin");
const dist = path.resolve(__dirname, '../dist');
const srcPath = path.resolve(__dirname, '../src');
module.exports = {
    entry: {
        index: [srcPath + '/js/index.js', srcPath + '/scss/style.scss'],
        article: srcPath + '/js/article.js',
        ploicDy: srcPath + '/js/policDynamics.js',
        service: ["@babel/polyfill", srcPath + '/js/service.js'],
        home: srcPath + '/js/home.js'
    },
    // output: {
    //     filename: module.exports.mode === 'production' ? 'js/app.[contenthash:10].js' : 'js/app.[name].[hash:10].js',
    //     path: dist
    // },

    plugins: [
        new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, '../src/favicon.ico'),
                        to: dist
                    }
                ]
            }
        ),
        new MiniCssExtractPlugin({
            filename: 'css/style.[contenthash:10].css'
        })
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
        }
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
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name: '[contenthash:10].[ext]',
                    outputPath: 'images/',
                    publicPath: '../../images/'
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

    }
};
