const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const IS_DEV = NODE_ENV === 'development'
const IS_PROD = NODE_ENV === 'production'

function setupDevtool() {
  if (IS_DEV) return 'eval'
  if (IS_PROD) return false
}

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, './src/js/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: IS_PROD ? 'main.[contenthash].js' : 'main.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.json', '.css', '.scss', '...'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jpe?g$/,
        // type: 'asset/resource',
        type: 'asset',
      },
      {
        test: /\.svg$/,
        type: "asset",
        use: 'svgo-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo',
      template: path.resolve(__dirname, './src/html/index.html'),
      filename: IS_PROD ? 'index.[contenthash].html' : 'index.html',
      // filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: IS_PROD ? 'main.[contenthash].css' : 'main.css',
    }),
  ],
  devServer: {
    // historyApiFallback: true,
    hot: true,
    port: 3000,
    compress: true,
    open: true,
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              'imagemin-mozjpeg',
            ],
          },
        },
      }),
    ],
  },
  devtool: setupDevtool(),
}
