<template>
    <div class="bg-white rounded-3xl shadow-sm p-5">
      <h3 class="text-sm font-semibold text-gray-800">
        {{ title }}
      </h3>
  
      <div class="mt-4 min-h-[200px]">
        <slot />
      </div>
  
      <p v-if="caption" class="text-xs text-gray-400 mt-2">
        {{ caption }}
      </p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: { type: String, required: true },
    caption: { type: String, default: '' }
  })
  </script>