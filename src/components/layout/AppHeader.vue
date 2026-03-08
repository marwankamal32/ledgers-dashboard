<template>
  <div>
    <!-- Header -->
    <header
      class="h-16 flex justify-start items-center px-6 w-5/6 ms-auto gap-x-6"
    >
      <div class="first-section flex ml-20">
        <div
          class="rounded-full w-10 h-10 bg-white shadow-md text-blue-500 flex items-center justify-center me-2"
        >
          <i class="pi pi-objects-column"></i>
        </div>

        <ul class="rounded-full bg-white shadow-md flex items-center">
          <li
            v-for="tab in tabs"
            :key="tab.id"
            class="inline-block uppercase w-[100px] text-center me-2 p-2 px-3 rounded-full cursor-pointer last:me-0"
            :class="activeTab === tab.id ? 'bg-blue-500 text-white' : ''"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </li>
        </ul>
      </div>

      <div class="flex items-center ml-40">
        <div
          class="bg-white text-center w-[100px] py-2 shadow-md me-3 rounded-full"
        >
          {{ formattedDate }}
        </div>
        <div
          class="rounded-full w-10 h-10 text-white shadow-md bg-blue-500 flex items-center justify-center me-2"
        >
          <i class="pi pi-bars"></i>
        </div>
      </div>

      <ul
        class="bg-blue-500 rounded-b-3xl shadow-md flex items-center gap-3 -translate-y-px p-4"
      >
        <li
          v-for="action in headerActions"
          :key="action.icon"
          class="bg-blue-600 text-white rounded-full p-3 shadow-sm w-10 h-10 flex items-center justify-center cursor-pointer"
          :title="action.title"
        >
          <i :class="['pi', action.icon]"></i>
        </li>
      </ul>
    </header>

    <!-- Brand Section -->
    <div class="px-6 mb-24">
      <h1 class="text-xl sm:text-2xl text-gray-800">
        <span class="font-normal">The </span>
        <span class="font-bold">Essentials.</span>
      </h1>

      <p class="text-xs sm:text-sm text-blue-400">
        Make the leap your business is positioning today
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const activeTab = ref("finance");

const tabs = [
  { id: "finance", label: "finance" },
  { id: "sale", label: "sale" },
  { id: "hr", label: "hr" },
  { id: "mgmt", label: "mgmt" },
];

const formattedDate = computed(() => {
  const d = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[d.getMonth()]} ${d.getDate()}`;
});

const headerActions = [
  { icon: "pi-bell", title: "Notifications" },
  { icon: "pi-slack", title: "slack" },
  { icon: "pi-language", title: "Language" },
  { icon: "pi-info", title: "Info" },
];
</script>
