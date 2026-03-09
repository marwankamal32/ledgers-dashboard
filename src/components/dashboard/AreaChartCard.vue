<template>
  <ChartCard :title="title" :caption="caption">
    <div class="w-full min-w-0 overflow-hidden relative h-[200px] sm:h-[220px] md:h-[200px] xl:h-[250px]">
      <Chart
        type="line"
        :data="chartData"
        :options="chartOptions"
        class="!w-full !h-full !max-w-full block"
      />
    </div>
  </ChartCard>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ChartCard from "./ChartCard.vue";
import { defaultChartOptions, mediumChartPointStyle } from "../../utils/chartOptions";
import { createGradientCallback, gradientPresets } from "../../utils/chartGradients";

const props = defineProps({
  title: { type: String, required: true },
  caption: { type: String, default: "" },
});

const chartData = ref();
const chartOptions = ref({
  ...defaultChartOptions,
  layout: {
    padding: 0,
  },
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
  elements: {
    point: mediumChartPointStyle
  },
  scales: {
    ...defaultChartOptions.scales,
    y: {
      ...defaultChartOptions.scales.y,
      beginAtZero: true,
      display: false,
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
        label: "Outflow",
        data: [200, 100, 300, 200, 400, 350, 400, 450, 350, 400, 450, 500],
        borderColor: "#FFFFFF",
        backgroundColor: createGradientCallback(gradientPresets.pink),
        fill: true,
        tension: 0.5,
        borderWidth: 2,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#FFFFFF",
      },
      {
        label: "Inflow",
        data: [500, 400, 600, 500, 700, 650, 700, 750, 650, 700, 750, 800],
        borderColor: "#FFFFFF",
        backgroundColor: createGradientCallback(gradientPresets.blue),
        fill: true,
        tension: 0.5,
        borderWidth: 2,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#FFFFFF",
      },
    ],
  };
});
</script>
