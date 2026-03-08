<template>
  <div
    class="flex min-h-screen"
    style="background: #D7E3F0"
  >
    <AppSidebar class="hidden md:flex" />
    <div class="flex-1 md:ml-20">
      <AppHeader />
      <main class="p-4 sm:p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import AppSidebar from "./AppSidebar.vue";
import AppHeader from "./AppHeader.vue";
</script>
