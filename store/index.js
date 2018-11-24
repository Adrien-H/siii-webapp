// import Vuex from 'vuex'

// const createStore = () => {
//   return new Vuex.Store({
//     state: () => ({
//       counter: 0
//     }),
//     mutations: {
//       increment (state) {
//         state.counter++
//       }
//     }
//   })
// }
//
// export default createStore

export const getters = {
  isAuthenticated (state) {
    return state.auth.loggedIn
  },

  user (state) {
    return state.auth.user
  }
}
