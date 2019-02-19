<template>
  <v-container
    grid-list-xl
    fluid
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        lg3
        sm6
        xs12
      >
        <mini-statistic
          icon="devices"
          title="100"
          sub-title="Likes"
          color="primary"
        >
        </mini-statistic>
      </v-flex>
      <v-flex
        lg3
        sm6
        xs12
      >
        <mini-statistic
          icon="check"
          title="150"
          sub-title="Connections"
          color="success"
        >
        </mini-statistic>
      </v-flex>
      <v-flex
        lg3
        sm6
        xs12
      >
        <mini-statistic
          icon="close"
          title="200"
          sub-title="Followers"
          color="error"
        >
        </mini-statistic>
      </v-flex>
      <v-flex
        lg3
        sm6
        xs12
      >
        <mini-statistic
          icon="android"
          title="50 %"
          sub-title="Shots"
          color="info"
        >
        </mini-statistic>
      </v-flex>
    </v-layout>
    <Chart />
  </v-container>
</template>
<script>
import MiniStatistic from '@/components/widgets/MiniStatistic.vue';
import Chart from '@/components/authenticated/charts/DashChart.vue';

export default {
  components: {
    'mini-statistic': MiniStatistic,
    Chart,
  },
};
</script>
