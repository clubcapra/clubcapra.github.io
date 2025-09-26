<script setup lang="ts">
import { onBeforeMount, ref, onMounted } from 'vue';
import i18n from '@clubcapra/plugins/i18n';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
    name: 'page_next_competition',
    link: '/next-competition',
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
const languages = [
  {
    name: 'EN',
    code: 'en',
  },
  {
    name: 'FR',
    code: 'fr',
  },
];

let langIndex = languages.findIndex(
  lang => lang.code === i18n.global.locale.value
);

// Hide navbar until scroll
onBeforeMount(() => {
  // Check which page we are on
  for (const item of navbarItems) {
    if (window.location.pathname === item.link) {
      item.selected = true;
    }
  }
});

onMounted(() => {
  if (window.location.pathname === '/dashboard') {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.classList.remove('bg-white');
      navbar.classList.add('hidden');
    }
  }
});

// Set locale on select change
const onLocaleChange = () => {
  langIndex = (langIndex + 1) % languages.length;
  changeLanguage(languages[langIndex].code);
};

/**
 *
 */
function changeLanguage(newLang: string) {
  window.localStorage.setItem('locale', newLang);
  i18n.global.locale.value = newLang as typeof i18n.global.locale.value;
}
</script>

<template>
  <nav
    id="navbar"
    class="fixed w-full top-0 z-50 shadow bg-white animate-fade animate-duration-150"
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

          <button
            :aria-label="$t('language')"
            type="button"
            class="block md:inline-block px-2 py-1 text-gray-800 hover:text-primary-700 md:px-4 md:py-2 md:text-lg"
            @click="onLocaleChange"
          >
            <FontAwesomeIcon :icon="faEarthAmerica" class="w-6" />
            {{ languages[langIndex].name }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
