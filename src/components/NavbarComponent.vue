<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import logo from '@clubcapra/assets/media/Capra_Cercle_Full.png';

const isOpen = ref(false);

const navbarItems = [
  {
    name: 'page_home',
    link: '/',
    selected: false,
  },
  {
    name: 'page_members',
    link: '/members',
    selected: false,
  },
  {
    name: 'page_team',
    link: '/team',
    selected: false,
  },
  {
    name: 'page_partners',
    link: '/partners',
    selected: false,
  },
  {
    name: 'page_publications',
    link: '/publications',
    selected: false,
  },
  {
    name: 'page_join',
    link: '/join',
    selected: false,
  },
];

// Hide navbar until scroll
onBeforeMount(() => {
  // Hide navbar on home page until scroll

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.location.pathname === '/') {
        if (window.scrollY > 100) {
          navbar.classList.add('bg-white');
          navbar.classList.remove('hidden');
        }
      }
    }
  });

  // Check which page we are on
  for (const item of navbarItems) {
    if (window.location.pathname === item.link) {
      item.selected = true;
    }
  }
});

onMounted(() => {
  if (window.location.pathname !== '/') {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.classList.add('bg-white');
      navbar.classList.remove('hidden');
    }
  }
});

// Set locale on select change
const onLocaleChange = (event: Event) => {
  window.localStorage.setItem(
    'locale',
    (event.target as HTMLSelectElement).value
  );
};
</script>

<template>
  <nav
    id="navbar"
    class="fixed w-full top-0 z-50 shadow hidden animate-fade animate-duration-150"
  >
    <div class="container px-4 py-3 mx-auto">
      <div class="md:flex justify-between items-center">
        <!-- left section -->
        <div class="flex justify-between items-center">
          <a href="/" class="text-xl font-bold md:text-2xl">
            <img :src="logo" alt="logo" class="h-8 w-8 md:h-12 md:w-12" />
          </a>
          <div class="md:hidden flex items-center">
            <button
              type="button"
              class="text-gray-500 hover:text-primary-700 focus:text-gray-600 focus:outline-none"
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
            class="block md:inline-block px-2 py-1 text-gray-800 hover:text-primary-700 md:px-4 md:py-2 md:text-lg"
            :class="item.selected ? 'text-primary-700' : ''"
          >
            {{ $t(item.name) }}
          </a>
          <select
            v-model="$i18n.locale"
            type="button"
            class="text-gray-500 hover:text-primary-700 focus:text-gray-600 focus:outline-none pr-2"
            @change="onLocaleChange"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>
