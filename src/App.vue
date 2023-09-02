<script setup lang="ts">
// Components

import FooterComponent from './components/FooterComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';

// Assets
import favicon16x16 from './assets/favicon-16x16.png';
import favicon32x32 from './assets/favicon-32x32.png';
import appleTouchIcon from './assets/apple-touch-icon.png';
import safaryPinnedTab from './assets/safari-pinned-tab.svg';

// Metadata
</script>

<template>
  <NavbarComponent />
  <FooterComponent />
  <teleport to="head">
    <link
      rel="apple-touch-icon"
      :href="appleTouchIcon"
      type="image/png"
      size="152x152"
    />
    <link rel="icon" :href="favicon16x16" type="image/png" sizes="16x16" />
    <link rel="icon" :href="favicon32x32" type="image/png" sizes="32x32" />
    <link
      rel="mask-icon"
      :href="safaryPinnedTab"
      type="image/svg+xml"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  </teleport>
</template>
