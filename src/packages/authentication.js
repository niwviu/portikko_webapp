import store from '../store';

export default function (Vue) {
  const vue = Vue;
  vue.auth = {
    getToken() {
      const token = localStorage.getItem('token');
      const expiration = localStorage.getItem('expiration');

      if (!token || !expiration) {
        this.destroyToken();
        return null;
      }

      if (Date.now() > parseInt(expiration, 10)) {
        this.destroyToken();
        return null;
      }

      return token;
    },
    setToken(token, expiration) {
      localStorage.setItem('token', token);
      localStorage.setItem('expiration', expiration);
    },
    destroyToken() {
      store.dispatch('user/logout', null, { root: true });
    },
    isLoggedIn() {
      if (this.getToken()) {
        return true;
      }
      return false;
    },
  };
  Object.defineProperties(Vue.prototype, {
    $authentication: {
      get: () => Vue.auth,
    },
  });
}
