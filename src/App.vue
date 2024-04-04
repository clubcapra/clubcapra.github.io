<script setup lang="ts">
import type { WritableComputedRef } from 'vue';
import { computed, onMounted } from 'vue';
import { useGlobalStore } from './store';

// Components
import FooterComponent from './components/FooterComponent.vue';

// Assets
import favicon16x16 from './assets/favicon-16x16.png';
import favicon32x32 from './assets/favicon-32x32.png';
import appleTouchIcon from './assets/apple-touch-icon.png';
import safariPinnedTab from './assets/safari-pinned-tab.svg';

// Animate on scroll library
import AOS from 'aos';
import 'aos/dist/aos.css';

/** Global Store */
const globalStore = useGlobalStore();

/** loading overlay visibility */
const loading: WritableComputedRef<boolean> = computed({
  get: () => globalStore.loading,
  set: v => globalStore.setLoading(v),
});

onMounted(() => {
  loading.value = false;
  AOS.init();
});
</script>

<template>
  <teleport to="head">
    <link rel="apple-touch-icon" sizes="152x152" :href="appleTouchIcon" />
    <link rel="icon" type="image/png" sizes="32x32" :href="favicon32x32" />
    <link rel="icon" type="image/png" sizes="16x16" :href="favicon16x16" />
    <link rel="mask-icon" :href="safariPinnedTab" color="#5bbad5" />
  </teleport>
  <v-app>
    <v-main>
      <router-view />
    </v-main>

    <v-overlay :model-value="loading" app class="justify-center align-center">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>

    <FooterComponent />
  </v-app>
</template>
