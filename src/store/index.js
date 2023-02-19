import { createStore } from 'vuex'
import axios from 'axios';

axios.defaults.baseURL = 'https://vrgo.app:3333';


const store = createStore({
  state: {
    user: null
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user
    }
  },
  mutations: {
    setUser(state, user) {
      console.log(user)
      state.user = user
    }
  },
  actions: {
    async login({commit}, {userName, password}) {
      try {
        const data = await axios.get('/auth/local/signin', {
          email: userName,
          password,
        })
        commit('setUser', data)
      } catch(err) {
        console.log(err)
      }
    },
    registration(_, {userName, password}) {
      axios.post('/auth/local/signup', {
        email: userName,
        password,
      })
    },
    logout() {
      console.log('logout')
    }
  },
})

export default store