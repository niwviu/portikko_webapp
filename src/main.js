import Vue from 'vue';
import axios from 'axios';
import vuetifyToast from 'vuetify-toast';
import VueAxios from 'vue-axios';
import VeeValidate, { Validator } from 'vee-validate';
import VueMoment from 'vue-moment';
import es from 'vee-validate/dist/locale/es';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import Authentication from './packages/authentication';
import './stylus/main.styl';

Vue.use(VeeValidate, { locale: 'es', dictionary: { es } });
Validator.localize('es');
Vue.use(VueAxios, axios);
Vue.use(vuetifyToast);
Vue.use(VueMoment);
Vue.use(Authentication);

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VUE_APP_API_URI;

// Request interceptor
axios.interceptors.request.use(
  config => {
    const expiration = localStorage.getItem('expiration');
    if (Vue.authentication.isLoggedIn()) {
      config.headers.Authorization = `Bearer ${Vue.authentication.getToken()}`;
      return config;
    }
    if (Date.now() > parseInt(expiration, 10)) {
      return router.push('/login');
    }
    return config;
  },
  error => Promise.reject(error),
);

// Response interceptor
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 500) {
      const message = store.state.language === 'es'
        ? 'Ha ocurrido un error. Por favor reportelo a support@portikko.com'
        : 'Something went wrong. Please report this issue at support@portikko.com';
      vuetifyToast.show({
        text: message,
        icon: 'error',
        color: 'error',
        timeout: 8000,
        dismissible: true,
      });
    } else if (error.response.status === 400) {
      if (error.response.data.error[store.state.language]) {
        vuetifyToast.show({
          text: error.response.data.error[store.state.language],
          icon: 'error',
          color: 'error',
          timeout: 8000,
          dismissible: true,
        });
      }
    }
    return Promise.reject(error);
  },
);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
