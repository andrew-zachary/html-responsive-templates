const { entry, output, plugins, core_rules } = require('./webpack.config');
const path = require('path');

module.exports = {
    entry,
    output,
    mode: 'development',
    plugins: [...plugins],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        writeToDisk: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            ...core_rules
        ]
    }
}