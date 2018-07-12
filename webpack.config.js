const webpack = require('webpack');

/*
    resolve: Serve para 'resolver' problemas com extensões de arquivos na hora de fazer
    os imports. Com o resolve definido, não é mais necessário para qual a entensão do component
    ao importa-lo.
*/

module.exports = {
    entry: './ex/index.jsx',

    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },

    devServer: {
        port: 8080,
        contentBase: './public'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    }
}