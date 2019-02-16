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
      localStorage.removeItem('vuex');
      localStorage.clear();
    },
  },
  actions: {
    login: context => context.commit('login'),
    logout: context => context.commit('logout'),
  },
};
