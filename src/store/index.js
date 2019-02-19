import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// Modules
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  namespaced: true,
  plugins: [createPersistedState()],
  modules: { user },
  state: {
    language: 'es',
    drawer: true,
  },
  mutations: {
    openOrCloseDrawer: state => {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    openOrCloseDrawer: context => context.commit('openOrCloseDrawer'),
  },
});
