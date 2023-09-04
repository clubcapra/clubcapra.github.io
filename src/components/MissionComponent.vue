<script setup lang="ts">
import MissionItemComponent from './MissionItemComponent.vue';

const missions = [
  {
    title: 'Sauver des vies',
    content:
      'Utiliser la robotique afin de créer des solutions qui peuvent avoir un impact direct sur la vie des gens.',
    icon: 'heart',
    delay: '0',
  },
  {
    title: 'Compétitionner',
    content:
      'Participer et se démarquer dans des compétitions de robotique à travers le monde.',
    icon: 'star',
    delay: '200',
  },
  {
    title: 'Former des ingénieurs',
    content:
      'Pousser nos membres à développer une multitude de compétences en ingénierie.',
    icon: 'graduation-hat',
    delay: '400',
  },
];
</script>

<template>
  <div class="section-content">
    <div class="title-wrap" data-aos="fade-up">
      <h2 class="section-title">Notre mission</h2>
    </div>

    <v-row class="text-md-center">
      <v-col v-for="(mission, i) in missions" :key="i" class="pa-2 ma-6">
        <MissionItemComponent
          :title="mission.title"
          :content="mission.content"
          :icon="mission.icon"
          data-aos="fade-up"
          :data-aos-delay="mission.delay"
        />
      </v-col>
    </v-row>
  </div>
</template>
