<script setup lang="ts">
import type { WritableComputedRef } from 'vue';
import { computed, onMounted } from 'vue';
import { useGlobalStore } from './store';

// Components
import FooterComponent from './components/FooterComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';

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
  <v-app>
    <NavbarComponent />
    <v-main>
      <router-view />
    </v-main>

    <v-overlay :model-value="loading" app class="justify-center align-center">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>

    <FooterComponent />
  </v-app>
</template>
