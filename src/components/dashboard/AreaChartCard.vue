<template>
    <ChartCard :title="title" :caption="caption">
      <Chart
        type="line"
        :data="chartData"
        :options="chartOptions"
        class="h-[220px]"
      />
    </ChartCard>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import ChartCard from './ChartCard.vue'
  
  const props = defineProps({
    title: { type: String, required: true },
    caption: { type: String, default: '' }
  })
  
  const chartData = ref()
  const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true }
    }
  })
  
  onMounted(() => {
    chartData.value = {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'],
      datasets: [
        {
          label: 'Inflow',
          data: [40, 60, 80, 70, 90, 110, 100, 120, 140, 130],
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          fill: true,
          tension: 0.3
        },
        {
          label: 'Outflow',
          data: [30, 45, 60, 80, 70, 85, 95, 100, 110, 115],
          borderColor: 'rgb(244, 114, 182)',
          backgroundColor: 'rgba(244, 114, 182, 0.2)',
          fill: true,
          tension: 0.3
        }
      ]
    }
  })
  </script>