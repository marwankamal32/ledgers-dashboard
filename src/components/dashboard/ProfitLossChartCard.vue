<template>
  <div class="bg-white p-5 rounded-3xl shadow-sm">
    <h3 class="text-sm font-semibold text-blue-500 mb-3">Profit/Loss</h3>

    <div class="w-full h-[100px] sm:h-[110px] md:h-[120px]">
      <Chart
        type="line"
        :data="chartData"
        :options="chartOptions"
        class="w-full h-full"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { mediumChartPointStyle } from "../../utils/chartOptions";
import {
  createGradientCallback,
  gradientPresets,
} from "../../utils/chartGradients";

const chartData = ref();

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  elements: {
    point: mediumChartPointStyle,
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
});

onMounted(() => {
  chartData.value = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Profit",
        data: [0, 0, 0, 0, 0, 0, 55, 20, 60],
        borderColor: "#FFFFFF",
        backgroundColor: createGradientCallback(gradientPresets.blue),
        fill: true,
        tension: 0.5,
        borderWidth: 2,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#FFFFFF",
      },
      {
        label: "Loss",
        data: [-30, -25, -18, -25, -50, 0, 0, 0, 0],
        borderColor: "#FFFFFF",
        backgroundColor: createGradientCallback(gradientPresets.pink),
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
