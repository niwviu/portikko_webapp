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
                <form @submit.prevent="register">
                  <v-text-field
                    v-model="user.name"
                    :label="nameLabel[language]"
                  ></v-text-field>
                  <v-text-field
                    v-model="user.email"
                    v-validate="'required|email'"
                    :error-messages="errors.collect('email')"
                    data-vv-name="email"
                    :label="emailLabel[language]"
                  ></v-text-field>
                  <v-text-field
                    ref="password"
                    v-model="user.password"
                    v-validate="'required|min:6'"
                    data-vv-name="password"
                    type="password"
                    :error-messages="errors.collect('password')"
                    :label="passwordLabel[language]"
                  ></v-text-field>
                  <v-text-field
                    v-model="confirmedPassword"
                    data-vv-name="confirmed"
                    type="password"
                    v-validate="'required|min:6|confirmed:password'"
                    :error-messages="errors.collect('confirmed')"
                    :label="passwordConfirmedLabel[language]"
                  ></v-text-field>
                  <v-btn
                    block
                    class="accent"
                    type="submit"
                    :disabled="formSent"
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
    user: {
      email: '', name: '', password: '',
    },
    confirmedPassword: '',
    postErrorMessage: { en: 'User already exists.', es: 'El correo electrónico ya ha sido registrado.' },
    formSent: false,
  }),
  computed: {
    ...mapState(['language']),
  },
  methods: {
    register() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.formSent = true;
          this.axios.post(`${process.env.VUE_APP_API_URI}/api/register`, this.user).then(response => {
            if (response.data) {
              // TODO: Show success message and redirect to login.
              this.formSent = false;
            }
          }).catch(error => {
            if (error.response) {
              this.formSent = false;
            }
          });
        }
      });
    },
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
