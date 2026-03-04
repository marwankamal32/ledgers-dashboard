<template>
    <ChartCard title="Goal Completion">
      <Chart
        type="bar"
        :data="chartData"
        :options="chartOptions"
        class="h-[140px]"
      />
    </ChartCard>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import ChartCard from './ChartCard.vue'
  
  const chartData = ref()
  const chartOptions = ref({
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { max: 100, beginAtZero: true }
    }
  })
  
  onMounted(() => {
    chartData.value = {
      labels: ['Rev', 'OpEx'],
      datasets: [
        {
          label: 'Completion %',
          data: [88, 62],
          backgroundColor: ['rgb(59, 130, 246)', 'rgb(244, 114, 182)']
        }
      ]
    }
  })
  </script>