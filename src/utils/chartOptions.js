/**
 * Shared Chart.js options for dashboard charts.
 * Single source of truth for legend, scales, grid visibility.
 */

export const smallChartPointStyle = {
  radius: 2,
  borderWidth: 1,
  hoverRadius: 4,
  backgroundColor: '#FFFFFF',
  borderColor: '#FFFFFF'
}

export const mediumChartPointStyle = {
  radius: 3,
  borderWidth: 2,
  hoverRadius: 5,
  backgroundColor: '#FFFFFF',
  borderColor: '#FFFFFF'
}

export const defaultChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#374151',
        boxWidth: 14,
        boxHeight: 14,
        usePointStyle: true,
        padding: 15,
        font: {
          size: 11
        }
      }
    }
  },
  scales: {
    x: {
      grid: { 
        display: false,
        drawBorder: false
      },
      ticks: { 
        color: '#9CA3AF',
        padding: 8,
        font: { size: 11 }
      }
    },
    y: {
      beginAtZero: true,
      grace: '5%',
      grid: { 
        display: false,
        drawBorder: false
      },
      ticks: { 
        color: '#9CA3AF',
        padding: 8,
        font: { size: 11 }
      },
      border: { display: false }
    }
  }
}

/**
 * Options for horizontal bar chart (e.g. Goal Completion).
 */
export const horizontalBarChartOptions = {
  ...defaultChartOptions,
  indexAxis: 'y',
  scales: {
    x: {
      max: 100,
      beginAtZero: true,
      grid: { 
        display: false,
        drawBorder: false
      },
      ticks: { 
        color: '#9CA3AF',
        padding: 8,
        font: { size: 11 }
      },
      border: { display: false }
    },
    y: {
      grid: { 
        display: false,
        drawBorder: false
      },
      ticks: { 
        color: '#9CA3AF',
        padding: 8,
        font: { size: 11 }
      },
      border: { display: false }
    }
  }
}
