<template>
  <Landing v-if="!isLoggedIn" />
  <Dashboard v-else />
</template>

<script>
import { mapState } from 'vuex';
import Landing from '../components/Landing.vue';
import Dashboard from '@/components/authenticated/Dashboard.vue';

export default {
  components: {
    Landing,
    Dashboard,
  },
  computed: {
    ...mapState('user', {
      isLoggedIn: 'isLoggedIn',
    }),
  },
};
</script>
