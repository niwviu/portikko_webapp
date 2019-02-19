<template>
  <div>
    <v-toolbar
      app
      dark
      color="accent"
    >
      <v-toolbar-side-icon
        v-if="isLoggedIn"
        @click="$store.dispatch('openOrCloseDrawer')"
      ></v-toolbar-side-icon>
      <v-toolbar-title
        class="text-uppercase"
        @click="$router.push('/')"
      >
        <span>Portikko</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!isLoggedIn">
        <v-btn
          flat
          router
          v-for="link in links"
          :to="link.path"
          :key="link.text[language]"
        >
          {{ link.text[language] }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-menu
          offset-y
          bottom
          left
          transition="scale-transition"
        >
          <v-btn
            slot="activator"
            flat
            icon
            dark
          >
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-title>
                <v-icon>face</v-icon>
                {{ language === 'en' ? 'Profile' : 'Perfil' }}
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title @click="closeSession">
                <v-icon>power_settings_new</v-icon>
                {{ language === 'en' ? 'Logout' : 'Cerrar sesión' }}
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>

  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    links: [
      { text: { en: 'Register', es: 'Registrarse' }, path: '/register' },
      { text: { en: 'Login', es: 'Entrar' }, path: '/login' },
    ],
  }),
  computed: {
    ...mapState(['language']),
    ...mapState('user', {
      isLoggedIn: 'isLoggedIn',
    }),
  },
  methods: {
    ...mapActions('user', {
      logout: 'logout',
    }),
    closeSession() {
      this.logout();
      this.$router.push('/');
    },
  },
};
</script>
