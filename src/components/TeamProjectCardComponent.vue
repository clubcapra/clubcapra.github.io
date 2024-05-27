<script setup lang="ts">
defineProps<{
  /** Image source */
  icon: string;
  /** Title */
  title: string;
  /** Description */
  tasks: string[];
}>();
</script>

<template>
  <div
    class="flex flex-col items-center rounded-lg shadow-sm px-4 py-8 gap-8 border-2 border-gray-200"
  >
    <img :src="icon" alt="code" class="h-16 w-16" />
    <div class="flex flex-col gap-2">
      <h3 class="font-bold font-sans text-2xl md:text-3xl">
        {{ title }}
      </h3>
      <ul class="list-[square] list-inside">
        <li v-for="task in tasks" :key="task" class="pt-2">
          {{ task }}
        </li>
      </ul>
    </div>
  </div>
</template>
