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
                  <v-text-field :label="nameLabel[language]"></v-text-field>
                  <v-text-field :label="emailLabel[language]"></v-text-field>
                  <v-text-field
                    type="password"
                    :label="passwordLabel[language]"
                  ></v-text-field>
                  <v-text-field
                    type="password"
                    :label="passwordConfirmedLabel[language]"
                  ></v-text-field>
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
    title: { en: 'Registration form', es: 'Formulario de registro' },
    buttonText: { en: 'Register', es: 'Registrarse' },
    nameLabel: { en: 'Name', es: 'Nombre' },
    emailLabel: { en: 'Email', es: 'Correo electrónico' },
    passwordLabel: { en: 'Password', es: 'Contraseña' },
    passwordConfirmedLabel: { en: 'Confirmed password', es: 'Confirmar contraseña' },
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
  @include full-image("../assets/images/signup.png");
}
</style>
