<template>
  <div>
    <v-toolbar
      app
      dark
      color="accent"
    >
      <v-toolbar-side-icon v-if="isLoggedIn"></v-toolbar-side-icon>
      <v-toolbar-title
        class="text-uppercase"
        @click="$router.push('/')"
      >
        <span>Portikko</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
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
    </v-toolbar>

  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    loginDialog: true,
    links: [
      { text: { en: 'Register', es: 'Registrarse' }, path: '/register' },
      { text: { en: 'Login', es: 'Entrar' }, path: '/login' },
    ],
  }),
  computed: {
    ...mapState(['language', 'isLoggedIn']),
  },
};
</script>
