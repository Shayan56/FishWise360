// Fish Catch by Location Line Chart
const ctx1 = document.getElementById('fishCatchByLocation').getContext('2d');
const fishCatchByLocation = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Gujarat', 'Karnataka', 'Maharashtra', 'Tamil Nadu'],
    datasets: [
      {
        label: 'Catch Weight (kg)',
        data: [500, 600, 450, 700],
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
        fill: true,
        tension: 0.4
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Fish Catch by Location (kg)',
        color: '#333',
        font: {
          size: 18,
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          borderDash: [5, 5]
        }
      }
    }
  }
});

// Fish Catch by Species Bar Chart
const ctx2 = document.getElementById('fishCatchBySpecies').getContext('2d');
const fishCatchBySpecies = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Tuna', 'Sardine', 'Mackerel', 'Pomfret'],
    datasets: [
      {
        label: 'Catch Weight (kg)',
        data: [62, 46.5, 39.89, 63.21],
        backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#e74c3c']
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Fish Catch by Species',
        color: '#333',
        font: {
          size: 18,
        }
      }
    }
  }
});

// Fish Species Pie Chart
const ctx3 = document.getElementById('fishSpeciesPie').getContext('2d');
const fishSpeciesPie = new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: ['Tuna', 'Sardine', 'Mackerel', 'Pomfret'],
    datasets: [{
      label: 'Abundance',
      data: [500, 600, 450, 700],
      backgroundColor: ['#f1c40f', '#e67e22', '#e74c3c', '#2ecc71']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#333',
          font: {
            size: 14
          }
        }
      }
    }
  }
}

);
