import { createStore } from 'vuex'
import UserApi from '../api/user'
import variables from './settings.js'

export default createStore({
  state: {
    theme: variables.theme,
    loading: true,
    login: false,
    token: localStorage.getItem('token'),
    userInfo: {},
    userInfoQuery: false,
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
    },
    setUserInfoQuery(state, value) {
      state.userInfoQuery = value
    }
  },
  actions: {//async
    fetchUserInfo(store, token) {
      store.commit('setUserInfoQuery', true)
      UserApi.userInfo(store.state.token || token || "")
        .then(response => {
          store.commit('setUserInfoQuery', false)
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
