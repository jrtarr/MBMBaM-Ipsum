const path = require('path')

module.exports = {
    entry: {
        index: ['babel-polyfill','./src/scripts/index.js'],
        paragraph: ['babel-polyfill','./src/scripts/paragraph.js']
    },
    output: {
        path: path.resolve(__dirname,'public/scripts'),
        filename: 'bundle-[name].js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname,'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}