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
    title: 'page_home',
    icon: 'mdi-home',
    to: { name: 'home' },
  },
  {
    title: 'page_robots',
    icon: 'mdi-robot',
    to: { name: 'robots' },
  },
  {
    title: 'page_team',
    icon: 'mdi-account-group',
    to: { name: 'team' },
  },
  {
    title: 'page_competitions',
    icon: 'mdi-trophy',
    to: { name: 'competition' },
  },
  {
    title: 'page_partners',
    icon: 'mdi-handshake',
    to: { name: 'partners' },
  },
  {
    title: 'page_ressources',
    icon: 'mdi-file-document',
    to: { name: 'ressources' },
  },
  {
    title: 'page_contact',
    icon: 'mdi-email',
    to: { name: 'contact' },
  },
];

const languages = [
  {
    title: 'FR',
    value: 'fr',
  },
  {
    title: 'EN',
    value: 'en',
  },
];
</script>

<template>
  <div class="d-flex d-md-none">
    <v-navigation-drawer v-model="drawer" temporary>
      <DrawerComponent :items="pages" />
    </v-navigation-drawer>
  </div>
  <v-app-bar density="compact" color="red">
    <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = !drawer" />

    <v-spacer style="padding: 2px" class="pa-md-15">
      <v-img
        :src="capraLogoWhite"
        alt="Capra Logo"
        max-height="128"
        max-width="128"
        min-width="128"
      />
    </v-spacer>

    <v-list-item
      v-for="(page, i) in pages"
      :key="i"
      class="d-none d-md-flex"
      :to="page.to"
      density="compact"
      :title="t(page.title)"
    />
    <v-select
      v-model="$i18n.locale"
      style="padding-left: 4px; height: 38px"
      class="d-flex"
      density="compact"
      variant="outlined"
      :items="languages"
      :item-props="itemProps"
    />
  </v-app-bar>
</template>
