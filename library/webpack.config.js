const path = require('path');
module.exports = {

    entry: {
        'async-api-web-component': './src/index.ts',
        'async-api-web-component.min': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'AsyncApiWebComponent',
        libraryExport: 'default',
        umdNamedDefine: true
    },

    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',


    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
                query: {
                    declaration: true,
                }
            }
        ]
    }
};