const path    = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    
    entry: {
        app : './app'
    },
    
    output: {
        path: path.resolve(__dirname, 'build'), 
        filename: '[name].js'
    },

    module: {
        loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel',
             query: {
                presets: ['es2015', 'react']
             }
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.ejs',
            filename: 'index.html',
            inject: true
        })
    ]
}