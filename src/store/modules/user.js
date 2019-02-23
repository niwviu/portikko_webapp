export default {
  strict: true,
  namespaced: true,
  state: {
    isLoggedIn: false,
    user: null,
  },
  getters: {},
  mutations: {
    login: state => {
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
      // Unset user
      state.user = null;
      localStorage.removeItem('vuex');
      localStorage.clear();
    },
    setUser: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    login: context => context.commit('login'),
    logout: context => context.commit('logout'),
    setUser: (context, user) => context.commit('setUser', user),
  },
};
