const state = {
  isShow: false
}

const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  showForm (state) {
    state.isShow = true
  },
  hideForm (state) {
    state.isShow = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
