<template>
  <div class="w-full min-w-0">
    <!-- Header: stacks on small screens, single row from md up -->
    <header
      class="min-h-16 flex flex-wrap items-center justify-start gap-3 px-3 sm:px-6 w-full max-w-full md:justify-end md:gap-x-6"
    >
      <div
        class="first-section flex items-center gap-2 flex-1 min-w-0 md:ml-20 md:flex-initial"
      >
        <div
          class="shrink-0 rounded-full w-9 h-9 sm:w-10 sm:h-10 bg-white shadow-md text-[#4499E3] flex items-center justify-center"
        >
          <i class="pi pi-objects-column"></i>
        </div>

        <!-- Tabs: horizontal scroll on mobile so they don't break -->
        <div
          class="min-w-0 flex-1 md:flex-initial overflow-x-auto overflow-y-hidden -mx-1 px-1 header-tabs-scroll"
        >
          <ul
            class="rounded-full bg-white shadow-md flex items-center gap-1 w-max py-1 ps-1 pe-2"
          >
            <li
              v-for="tab in tabs"
              :key="tab.id"
              class="shrink-0 uppercase min-w-[70px] sm:min-w-[90px] w-[70px] sm:w-[100px] text-center text-xs sm:text-sm py-2 px-2 rounded-full cursor-pointer"
              :class="activeTab === tab.id ? 'bg-[#4499E3] text-white' : ''"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </li>
          </ul>
        </div>
      </div>

      <div class="flex items-center gap-2 shrink-0 md:ml-40">
        <div
          class="bg-white text-center min-w-[70px] sm:min-w-[100px] w-[70px] sm:w-[100px] py-2 shadow-md rounded-full text-xs sm:text-sm"
        >
          {{ formattedDate }}
        </div>
        <div
          class="rounded-full w-9 h-9 sm:w-10 sm:h-10 text-white shadow-md bg-[#4499E3] flex items-center justify-center"
        >
          <i class="pi pi-bars"></i>
        </div>
      </div>

      <!-- Actions: wrap or scroll on very small -->
      <ul
        class="bg-[#4499E3] sm:rounded-b-3xl shadow-md flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start -translate-y-px p-3 sm:p-4 w-full md:w-auto order-last md:order-none"
      >
        <li
          v-for="action in headerActions"
          :key="action.icon"
          class="bg-[#0B86DF] text-white rounded-full p-2.5 sm:p-3 shadow-sm w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer shrink-0"
          :title="action.title"
        >
          <i :class="['pi', action.icon]"></i>
        </li>
      </ul>
    </header>

    <!-- Brand Section -->
    <div class="px-3 sm:px-6 mb-12 sm:mb-24">
      <h1 class="text-lg sm:text-xl md:text-2xl text-gray-800">
        <span class="font-normal">The </span>
        <span class="font-bold">Essentials.</span>
      </h1>

      <p class="text-xs sm:text-sm text-[#4499E3]">
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
