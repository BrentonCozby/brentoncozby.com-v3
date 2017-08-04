import {
    optimize
} from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import ResourceHintsPlugin from 'resource-hints-webpack-plugin'
import FaviconsPlugin from 'favicons-webpack-plugin'
import { resolve } from 'path'

import { Dir } from '../config.js'

export default {
    entry: {
        bundle: [
            'babel-polyfill',
            resolve(Dir.client, 'js', 'index.js')
        ]
    },
    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {modules: false}],
                            'stage-0'
                        ]
                    }
                }]
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader', {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [require('autoprefixer')({browsers: ['> 1%']})]
                            }
                        },
                        'sass-loader'
                    ]
                })
            }, {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 40000,
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new FaviconsPlugin({
            logo: resolve(Dir.root, 'b-icon.png'),
            background: '#eee',
            title: 'brentoncozby.com',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: true,
                twitter: true,
                yandex: false,
                windows: true
            }
        }),
        new ExtractTextPlugin('style.css'),
        new optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
              return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new ResourceHintsPlugin()
    ]
}
