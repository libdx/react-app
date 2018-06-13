const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin")
const FlowWebpackPlugin = require('flow-webpack-plugin')

module.exports = function(env, options) {
    const isProduction = options.mode === "production"

    const config = {
        entry: ['./src/index.js'],
        mode: options.mode,
        devtool: isProduction ? "none" : "source-map",
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },

        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: "html-loader"
                    }
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader"
                    })
                }
            ]
        },
        devServer: {
            historyApiFallback: true
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: './src/index.html',
                filename: './index.html'
            }),
            new ExtractTextPlugin("[name].css"),
            new CaseSensitivePathsPlugin(),
            new FlowWebpackPlugin()
        ]
    }
    return config
}
