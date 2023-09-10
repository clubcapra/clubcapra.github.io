<script setup lang="ts">
// Components
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';

// Media
import robotsBG from '@clubcapra/assets/media/robotsbg.png';
</script>

<template>
  <JumbotronVideoComponent :title="$t('our_robots')" :img="robotsBG" />
</template>
