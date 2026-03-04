<template>
  <AppLayout>
    <div class="grid grid-cols-12 gap-4">
      <KpiSection />
      <RightTuners />
      <LeftCharts />
      <MiddleCharts />
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "./components/layout/AppLayout.vue";
import KpiSection from "./components/dashboard/KpiSection.vue";
import LeftCharts from "./components/dashboard/LeftCharts.vue";
import MiddleCharts from "./components/dashboard/MiddleCharts.vue";
import RightTuners from "./components/dashboard/RightTuners.vue";
</script>
