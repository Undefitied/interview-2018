const path = require('path')
const webpack = require('webpack')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const nodeEnv = process.env.NODE_ENV || 'development'
const { ifDevelopment, ifProduction } = getIfUtils(nodeEnv)

module.exports = removeEmpty({
    entry: './src/index.js',

    output: {
        filename: ifProduction('[name]-bundle-[hash].js', '[name]-bundle.js'),
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                }),
            },
            {
                test: /\.js/,
                use: ['babel-loader?cacheDirectory'],
                exclude: /node_modules/,
            },
        ],
    },

    devtool: ifDevelopment('eval-source-map', 'source-map'),

    devServer: ifDevelopment({
        host: '0.0.0.0',
        port: 3000,
        stats: 'normal',
        historyApiFallback: true
    }),

    plugins: removeEmpty([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv),
            },
        }),

        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: './src/index.html',
            environment: nodeEnv,
        }),

        ifProduction(
            new ExtractTextPlugin('[name]-bundle-[hash].css'),
            new ExtractTextPlugin('[name]-bundle.css')
        ),
    ]),
})
