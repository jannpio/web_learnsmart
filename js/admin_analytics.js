const ctx = document.getElementById('performanceChart').getContext('2d');
  const performanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['April 1-5', 'April 6-12', 'April 13-19', 'April 20-26', 'April 27-30'],
      datasets: [
        {
          label: 'Completion %',
          data: [32, 48, 28, 35, 60],
          backgroundColor: '#00bfff',
          borderRadius: 6
        },
        {
          type: 'line',
          label: 'Avg. Point',
          data: [20, 35, 30, 40, 45],
          borderColor: '#333',
          fill: false,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: { stepSize: 10 }
        }
      }
    }
});