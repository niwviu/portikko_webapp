<template>
  <!-- Header -->
  <div
    id="top"
    class="full-image"
  >
    <div class="text-vertical-center">
      <v-container>
        <h1>{{ title[language] }}</h1>
        <h3>{{ subtitle[language] }}</h3>
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    title: { en: 'Availability report of your meraki network.', es: 'Reporte de disponibilidad de tu red meraki.' },
    subtitle: { en: 'Information retrieved from the meraki cloud.', es: 'Información extraída de la nube de meraki.' },
  }),
  computed: {
    ...mapState(['language']),
  },
};
</script>

<style lang="scss" scoped>
.text-vertical-center h3,
.text-vertical-center h1 {
  color: white;
  margin: 0;
}
.text-vertical-center h1 {
  line-height: 40px;
  font-size: 2.5em;
  margin-bottom: 20px;
}
.text-vertical-center h3 {
  border-radius: 10px;
  font-size: 1.8em;
}
.full-image {
  display: table;
  position: relative;
  @include full-image("../assets/images/bg1.jpg");
}
@media (min-width: 768px) {
  .text-vertical-center h3,
  .text-vertical-center h1 {
    max-width: 600px;
  }
  .text-vertical-center h1 {
    font-size: 3em;
  }
}
</style>
