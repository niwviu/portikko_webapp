<template>
  <v-layout row>
    <v-flex
      xs12
      sm6
    >
      <canvas id="planet-chart"></canvas>
    </v-flex>
    <v-flex
      xs12
      sm6
    >
      <canvas id="planet-chart2"></canvas>
    </v-flex>
  </v-layout>
</template>
<script>
import Chart from 'chart.js';
import planetChartData from '@/charts/chart-data';

export default {
  data: () => ({
    planetChartData,
  }),
  mounted() {
    this.createChart('planet-chart', this.planetChartData);
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById('planet-chart');
      const ctx2 = document.getElementById('planet-chart2');
      const element = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
      const element2 = new Chart(ctx2, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
      console.log(element);
      console.log(element2);
    },
  },
};
</script>
