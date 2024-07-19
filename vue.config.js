module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000"
      }
    }
  }
}
