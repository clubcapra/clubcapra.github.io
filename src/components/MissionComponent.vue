<script setup lang="ts">
import { useI18n } from 'vue-i18n';

// Components
import MissionItemComponent from './MissionItemComponent.vue';

const { t } = useI18n();
const missions = [
  {
    title: t('mission_save_lives_title'),
    content: t('mission_save_lives_description'),
    icon: 'heart',
    delay: '0',
  },
  {
    title: t('mission_compete_title'),
    content: t('mission_compete_description'),
    icon: 'star',
    delay: '200',
  },
  {
    title: t('mission_train_future_engineers_title'),
    content: t('mission_train_future_engineers_description'),
    icon: 'graduation-hat',
    delay: '400',
  },
];
</script>

<template>
  <div class="section-content">
    <div class="title-wrap" data-aos="fade-up">
      <h2 class="section-title">{{ $t('our_mission_title') }}</h2>
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
