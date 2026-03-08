<template>
  <ChartCard
    title="Revenue vs Expenses"
    caption="Loaded in chart and seasonally + monitoring tighter"
    :show-dropdown="true"
  >
    <div class="w-full min- flex">
      <Chart
        type="bar"
        :data="chartData"
        :options="chartOptions"
        class="flex-1 h-[220px] sm:h-[260px] md:h-[300px] xl:h-[300px]"
      />
    </div>
  </ChartCard>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ChartCard from "./ChartCard.vue";
import { defaultChartOptions } from "../../utils/chartOptions";

const chartData = ref();
const chartOptions = ref({
  ...defaultChartOptions,
  plugins: {
    ...defaultChartOptions.plugins,
    legend: {
      display: false,
      labels: {
        ...defaultChartOptions.plugins.legend.labels,
        padding: 15,
        font: {
          size: 11,
        },
      },
    },
  },
});

onMounted(() => {
  chartData.value = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [320, 580, 650, 320, 200, 350, 220, 280, 720, 850, 700, 820],
        backgroundColor: "#0B86DF",
        borderRadius: 12,
        barThickness: 16,
      },
      {
        label: "Expenses",
        data: [450, 420, 850, 880, 560, 620, 580, 700, 600, 640, 250, 620],
        backgroundColor: "#FF5A91",
        borderRadius: 12,
        barThickness: 16,
      },
    ],
  };
});
</script>
