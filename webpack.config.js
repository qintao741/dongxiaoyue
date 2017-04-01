var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: ['./src/main.js',
        'webpack-hot-middleware/client',
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    "presets": ["env","react"]
                }
            },
            {
                test: /\.css/,
                loaders: ["style-loader","css-loader"]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
};