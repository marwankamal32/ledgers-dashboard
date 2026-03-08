<template>
  <div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
      <KpiCard title="Revenue" value="1,400,000" change="+4%" :positive="true" />
      <KpiCard title="Gross Profit" value="1,250,000" change="+14%" :positive="true" />
      <KpiCard title="Op. Expenses" value="600,000" change="+34%" :positive="true" />
      <KpiCard title="Net Income" value="650,000" change="-25%" :positive="false" />
      <KpiCard title="Cash in Bank" value="1,700,000" change="-25%" :positive="false" />
      <KpiCard title="Burn Rate" value="750,000" change="-15%" :positive="false" />
      <KpiCard
        title="Runway"
        :runway="true"
        left-value="4.1"
        left-label="Gross"
        right-value="6.5"
        right-label="Net"
      />
    </div>
  </div>
</template>

<script setup>
import KpiCard from './KpiCard.vue'
</script>