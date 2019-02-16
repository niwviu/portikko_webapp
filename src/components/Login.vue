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
                <form @submit.prevent="postLogin">
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
import { mapActions, mapState } from 'vuex';
import vuetifyToast from 'vuetify-toast';
import base64 from 'base-64';

export default {
  data: () => ({
    title: { en: 'Login form', es: 'Entrar al sistema' },
    buttonText: { en: 'Login', es: 'Entrar' },
    emailLabel: { en: 'Email', es: 'Correo electrónico' },
    passwordLabel: { en: 'Password', es: 'Contraseña' },
    user: { email: '', password: '' },
    formSent: false,
    errorMessage: { en: 'Please verify your credentials.', es: 'Por favor verifique sus credenciales.' },
  }),
  computed: {
    ...mapState(['language']),
  },
  methods: {
    ...mapActions('user', {
      login: 'login',
    }),
    postLogin() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.formSent = true;

          const body = `username=${this.user.email}&password=${this.user.password}&grant_type=password`;
          const clientCredentials = base64.encode(`${process.env.VUE_APP_CLIENT_ID}:${process.env.VUE_APP_CLIENT_SECRET}`);
          const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${clientCredentials}`,
            },
          };

          this.axios.post(`${process.env.VUE_APP_API_URI}/auth/token`, body, config).then(response => {
            if (response.status === 200) {
              const time = this.$moment().utc().add(response.data.expires_in, 'seconds');
              const expiration = this.$moment(time).toDate().getTime();
              this.$authentication.setToken(response.data.access_token, expiration);
              this.login();
              this.$router.push('/');
            }
          }).catch(error => {
            if (error.response) {
              console.log(error.response);
              this.formSent = false;
              vuetifyToast.show({
                text: this.errorMessage[this.language],
                icon: 'error',
                color: 'error',
                timeout: 4000,
                dismissible: true,
              });
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
  @include full-image("../assets/images/signin.png");
}
</style>
