<template>
  <ChartCard title="Goal Completion">
    <div class="w-full flex min-w-0">
      <Chart
        type="bar"
        :data="chartData"
        :options="chartOptions"
        class="w-full h-[115px]"
      />
    </div>
  </ChartCard>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ChartCard from "./ChartCard.vue";
import { horizontalBarChartOptions } from "../../utils/chartOptions";

const chartData = ref();
const chartOptions = ref({
  ...horizontalBarChartOptions,
  plugins: {
    legend: { display: false },
  },
  scales: {
    ...horizontalBarChartOptions.scales,
    x: { display: false },
  },
  responsive: true,
  maintainAspectRatio: false,
});

onMounted(() => {
  chartData.value = {
    labels: ["Rev", "OpEx"],
    datasets: [
      {
        label: "Pink Part",
        data: [20, 10],
        backgroundColor: "#FF5A91",
        borderRadius: 50,
        barThickness: 38,
        stack: "Stack 0",
        borderWidth: 0,
      },
      {
        label: "Blue Part",
        data: [80, 60],
        backgroundColor: "#0B86DF",
        borderRadius: 50,
        barThickness: 38,
        stack: "Stack 0",
        borderWidth: 0,
      },
    ],
  };
});
</script>
