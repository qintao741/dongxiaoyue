var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
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
                loader: 'file-loader',
                query: {
                    useRelativePath: process.env.NODE_ENV === "production"
                }
            }
        ]
    }
};