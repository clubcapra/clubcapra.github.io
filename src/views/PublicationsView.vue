<script setup lang="ts">
// Components
import BibBaseComponent from '@clubcapra/components/BibBaseComponent.vue';
</script>
<template>
  <div class="container mx-auto px-4 pt-20 mt-10">
    <h2 class="font-bold font-sans text-4xl md:text-5xl">Publications</h2>
    <div class="pt-4">
      <BibBaseComponent
        url="https://raw.githubusercontent.com/clubcapra/papers/master/papers.bib"
      />
    </div>
  </div>
</template>
