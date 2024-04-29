<script setup lang="ts">
import { ref } from 'vue';
import logo from '@clubcapra/assets/media/Capra_Cercle_Full.png';

const isOpen = ref(false);

const navbarItems = [
  {
    name: 'About us',
    link: '#',
  },
  {
    name: 'Team',
    link: '#',
  },
  {
    name: 'Publications',
    link: '#',
  },
];
</script>

<template>
  <nav id="app" class="sticky top-0 z-50 md:backdrop-blur-md bg-white">
    <div class="container px-4 py-3 mx-auto">
      <div class="md:flex justify-between items-center">
        <!-- left section -->
        <div class="flex justify-between items-center">
          <a
            href="#"
            class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl"
          >
            <img :src="logo" alt="logo" class="h-12 w-12" />
          </a>
          <div class="md:hidden">
            <button
              type="button"
              class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
              @click="isOpen = !isOpen"
            >
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                <path
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- right section -->
        <div
          class="flex-col mt-3 md:flex-row md:mt-0 md:flex"
          :class="isOpen ? 'flex' : 'hidden'"
        >
          <a
            v-for="item in navbarItems"
            :key="item.name"
            :href="item.link"
            class="block md:inline-block px-2 py-1 text-gray-800 hover:text-gray-700 md:px-4 md:py-2 md:text-lg"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
