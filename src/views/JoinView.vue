<script setup lang="ts">
import FAQComponent from '@clubcapra/components/FAQComponent.vue';
</script>

<template>
  <section
    class="container px-4 mx-auto pb-20 mt-20 flex flex-col items-center"
  >
    <a
      class="bg-black hover:border-primary-50 border-2 border-black transition-colors text-white font-medium text-lg py-2 mt-10 px-4 rounded-lg w-fit"
      href="https://formulaires.etsmtl.ca/ClubEtudiantAdhesion?requete=capra&categorie=0"
      target="_blank"
    >
      {{ $t('join_us') }}
    </a>
  </section>
  <FAQComponent />
  <section class="container px-4 mx-auto pb-20 flex flex-col items-center">
    <a
      class="bg-black hover:border-primary-50 border-2 border-black transition-colors text-white font-medium text-lg py-2 mt-10 px-4 rounded-lg w-fit"
      href="https://formulaires.etsmtl.ca/ClubEtudiantAdhesion?requete=capra&categorie=0"
      target="_blank"
    >
      {{ $t('join_us') }}
    </a>
  </section>
</template>

<style scoped></style>
