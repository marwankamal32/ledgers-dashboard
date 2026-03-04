<template>
    <ChartCard :title="title">
      <Chart
        type="line"
        :data="chartData"
        :options="chartOptions"
        class="h-[180px]"
      />
    </ChartCard>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import ChartCard from './ChartCard.vue'
  
  const props = defineProps({
    title: { type: String, required: true },
    values: { type: Array, default: () => [] }
  })
  
  const chartData = ref()
  const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    tension: 0.3
  })
  
  onMounted(() => {
    const data = props.values.length
      ? props.values
      : [400, 420, 450, 430, 460, 480, 500, 520]
  
    chartData.value = {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
      datasets: [
        {
          label: props.title,
          data,
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.15)',
          fill: true
        }
      ]
    }
  })
  </script>