<template>
    <div class="bg-white rounded-3xl shadow-sm p-3 py-4 w-32 h-32 flex flex-col justify-between">
      <!-- Title (all cards) -->
      <p class="text-xs font-bold text-gray-800">
        {{ title }}
      </p>
  
      <!-- Normal card: one value + change + vs previous month -->
      <template v-if="!runway">
  <div class="flex flex-col gap-0 mt-1">
    <span class="text-xl font-semibold text-gray-900">{{ value }}</span>
    <span
      v-if="change"
      class="text-xs font-medium mt-1 ml-auto"
      :class="positive ? 'text-blue-500' : 'text-rose-500'"
    >
      {{ change }}
    </span>
  </div>
  <p class="text-xs text-gray-400">
    {{ comparisonText }}
  </p>
</template>
  
      <!-- Runway card: two values with labels -->
      <template v-else>
  <div class="flex-1 flex items-center">
    <div class="flex gap-6 w-full">
      <div>
        <span class="text-lg font-semibold text-gray-900">{{ leftValue }}</span>
        <p class="text-xs text-gray-400 mt-1">{{ leftLabel }}</p>
      </div>
      <div>
        <span class="text-lg font-semibold text-gray-900">{{ rightValue }}</span>
        <p class="text-xs text-gray-400 mt-1">{{ rightLabel }}</p>
      </div>
    </div>
  </div>
</template>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: { type: String, required: true },
    value: String,
    change: String,
    positive: Boolean,
    comparisonText: { type: String, default: 'vs previous month' },
    // Runway card
    runway: { type: Boolean, default: false },
    leftValue: String,
    leftLabel: String,
    rightValue: String,
    rightLabel: String
  })
  </script>