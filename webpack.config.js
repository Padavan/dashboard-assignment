const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(env, argv) {
  console.log("env", env);
  const isEnvDevelopment = env.dev;
  console.log("isEnvDevelopment", isEnvDevelopment);

  // const isEnvProduction = webpackEnv === 'production';
  return {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
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
      // modules: [
      //   path.join(__dirname, 'src'),
      //   'node_modules'
      // ]
    },
    optimization: {
      nodeEnv: 'development'
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      compress: true,
      https: false,
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: ['/node_modules/'],
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: [
            isEnvDevelopment && 'style-loader',
            "css-loader"
          ]
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
                modules: true
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                sourceMap: true,
              }
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
      new webpack.HotModuleReplacementPlugin(),
      new webpack.EnvironmentPlugin({ NODE_ENV: 'development' })
    ]
  }
};