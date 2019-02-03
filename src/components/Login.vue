<template>
  <div
    id="top"
    class="full-image"
  >
    <div class="text-vertical-center">
      <v-container>
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card
              class="elevation-12"
              style="background-color: rgba(255,255,255, 0.9)"
            >
              <v-toolbar
                dark
                color="accent"
              >
                <v-toolbar-title>{{ title[language] }}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <form>
                  <v-text-field :label="emailLabel[language]"></v-text-field>
                  <v-text-field :label="passwordLabel[language]"></v-text-field>
                  <v-btn
                    block
                    class="accent"
                  >
                    {{buttonText[language]}}
                  </v-btn>
                </form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    title: { en: 'Login form', es: 'Entrar al sistema' },
    buttonText: { en: 'Login', es: 'Entrar' },
    emailLabel: { en: 'Email', es: 'Correo electrónico' },
    passwordLabel: { en: 'Password', es: 'Contraseña' },
  }),
  computed: {
    ...mapState(['language']),
  },
};
</script>

<style lang="scss" scoped>
.full-image {
  display: table;
  position: relative;
  @include full-image("../assets/images/signin.png");
}
</style>
