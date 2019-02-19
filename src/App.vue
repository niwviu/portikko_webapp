<template>
  <v-app>
    <Navbar />
    <SideBar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import SideBar from '@/components/authenticated/SideBar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    SideBar,
  },
};
</script>
