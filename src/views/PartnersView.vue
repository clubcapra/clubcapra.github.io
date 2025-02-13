<script setup lang="ts">
import ParnershipButtonComponent from '@clubcapra/components/ParnershipButtonComponent.vue';
import {
  principalPartners,
  platinumPartners,
  goldPartners,
  silverPartners,
  bronzePartners,
} from '@clubcapra/data/partners';

const partnersTiers = [
  {
    title: 'partner_principal',
    partners: principalPartners,
    class: 'md:w-5/12',
  },
  {
    title: 'partner_platinum',
    partners: platinumPartners,
    class: 'md:w-5/12',
  },
  {
    title: 'partner_gold',
    partners: goldPartners,
    class: 'md:w-4/12 w-2/3',
  },
  {
    title: 'partner_silver',
    partners: silverPartners,
    class: 'md:w-3/12 w-1/2',
  },
  {
    title: 'partner_bronze',
    partners: bronzePartners,
    class: 'md:w-2/12 w-1/3',
  },
];
</script>

<template>
  <section class="container px-4 mx-auto pt-20">
    <section class="container px-4 mx-auto flex flex-col items-center">
      <ParnershipButtonComponent />
    </section>
    <template v-for="(tier, tierKey) in partnersTiers" :key="tierKey">
      <div v-if="tier.partners.length" class="pt-10">
        <h2 class="font-bold font-sans text-4xl md:text-5xl text-center">
          {{ $t(tier.title) }}
        </h2>
        <div
          class="flex flex-col md:flex-row md:flex-wrap items-center justify-center py-5 gap-4"
        >
          <template
            v-for="(partner, partnerKey) in tier.partners"
            :key="partnerKey"
          >
            <a :class="tier.class" :href="partner.url" target="_blank">
              <img :src="partner.img" :alt="partner.name" />
            </a>
          </template>
        </div>
      </div>
    </template>
  </section>
</template>
