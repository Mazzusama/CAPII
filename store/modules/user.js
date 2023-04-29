import axios from 'axios'

const state = {
  user: null,
  token: localStorage.getItem('access_token'),
  isAuthenticated: false,
}

const mutations = {
  setUser(state, user) {
    state.user = user;
    state.isAuthenticated = true;
  },
  setToken(state, token) {
    state.token = token
  },
}

const getters = {
  isAuthenticated(state) {
    return state.token !== null;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const response = await axios.post('https://ejohncarlsrizz.pythonanywhere.com/auth/login/', { email, password })
        const access_token = response.data.access_token
        const user = response.data.user

        commit('setUser', user)
        commit('setToken', access_token)
       
        localStorage.setItem('access_token', access_token)
        
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
      } catch (error) {
        console.error(error)
      }
    },
    logout({ commit }) {
      commit('setUser', null)
      commit('setToken', null)
      localStorage.removeItem('access_token')
      delete axios.defaults.headers.common['Authorization']
    }
  }
}