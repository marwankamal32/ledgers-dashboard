<template>
  <div>
    <div class="bg-[#4499E3] rounded-3xl p-4 flex flex-col lg:flex-row gap-4 w-full">
      <div class="flex-1">
        <AreaChartCard title="Cash inflow vs outflow" />
      </div>

      <div class="flex flex-col gap-4 w-full lg:w-1/3">
        <LineChartCard title="Cash In Bank" />
        <LineChartCard title="NetFlow" :values="[300, 280, 150, 50, 300, -200, -100, 200, 20, 100, 180]"" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AreaChartCard from './AreaChartCard.vue'
import LineChartCard from './LineChartCard.vue'
</script>