<script setup lang="ts">
import { useI18n } from 'vue-i18n';

// Components
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';

// Media
import robotsBG from '@clubcapra/assets/media/robotsbg.png';
import markhorSave from '@clubcapra/assets/media/markhor_save.jpg';
import homepageVid from '@clubcapra/assets/media/homepage_vid.mp4';
import markhorSpeed from '@clubcapra/assets/media/markhor_speed.mp4';
import markhorStairs from '@clubcapra/assets/media/markhor_stairs.mp4';

const { t } = useI18n();

/*
  {
    name: '', // name of the robot in the tab and for the jumbotron
    creation_date: '',
    source: '',
    isVideo: false,
    svg: '', // used in the tab with the name of the robots
    sections: [
      {
        title: '',
        medias: [
          {
            source: '',
            isVideo: false,
          },
        ],
      },
    ],
  },
*/

const robots = [
  {
    name: t('our_robots'),
    creation_date: '',
    source: robotsBG,
    isVideo: false,
    sections: [
      {
        title: t('robots_save_lives'),
        medias: [
          {
            source: markhorSave,
            isVideo: false,
          },
        ],
      },
      {
        title: t('robots_perform_with_precision'),
        medias: [
          {
            source: homepageVid,
            isVideo: true,
          },
        ],
      },
      {
        title: t('robots_cross_any_obstacle'),
        medias: [
          {
            source: markhorSpeed,
            isVideo: true,
          },
          {
            source: markhorStairs,
            isVideo: true,
          },
        ],
      },
    ],
  },
];
</script>

<template>
  <full-page id="fullpage">
    <div class="section">
      <JumbotronVideoComponent :title="$t('our_robots')" :img="robotsBG" />
    </div>
    <div class="section section-overlay">
      <div class="section-medias">
        <img :src="markhorSave" class="section-image" />
      </div>
      <div class="layer">
        <h1>{{ $t('robots_save_lives') }}</h1>
      </div>
    </div>
    <div class="section section-overlay">
      <div class="section-medias">
        <video loop muted playsinline data-autoplay>
          <source :src="homepageVid" type="video/mp4" />
        </video>
      </div>
      <div class="layer">
        <h1>{{ $t('robots_perform_with_precision') }}</h1>
      </div>
    </div>
    <div class="section section-overlay">
      <div class="section-medias">
        <video
          class="split-video left-video"
          loop
          muted
          playsinline
          data-autoplay
        >
          <source :src="markhorSpeed" type="video/mp4" />
        </video>
        <video
          class="split-video right-video"
          loop
          muted
          playsinline
          data-autoplay
        >
          <source :src="markhorStairs" type="video/mp4" />
        </video>
      </div>
      <div class="layer">
        <h1>{{ $t('robots_cross_any_obstacle') }}</h1>
      </div>
    </div>
  </full-page>
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
