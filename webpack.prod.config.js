const { entry, output, plugins, core_rules } = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry,
    output,
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    plugins: [
        ...plugins,
        new MiniCssExtractPlugin({
            filename: '[name]/style.[contenthash].css'
        })
    ],
    module: {
        rules: [
            ...core_rules,
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            //fix url within css file
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}