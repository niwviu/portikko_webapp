export default {
  strict: true,
  namespaced: true,
  state: {
    isLoggedIn: false,
  },
  getters: {},
  mutations: {
    login: state => {
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login: context => context.dispatch('login'),
    logout: context => context.dispatch('logout'),
  },
};
