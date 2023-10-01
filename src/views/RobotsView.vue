<script setup lang="ts">
import { useI18n } from 'vue-i18n';

// Components
import RobotsWrapperComponent from '@clubcapra/components/RobotsWrapperComponent.vue';
import RobotComponent from '@clubcapra/components/RobotComponent.vue';

// Media
import robotsBG from '@clubcapra/assets/media/robotsbg.png';
import markhorSave from '@clubcapra/assets/media/markhor_save.jpg';
import homepageVid from '@clubcapra/assets/media/homepage_vid.mp4';
import markhorSpeed from '@clubcapra/assets/media/markhor_speed.mp4';
import markhorStairs from '@clubcapra/assets/media/markhor_stairs.mp4';

const { t } = useI18n();

export type MediaType = 'video' | 'img';
export interface Media {
  source: string;
  mediaType: MediaType;
}
export interface Section {
  title: string;
  medias: Media[];
}
export interface Robot {
  name: string; // name of the robot in the tab and for the jumbotron
  creation_date: string; // Not used
  source: string;
  mediaType: MediaType;
  svg: string; // used in the tab with the name of the robots // Not Used
  sections: Section[];
}

const robots: Robot[] = [
  {
    name: 'Test',
    creation_date: '',
    source: robotsBG,
    mediaType: 'img',
    svg: '',
    sections: [],
  },
  {
    name: t('our_robots'),
    creation_date: '',
    source: robotsBG,
    mediaType: 'img',
    svg: '',
    sections: [
      {
        title: t('robots_save_lives'),
        medias: [
          {
            source: markhorSave,
            mediaType: 'img',
          },
        ],
      },
      {
        title: t('robots_perform_with_precision'),
        medias: [
          {
            source: homepageVid,
            mediaType: 'video',
          },
        ],
      },
      {
        title: t('robots_cross_any_obstacle'),
        medias: [
          {
            source: markhorSpeed,
            mediaType: 'video',
          },
          {
            source: markhorStairs,
            mediaType: 'video',
          },
        ],
      },
    ],
  },
];
</script>

<template>
  <RobotsWrapperComponent>
    <RobotComponent v-for="robot in robots" :key="robot.name" :robot="robot" />
  </RobotsWrapperComponent>
</template>

<style>
.robot-info-card {
  background: linear-gradient(to right, #000, #121212);
  background: -webkit-linear-gradient(to right, #000, #121212);
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  color: white;
  opacity: 0.9;
}

.section-overlay:before {
  position: absolute;
  display: block;
  content: '';
  opacity: 0.5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #000, #121212);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #000, #121212);
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 4;
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.layer {
  position: absolute;
  z-index: 5;
  width: 100%;
  left: 0;
  top: 43%;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.layer h1 {
  z-index: 1000;
  color: white;
  font-weight: bold;
  font-size: 3.5rem;
}

.section-medias {
  position: absolute;
  display: flex;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  background-position: center center;
  background-size: contain;
  object-fit: cover;
  z-index: 3;
  flex-wrap: wrap;
  flex-direction: column;
}

.section-medias > * {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-shrink: 1;
  flex-grow: 1;
  overflow-y: hidden;
}
.section-medias > video {
  object-fit: cover;
}

.section {
  text-align: center;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

main {
  --v-layout-top: 0px !important; /* remove gape when droping */
}
</style>
