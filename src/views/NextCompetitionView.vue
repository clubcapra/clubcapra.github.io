<script setup lang="ts">
import DescriptiveContentComponent from '@clubcapra/components/DescriptiveContentComponent.vue';

import { nextCompetition } from '@clubcapra/data/competitions';
</script>

<template>
  <section class="container mx-auto px-4 pt-20">
    <h2 class="text-5xl md:text-6xl font-bold font-sans text-center pt-10">
      {{ $t('next_competition_title') }}
    </h2>
    <DescriptiveContentComponent :image-right="true">
      <template #title>
        {{ $t(nextCompetition.title) }} {{ nextCompetition.year }}
      </template>
      <template v-if="nextCompetition.description" #content1>
        {{ $t(nextCompetition.description) }}
      </template>
      <template #image>
        <img
          :src="nextCompetition.image"
          alt="biutiful view of green hills and mountains"
          class="rounded-lg w-full"
        />
      </template>
    </DescriptiveContentComponent>
    <DescriptiveContentComponent
      v-for="(task, i) in nextCompetition.tasks"
      :key="i"
      :image-right="i % 2 === 1"
    >
      <template #title>
        {{ $t(task.title) }}
      </template>
      <template v-if="task.description" #content1>
        {{ $t(task.description) }}
      </template>
      <template #image>
        <img :src="task.image" alt="todo" class="rounded-lg w-full" />
      </template>
    </DescriptiveContentComponent>
    <p class="mx-auto px-4 py-20 text-center">
      {{ $t('european_robotics_rights') }}
      <a
        class="text-blue-700 hover:underline"
        target="_blank"
        href="https://www.flickr.com/photos/europeanrobotics"
      >
        Flicker
      </a>
    </p>
  </section>
</template>
