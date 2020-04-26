import { asyncRoutes, constantRoutes } from '@/router';

function hasPermission(roles, route) {
  if(route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

function filterAsyncRoutes(routes, roles) {
  const res = [];
  routes.forEach(route => {
    const tmp = { ...route }    //这行代码要不要应该都可以
    if(hasPermission(roles, tmp)) {
      if(tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: [],        // 所有的路由
  addRoutes: []       // 动态路由
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if(roles.includes("admin")) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit("SET_ROUTES", accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}