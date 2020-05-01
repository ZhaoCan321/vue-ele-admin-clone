import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import createLogger from 'vuex/dist/logger'         

Vue.use(Vuex)

const modulesFiles = require.context("./modules", true,  /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');  
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default
  return modules;
}, {})

// 只在开发环境时启动严格模式  
// 为什么添加之后反应会很慢
const debug = process.env.NODE_ENV === 'production' 

export default new Vuex.Store({
  modules,
  getters,
  plugins: debug ? [createLogger()] : []
})


