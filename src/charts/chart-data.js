export const planetChartData = {
  type: 'line',
  data: {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      {
        // one line graph
        label: 'Dispositivos inactivos',
        data: [0, 0, 1, 2, 67, 62, 27],
        backgroundColor: [
          'rgba(54,73,93,.5)', // Blue
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
        ],
        borderColor: ['#36495d', '#36495d', '#36495d', '#36495d', '#36495d', '#36495d', '#36495d'],
        borderWidth: 3,
      },
      {
        // another line graph
        label: 'Dispositivos activos',
        data: [4, 12, 12, 6, 139, 116, 50, 49],
        backgroundColor: [
          'rgba(71, 183,132,.5)', // Green
        ],
        borderColor: ['#47b784'],
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25,
          },
        },
      ],
    },
  },
};

export default planetChartData;
