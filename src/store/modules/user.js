import { getToken, removeToken } from "@/utils/auth";


const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
}

const actions = {
  getInfo({commit, state}) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = reponse
        if(!data) {
          reject("Verification failed")
        }
        const { roles, name, avatar, introduction } = data
        if(!roles || roles.length <= 0) {
          reject("getInfo: non-null array")
        }
        commit("SET_ROLES", roles)
        commit("SET_NAME", name)
        commit("SET_AVATAR", avatar)
        commit("SET_INTRODUCTION", introduction)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  resetToken({commit}) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "")
      commit("SET_ROLES", [])
      removeToken()
      resolve()
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}