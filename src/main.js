import Vue from 'vue'

import Cookies from "js-cookie"

import "normalize.css"

import Element from 'element-ui';
import './styles/element-variables.scss'

import "@/styles/index.scss"  //global css

import App from './App.vue'
import router from './router'
import store from './store'

// import "./icons"
import "./permission"
import "./utils/err-log"

// import * as filter from './filters';

// if(Process.env.NODE_ENV === "production") {
//   const {mockXHR} = require("./mock");
//   mockXHR()
// }

Vue.use(Element, {
  size: Cookies.get("size") || "medium"
})

// Object.keys().forEach(key => {
//   Vue.filter(key, filters[key])
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')