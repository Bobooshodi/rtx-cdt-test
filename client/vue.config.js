module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://node-api:3000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      },
    }
  }
}
