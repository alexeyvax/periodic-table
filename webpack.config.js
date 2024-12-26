const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: "./src/index"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: "[name]__[local]___[hash:base64:5]",
                        },
                        importLoaders: 1
                    }
                  }
                ],
                include: /\.css$/
              },
              {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ],
                exclude: /\.css$/
              },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource"
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "public/index.html",
        favicon: "public/favicon.ico"
    })]
};
