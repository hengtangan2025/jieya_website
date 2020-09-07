var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//分离css
const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        index: ['./src/js/index.js', './src/scss/style.scss'],
        my: './src/js/my.js'
    },
    output: {
        filename: 'js/app.[hash:10].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/style.[hash:10].css'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index', 'my'],
            filename: 'page/my/index.html',
            template: 'src/page/my/index.html'
        }),
        // new HtmlWebpackPlugin({
        //     chunks: ['index', 'about'],
        //     filename: 'page/about/index.html',
        //     template: 'src/page/about/index.html'
        // }),
        // new HtmlWebpackPlugin({
        //     chunks: ['index', 'policDynamics'],
        //     filename: 'page/policDynamics/index.html',
        //     template: 'src/page/policDynamics/index.html'
        // })
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
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
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
                    outputPath: 'images/'
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
                                }
                            ]
                        }
                    }
                }
            },
        ],

    },
    devServer: {
        contentBase: path.join('dist'),
        port: 8080,
        historyApiFallback: true,
        overlay: true,
        hot: true,
        compress: true,
        open: true,
        host: '192.168.5.35'
    }
};
