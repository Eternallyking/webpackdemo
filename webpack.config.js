const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html',
        }),
        new CleanWebpackPlugin()
    ],
    devServer:{
        port: 3000,
        open: true,
    }
}