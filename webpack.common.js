const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    output: {
        path: require('path').resolve(__dirname,"dist"),
        filename: 'bundle.js',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader"
            }
        ]
    }
};
