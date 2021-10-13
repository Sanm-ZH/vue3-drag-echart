module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({ /* options */ })
    ]
  }
}
