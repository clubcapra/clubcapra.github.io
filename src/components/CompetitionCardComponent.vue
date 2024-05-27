<script setup lang="ts">
import { ref } from 'vue';
defineProps<{
  /** Image source */
  image: string;
  /** Title */
  title: string;
  /** Location */
  city: string;
  country: string;
  /** Tasks */
  tasks: string[];
  /** Link */
  link?: string;
}>();

const isHovering = ref(false);
</script>

<template>
  <div
    class="bg-black flex flex-col md:flex-row rounded-lg md:h-96 h-[40rem] shadow-md"
  >
    <img
      :src="image"
      alt="competition"
      class="md:rounded-r-none rounded-b-none rounded-t-lg md:rounded-l-lg h-1/2 object-cover md:h-full md:w-1/2"
    />
    <div class="flex flex-col md:w-1/2 md:h-full md:py-10">
      <div class="flex flex-col p-4">
        <h2 class="text-white text-2xl font-bold">{{ title }}</h2>
        <h5 class="text-white text-lg font-medium">
          {{ $t(city) }}, {{ $t(country) }}
        </h5>
      </div>
      <div class="p-4">
        <p class="text-white font-bold text-lg pb-2">
          {{ $t('notable_tasks_title') }}:
        </p>
        <ul class="list-inside text-white">
          <li v-for="task in tasks" :key="task">
            {{ $t(task) }}
          </li>
        </ul>
      </div>

      <a
        v-if="link"
        id="learn-more"
        :href="link"
        class="text-white font-medium text-lg rounded-full m-4 hover:cursor-pointer inline-flex items-center hover:no-underline underline"
        target="_blank"
        @mouseover="isHovering = true"
        @mouseleave="isHovering = false"
      >
        {{ $t('learn_more') }}
        <!-- Animated horizontal arrow on hover next to link -->
        <svg
          id="arrow"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white animate-fade animate-duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          :style="isHovering ? 'display: inline-block' : 'display: none'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
