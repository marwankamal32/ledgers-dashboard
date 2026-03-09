<template>
  <div
    class="flex min-h-screen w-full min-w-0 overflow-x-hidden"
    style="background: #D7E3F0"
  >
    <AppSidebar class="hidden md:flex shrink-0" />
    <div class="flex-1 min-w-0 w-full md:ml-20 flex flex-col overflow-x-hidden">
      <AppHeader />
      <main class="p-3 sm:p-4 md:p-6 min-w-0 flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import AppSidebar from "./AppSidebar.vue";
import AppHeader from "./AppHeader.vue";
</script>
