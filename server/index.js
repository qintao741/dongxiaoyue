var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpack = require("webpack");
var path = require("path");
var webpackConfig = require("./../webpack.config");

var app = express();
var compiler = webpack(webpackConfig);

var ASSETS_DIR = path.join(__dirname, '..', 'dist');


app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath // Same as `output.publicPath` in most cases.
}));
app.use(webpackHotMiddleware(compiler));


app.use('/dist', express.static(ASSETS_DIR));


app.get("/*",function (req,res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});


app.listen(3000, function () {
    console.log("Listening on port 3000!");
});