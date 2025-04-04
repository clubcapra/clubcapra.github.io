<script setup lang="ts">
// Importation des données et ressources
import { useI18n } from 'vue-i18n';
// Composants
import ProjectItemComponent from '@clubcapra/components/ProjectItemComponent.vue';
// Médias

import cablemanagementImage from '@clubcapra/assets/media/cablemanagement.jpg';
import gripperImage from '@clubcapra/assets/media/gripperimage.jpg';
import mappingImage from '@clubcapra/assets/media/mappingimage.jpeg';

// Données des projets
const projects = [
  {
    title: 'gripper_arm',
    description: 'description_gripper_arm',
    img: gripperImage,
  },
  {
    title: 'cable_management',
    description: 'description_cable_management',
    img: cablemanagementImage,
  },
  {
    title: 'mapping_3d',
    description: 'description_mapping_3d',
    img: mappingImage,
  },
];

const { t } = useI18n();
</script>

<template>
  <section>
    <div class="container mx-auto px-4 pt-10 pb-20">
      <div class="pt-20 pb-10">
        <h2 class="text-5xl font-bold font-sans text-center">
          {{ t('tout_projets') }}
        </h2>
      </div>
      <div class="flex flex-col gap-8 items-center">
        <template v-for="(project, index) in projects" :key="index">
          <div class="w-full md:w-2/3 lg:w-1/2">
            <ProjectItemComponent
              :title="t(project.title)"
              :description="t(project.description)"
              :img="project.img"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
