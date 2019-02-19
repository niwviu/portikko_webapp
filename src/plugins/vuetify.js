import Vue from 'vue';
import Vuetify, { VSnackbar, VIcon } from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  theme: {
    primary: '#7d5fff',
    secondary: '#a5b1c2',
    accent: '#7158e2',
    error: '#ff3838',
    info: '#0abde3',
    success: '#20bf6b',
    warning: '#ff9f43',
  },
  customProperties: true,
  iconfont: 'mdi',
  components: {
    VSnackbar,
    VIcon,
  },
});
