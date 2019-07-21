const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');

const serve = new Serve({
  host: 'localhost',
  static: ['./'],
  open: true,
  liveReload: false
});
module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    app: ['webpack-plugin-serve/client']
  },
  plugins: [
    serve
  ],
  watch: true
};