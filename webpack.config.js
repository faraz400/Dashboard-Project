const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'output.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Loaders for CSS
      },
      // SASS/SCSS Loader
      {
        test: /\.s[ac]ss$/i, // Matches .sass and .scss files
        use: ['style-loader', 'css-loader', 'sass-loader'], // Loaders for SASS/SCSS
      },
      // JS/JSX Loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Transpile JS/JSX using Babel
      },
      // Asset Loader for Images
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Matches image files
        type: 'asset/resource', // Emits files to the output directory
      },
      // Asset Loader for Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Matches font files
        type: 'asset/resource', // Emits files to the output directory
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: './public',
    port: 3002,
    hot: true,
    open: true,
    historyApiFallback: true, // Add this line to handle React routes
},
  mode: 'development',
};
