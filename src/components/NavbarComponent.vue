<script setup lang="ts">
import capraLogoWhite from '@clubcapra/assets/media/Capra_Logo_White.png';
import type { Ref } from 'vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

// Components
import DrawerComponent from './DrawerComponent.vue';
import type DrawerMenuItem from '@clubcapra/interfaces/DrawerMenuItemInterface';

/** drawer visibility */
const drawer: Ref<boolean> = ref(false);

const { t } = useI18n();
const pages: DrawerMenuItem[] = [
  {
    title: t('page_home'),
    icon: 'mdi-home',
    to: { name: 'home' },
  },
  {
    title: t('page_robots'),
    icon: 'mdi-robot',
    to: { name: 'robots' },
  },
  {
    title: t('page_team'),
    icon: 'mdi-account-group',
    to: { name: 'team' },
  },
  {
    title: t('page_competitions'),
    icon: 'mdi-trophy',
    to: { name: 'competition' },
  },
  {
    title: t('page_partners'),
    icon: 'mdi-handshake',
    to: { name: 'partners' },
  },
  {
    title: t('page_ressources'),
    icon: 'mdi-file-document',
    to: { name: 'ressources' },
  },
  {
    title: t('page_contact'),
    icon: 'mdi-email',
    to: { name: 'contact' },
  },
];

/**
 * Checks if the user is accessing the website from a mobile device.
 * @returns True if the user is accessing the website from a mobile device, false otherwise.
 */
function isMobile() {
  const regex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}
</script>

<template>
  <v-navigation-drawer v-model="drawer">
    <DrawerComponent :items="pages" />
  </v-navigation-drawer>

  <v-app-bar absolute density="compact" color="red">
    <v-app-bar-nav-icon @click="drawer = !drawer" />

    <v-img
      :src="capraLogoWhite"
      alt="Capra Logo"
      max-height="128"
      max-width="128"
    />

    <v-spacer />
    <template v-if="!isMobile()">
      <v-list-item
        v-for="(page, i) in pages"
        :key="i"
        :to="page.to"
        density="compact"
        :title="page.title"
      />
    </template>
  </v-app-bar>
</template>
