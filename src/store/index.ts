import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: true,
    token: localStorage.getItem('token') || 'hello'
  },
  mutations: {//sync
    setLoading(state, value) {
      state.loading = value
    }
  },
  actions: {//async
  },
  modules: {
  },
  getters: {
    routerParams(state) {
      return {
        // fun: this.$route.path.split("/")[1]
      }
    }
  }
})
