<template>
  <!-- ================= LEFT COLUMN (5 cols) ================= -->
  <div class="col-span-12 lg:col-span-5 space-y-4">
    <BarChartCard />

    <AreaChartCard title="Cash inflow vs outflow" />
  </div>
</template>

<script setup>
import BarChartCard from './BarChartCard.vue'
import AreaChartCard from './AreaChartCard.vue'
</script>