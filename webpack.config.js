const path = require('path');

module.exports = {
    entry: './src/viewer.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        fallback: {
            fs: false,
            path: false,
            os: false,
        },
    },
    mode: 'development',
};
