var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./config/webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: __dirname + '/dist/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        port: 3000,
        host: '0.0.0.0',
        hot: true,
        inline: true,
        colors: true,
        historyApiFallback: true,
        compress: true,
        quiet: false,
        progress: true,
        stats: 'minimal'
    }
})