const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(env, argv) {
  const isEnvDevelopment = env.dev;
  const isEnvProduction = env.prod;

  return {
    mode: isEnvDevelopment ? 'development' : isEnvProduction && 'production',
    devtool: isEnvDevelopment ? 'eval-cheap-module-source-map' : isEnvProduction && false,
    entry: {
      src: path.resolve(__dirname, 'src'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    resolve: {
      extensions: [".cjs", ".mjs", '.js', '.jsx', '.css'],
      modules: [
        path.join(__dirname, 'src'),
        'node_modules'
      ]
    },
    optimization: {
      nodeEnv: 'development'
    },
    devServer: {
      historyApiFallback: true,
      compress: true,
      https: false,
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: ['/node_modules/'],
          use: { loader: 'babel-loader'},
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: [
            isEnvDevelopment && 'style-loader',
            isEnvProduction && MiniCssExtractPlugin.loader,
            "css-loader"
          ].filter(Boolean),
        },
        {
          test: /\.module\.css$/,
          use: [
            {
              loader: require.resolve('style-loader'), 
            },
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: isEnvProduction ? '[hash:base64]' : '[path][name]__[local]',
                },

              },
            },
            {
              loader: require.resolve('postcss-loader'),
            }
          ]
        },
      ]
    },
    plugins:
    [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        filename: 'index.html'
      }),
      isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
      isEnvProduction && new MiniCssExtractPlugin(),
    ].filter(Boolean),
  }
};