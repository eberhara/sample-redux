module.exports = {
    entry: './src/app.js',
    output: {
        path: './build', 
        filename: 'bundle.js'
    },
    devServer: {
    	inline: true,
    	contentBase: './build',
    	port: 3333
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
    }
}
