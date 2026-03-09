<template>
  <aside class="fixed top-0 left-0 w-20 h-screen bg-white flex flex-col items-center justify-start py-6">
    
    <!-- Logo -->
    <div class="mb-8">
      <img src="/Logo.svg" alt="Logo" class="w-12 h-12" />
    </div>

    <!-- Navigation -->
    <div class="flex-1 flex items-center">
      <ul class="flex flex-col gap-3">
        <li
          v-for="item in sidebarItems"
          :key="item.id"
          class="rounded-full w-12 h-12 flex items-center justify-center cursor-pointer transition"
          :class="activeItem === item.id
            ? 'text-white shadow-md bg-[#4499E3]'
            : 'text-black hover:bg-[#4499E3] hover:text-white'"
          @click="activeItem = item.id"
        >
          <span v-html="item.svg"></span>
        </li>
      </ul>
    </div>

  </aside>
</template>

<script setup>
import { ref } from 'vue'

const activeItem = ref('dashboard')

const sidebarItems = [
  {
    id: 'dashboard',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
      <path d="M3 13h8V3H3v10Zm10 8h8V3h-8v18ZM3 21h8v-6H3v6Z"/>
    </svg>`
  },
  {
    id: 'database',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
      <path d="M12 2C7 2 3 3.79 3 6v12c0 2.21 4 4 9 4s9-1.79 9-4V6c0-2.21-4-4-9-4Zm0 2c4.42 0 7 .99 7 2s-2.58 2-7 2-7-.99-7-2 2.58-2 7-2Zm0 16c-4.42 0-7-.99-7-2v-2c1.68 1.13 4.56 1.75 7 1.75s5.32-.62 7-1.75v2c0 1.01-2.58 2-7 2Zm0-6c-4.42 0-7-.99-7-2V10c1.68 1.13 4.56 1.75 7 1.75s5.32-.62 7-1.75v2c0 1.01-2.58 2-7 2Z"/>
    </svg>`
  },
  {
    id: 'support',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
      <path d="M12 2a8 8 0 0 0-8 8v5a3 3 0 0 0 3 3h2v-8H6v-1a6 6 0 0 1 12 0v1h-3v8h2a3 3 0 0 0 3-3v-5a8 8 0 0 0-8-8Z"/>
    </svg>`
  },
  {
    id: 'settings',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
      <path d="M19.14 12.94a7.97 7.97 0 0 0 .06-.94 7.97 7.97 0 0 0-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.65l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.14 7.14 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.58.23-1.12.54-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.83a.5.5 0 0 0 .12.65l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.12.65l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.5.4 1.05.73 1.63.94l.36 2.54a.5.5 0 0 0 .5.42h3.84a.5.5 0 0 0 .5-.42l.36-2.54c.58-.23 1.12-.54 1.63-.94l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.65l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z"/>
    </svg>`
  }
]
</script>