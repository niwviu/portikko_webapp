<template>
  <v-navigation-drawer
    v-if="isLoggedIn"
    :value="drawer"
    persistent
    enable-resize-watcher
    fixed
    app
  >
    <v-img
      :aspect-ratio="16/9"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    >
      <v-layout
        pa-2
        column
        fill-height
        class="lightbox white--text"
      >
        <v-spacer />
        <v-flex shrink>
          <!-- <div class="subheading">Jonathan Lee</div>
            <div class="body-1">heyfromjonathan@gmail.com</div> -->
          <v-list class="pa-0 profile-link">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="@/assets/images/avatar.png">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title class="subheading">
                  {{ username }}
                </v-list-tile-title>
                <v-list-tile-title class="body-1">
                  {{ user ? user.email : '' }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-img>
    <v-divider />
    <!-- Sidebar links -->
    <v-list dense>
      <v-list-tile
        class="sidebar-link"
        @click="$router.push('/')"
      >
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>
    </v-list>

  </v-navigation-drawer>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['drawer']),
    ...mapState('user', {
      isLoggedIn: 'isLoggedIn',
      user: 'user',
    }),
    username() {
      return `${this.user.name ? this.user.name : ''} ${this.user.surnames ? this.user.surnames : ''}`;
    },
  },
};
</script>
