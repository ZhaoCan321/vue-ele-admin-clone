"use strict"
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 9527 // dev port

module.exports = {
  lintOnSave: false,
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue"],
      alias: {
        "@" : resolve("src")
      }
    }
  },
}