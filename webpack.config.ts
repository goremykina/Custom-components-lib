import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';


const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname,'./src/index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, `./src/index.html`),
    })],
};

export default config;