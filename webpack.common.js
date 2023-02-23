const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
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
                test: /\.scss$/,
                use: [
                    "style-loader", //3. Injects styles into DOM
                    "css-loader",  //2. Turns css into commonjs
                    "sass-loader" //1. Turns sass into css
                ]
            },
            {
                test: /\.html$/,
                use: "html-loader"
            }
        ]
    }
};
