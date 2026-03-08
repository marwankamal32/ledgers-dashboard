<template>
  <ChartCard :title="title">
    <div class="w-full h-[60px] sm:h-[70px] md:h-[80px]">
      <Chart
        type="line"
        :data="chartData"
        :options="chartOptions"
        class="w-full h-full"
      />
    </div>
  </ChartCard>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ChartCard from "./ChartCard.vue";
import { smallChartPointStyle } from "../../utils/chartOptions";

const props = defineProps({
  title: { type: String, required: true },
  values: { type: Array, default: () => [] },
});

const chartData = ref();

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  elements: {
    point: smallChartPointStyle,
  },
  scales: {
    x: { display: false },
    y: { display: false, beginAtZero: true },
  },
});

onMounted(() => {
  const data = props.values.length
    ? props.values
    : [1650, 1680, 1720, 1690, 1730, 1000, 1800, 1820, 1850, 355, 1900, 1920];

  const labels = props.values.length
    ? Array.from(
        { length: props.values.length },
        (_, i) =>
          [
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
          ][i] || `M${i + 1}`
      )
    : [
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
      ];

  chartData.value = {
    labels,
    datasets: [
      {
        label: props.title,
        data,
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59,130,246,0.15)",
        fill: {
          target: "origin",
          above: "rgba(59,130,246,0.15)",
          below: "rgba(255,90,145,0.15)",
        },
        segment: {
          borderColor: (ctx) => {
            return ctx.p1.parsed.y < 0 ? "#FF5A91" : "#3B82F6";
          },
        },
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };
});
</script>
