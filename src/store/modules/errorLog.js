const state = {
  log: []
}

const mutations = {
  ADD_ERROR_LOG: (state, log) => {
    state.logs.push(log)
  },
  CLEAR_ERROR_LOG: (state) => {
    state.splice(0)
  }
}

const actions = {
  addErrorLog({ commit }, log) {
    commit("ADD_ERROR_LOG", log)
  },
  clearErrorLog({ commit }) {
    commit("CLEAR_ERROR_LOG")
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}