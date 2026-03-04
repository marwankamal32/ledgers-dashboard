<template>
    <ChartCard
      title="Revenue vs Expenses"
      caption="Mock data: revenue and expenses per month"
    >
      <Chart
        type="bar"
        :data="chartData"
        :options="chartOptions"
        class="h-[240px]"
      />
    </ChartCard>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import ChartCard from './ChartCard.vue'
  
  const chartData = ref()
  const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false
  })
  
  onMounted(() => {
    chartData.value = {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [
        {
          label: 'Revenue',
          data: [120, 140, 160, 180, 200, 220, 230, 240, 250, 260, 270, 280],
          backgroundColor: 'rgb(59, 130, 246)'
        },
        {
          label: 'Expenses',
          data: [80, 100, 110, 130, 140, 150, 160, 170, 180, 190, 200, 210],
          backgroundColor: 'rgb(244, 114, 182)'
        }
      ]
    }
  })
  </script>