<template>
  <!-- ================= MIDDLE COLUMN (3 cols) ================= -->
  <div class="col-span-12 lg:col-span-3 space-y-4">
    <AreaChartCard title="Profit/Loss" />

    <GoalCompletionCard />

    <LineChartCard title="Cash In Bank" />

    <LineChartCard
      title="NetFlow"
      :values="[300, 280, 260, 250, 240, 230, 220, 210]"
    />
  </div>
</template>

<script setup>
import AreaChartCard from './AreaChartCard.vue'
import GoalCompletionCard from './GoalCompletionCard.vue'
import LineChartCard from './LineChartCard.vue'
</script>