<template>
  <div class="bg-white rounded-3xl shadow-sm" :class="noPadding ? '' : 'p-5'">
    <div class="flex items-center justify-between mb-3">
      <h3 class="text-sm font-semibold text-gray-800">
        {{ title }}
      </h3>
      <i
        v-if="showDropdown"
        class="pi pi-chevron-down text-xs text-gray-400"
      ></i>
    </div>

    <div :class="minHeight">
      <slot />
    </div>

    <p v-if="caption" class="text-xs text-gray-500 mt-2">
      {{ caption }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  caption: { type: String, default: "" },
  showDropdown: { type: Boolean, default: false },
  noPadding: { type: Boolean, default: false },
  minHeight: {
    type: String,
    default: "min-h-[60px] sm:min-h-[70px] md:min-h-[80px]",
  },
});
</script>
