import { createStore } from 'vuex'
import UserApi from '../api/user'
import variables from './settings.js'

export default createStore({
  state: {
    theme: variables.theme,
    loading: true,
    login: false,
    token: localStorage.getItem('token'),
    userInfo: {}
  },
  mutations: {//sync
    setLogin(state, value) {
      state.login = value
    },
    setLoading(state, value) {
      state.loading = value
    },
    setUserInfo(state, value) {
      state.userInfo = value
    }
  },
  actions: {//async
    fetchUserInfo(store, token) {
      UserApi.userInfo(store.state.token || token || "")
        .then(response => {
          if (response.data.data?.phone) {
            store.commit('setLogin', true)
            store.commit('setUserInfo', response.data.data)
          } else {
            store.commit('setLogin', false)
          }
        })
    }
  },
  modules: {
  },
  getters: {
  }
})
