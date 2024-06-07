<script setup lang="ts">
import {
  goldPartners,
  silverPartners,
  bronzePartners,
} from '@clubcapra/data/partners';
</script>

<template>
  <section class="container px-4 mx-auto pt-20">
    <div class="pt-10">
      <h2 class="font-bold font-sans text-4xl md:text-5xl text-center">
        {{ $t('partner_gold') }}
      </h2>
      <div
        class="flex flex-col md:flex-row md:flex-wrap items-center justify-center py-5 gap-4"
      >
        <template v-for="(partner, key) in goldPartners" :key="key">
          <img :src="partner.img" :alt="partner.name" class="md:w-1/3" />
        </template>
      </div>
    </div>

    <div class="pt-10">
      <h2 class="font-bold font-sans text-4xl md:text-5xl text-center">
        {{ $t('partner_silver') }}
      </h2>
      <div
        class="flex flex-col md:flex-row md:flex-wrap items-center justify-center py-5 gap-4"
      >
        <template v-for="(partner, key) in silverPartners" :key="key">
          <img :src="partner.img" :alt="partner.name" class="md:w-1/4 w-3/4" />
        </template>
      </div>
    </div>
    <div class="pt-10 pb-20">
      <h2 class="font-bold font-sans text-4xl md:text-5xl text-center">
        {{ $t('partner_bronze') }}
      </h2>
      <div
        class="flex flex-col md:flex-row md:flex-wrap items-center justify-center py-5 gap-4"
      >
        <template v-for="(partner, key) in bronzePartners" :key="key">
          <img :src="partner.img" :alt="partner.name" class="md:w-1/5 w-1/3" />
        </template>
      </div>
    </div>
  </section>
</template>
