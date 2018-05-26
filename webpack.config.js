const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CleanWebpackPlugin =  require('clean-webpack-plugin');


module.exports = {
    entry: {
        // app:'./src/index.js',
        // print:'./src/print.js',
        mobile: './resource/v/js/mobile.js'
    },
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         title:'Output Management2'
    //     })
    // ],
     devtool:'source-map',
    //devtool: 'nosources-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'tl',
            template: 'mobile.html', // Load a custom template 
            inject: false, // Inject all scripts into the body 
            // chunks: ['mobile'],
            filename:'mobile.html',
            hash:true
        }),
        new HtmlWebpackPlugin({
            title:'rd平台',
            template: 'mobile.html', // 源模板文件
            filename: './index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
            showErrors: true,
            inject: false
        })
    ],
    output: {
        // filename: '[name].[hash].js',
        filename:'[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};