import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const commonConfig: Configuration = {
  mode: 'development',
  externals: ['fsevents'],
  // 不要配置 output 交给 electron-forge 去处理，否则需要额外的配置
  // output: {
  //   publicPath: './',
  //   filename: '[name].js',
  //   assetModuleFilename: 'assets/[name][ext]',
  // },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_module/,
        loader: 'babel-loader',
        options: {
          exclude: /node_modules/,
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(ico|png|svg|eot|woff?2?)$/,
        type: 'asset/resource',
      },
    ],
  },
}

export const mainConfig: Configuration = {
  ...commonConfig,
  target: 'electron-main',
  entry: {
    index: './src/index.ts',
  },
}

export const rendererConfig: Configuration = {
  ...commonConfig,
  // 不能改动
  target: 'web',
  entry: {
    app: './src/web/index.tsx',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // TODO 应该是不需要的
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/web/index.html',
    }),
  ],
}

export const preloadConfig: Configuration = {
  ...commonConfig,
  target: 'electron-preload',
  entry: './src/preload.ts',
}
