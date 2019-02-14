export default function (Vue) {
  const vue = Vue;
  vue.auth = {
    getToken() {
      // TODO: Add token expiration
      const token = localStorage.getItem('token');

      if (!token) {
        this.destroyToken();
        return null;
      }

      // TODO: Validate token expiration

      return token;
    },
    setToken(token) {
      localStorage.setItem('token', token);
      // TODO: Set token expiration
    },
    destroyToken() {},
    isLoggedIn() {
      if (this.getToken()) {
        return true;
      }
      return false;
    },
  };
  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => Vue.auth,
    },
  });
}
