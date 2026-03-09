<template>
  <AppLayout>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-4 gap-y-3 auto-rows-[min-content]">
      <KpiSection class="col-span-12 lg:col-span-7" />
      <RightTuners class="col-span-12 lg:col-span-5 lg:row-span-3" />
      <MiddleCharts class="col-span-12 lg:col-span-7" />
      <LeftCharts class="col-span-12 lg:col-span-7" />
      
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
