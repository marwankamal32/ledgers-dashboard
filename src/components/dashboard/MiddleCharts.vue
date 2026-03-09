<template>
  <div>
    <div class="rounded-3xl flex flex-col lg:flex-row gap-4 w-full min-w-0">
      <div class="flex-1 min-w-0">
        <BarChartCard />
      </div>

      <div class="flex flex-col gap-4 w-full min-w-0 lg:w-1/3">
        <ProfitLossChartCard />
        <GoalCompletionCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfitLossChartCard from "./ProfitLossChartCard.vue";
import GoalCompletionCard from "./GoalCompletionCard.vue";
import BarChartCard from "./BarChartCard.vue";
</script>
