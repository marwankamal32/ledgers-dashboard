<template>
  <div>
    <div class="rounded-3xl  flex flex-col lg:flex-row gap-4 w-full">
      <div class="flex-1">
        <BarChartCard />
      </div>

      <div class="flex flex-col gap-4 w-full lg:w-1/3">
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
