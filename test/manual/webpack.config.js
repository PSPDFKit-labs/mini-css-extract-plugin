/* globals document */
const Self = require('../../');

module.exports = {
  mode: 'development',
  output: {
    chunkFilename: '[contenthash].js',
    publicPath: '/dist/',
    crossOriginLoading: 'anonymous',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [Self.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new Self({
      filename: '[name].css',
      chunkFilename: '[contenthash].css',
      insert: function insert(linkTag) {
        document.head.appendChild(linkTag);
      },
    }),
  ],
  devServer: {
    contentBase: __dirname,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
