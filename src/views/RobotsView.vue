<script setup lang="ts">
import { useI18n } from 'vue-i18n';

// Components
import RobotComponent from '@clubcapra/components/RobotComponent.vue';

// Media
import robotsBG from '@clubcapra/assets/media/robotsbg.png';
import markhorSave from '@clubcapra/assets/media/markhor_save.jpg';
import homepageVid from '@clubcapra/assets/media/homepage_vid.mp4';
import markhorSpeed from '@clubcapra/assets/media/markhor_speed.mp4';
import markhorStairs from '@clubcapra/assets/media/markhor_stairs.mp4';
import { onMounted } from 'vue';

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
  id: string;
  name: string; // name of the robot in the tab and for the jumbotron
  creation_date: string; // Not used
  source: string;
  mediaType: MediaType;
  svg: string; // used in the tab with the name of the robots // Not Used
  sections: Section[];
}

const robots: Robot[] = [
  {
    id: 'Robot-Rove',
    name: 'Rove',
    creation_date: '',
    source: robotsBG,
    mediaType: 'img',
    svg: '',
    sections: [],
  },
  {
    id: 'Robot-Markhor',
    name: 'Markhor',
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
  {
    id: 'Robot-Takin',
    name: 'Takin',
    creation_date: '',
    source: robotsBG,
    mediaType: 'img',
    svg: '',
    sections: [],
  },
];
/* 
  Scroll the page with the footer before the content of the page,
  we doesn't want a case where the user scroll the content width the footer still visible
*/
onMounted(() => {
  const robotWrap = document.querySelector('.v-application__wrap');
  const robotMain = document.querySelector('main');
  const robotScrollContainer = document.querySelector('.scroll-container');
  robotWrap?.addEventListener('scrollend', e => {
    if (robotWrap?.scrollTop != 0) {
      robotMain?.classList.add('scrolled');
    } else {
      robotMain?.classList.remove('scrolled');
    }
  });
  robotScrollContainer?.addEventListener('scrollend', e => {
    const position =
      Math.floor(
        robotScrollContainer?.scrollTop / robotScrollContainer?.clientHeight
      ) + 1;
    const startingLoadingPosition = Math.max(position - 2, 0);
    const endingLoadingPosition = startingLoadingPosition + 5;
    robotScrollContainer
      .querySelectorAll('.section:nth-child(' + position + ') video')
      .forEach(video => {
        video.play();
      });
    // Lazy loading
    robotScrollContainer
      .querySelectorAll('.section video source')
      .forEach((source, i) => {
        if (i >= startingLoadingPosition && i <= endingLoadingPosition) {
          if (source.src == '') {
            source.src = source.getAttribute('data-src');
            source.parentElement?.load();
          }
        }
      });
    robotScrollContainer.querySelectorAll('.section img').forEach((img, i) => {
      if (i >= startingLoadingPosition && i <= endingLoadingPosition) {
        if (img.src == '') {
          img.src = img.getAttribute('data-src');
        }
      }
    });
  });
});
</script>

<template>
  <header class="robot-menu">
    <v-list-item
      density="compact"
      :title="t('our_robots')"
      class="robot-link"
    />
    <v-list-item
      v-for="(robot, i) in robots"
      :key="i"
      :href="'#' + robot.id"
      density="compact"
      :title="robot.name"
      class="robot-link"
    />
  </header>
  <div class="scroll-container">
    <RobotComponent v-for="robot in robots" :key="robot.name" :robot="robot" />
  </div>
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

.robot-menu {
  position: absolute;
  display: block;
  top: 0px;
  right: 0px;
  height: 100vh;
  padding-top: 48px; /* Navbar height */
  z-index: 50;
  background: rgba(0, 0, 0, 0.1);
}
.robot-menu * {
  background: none !important;
  color: white;
  .v-list-item__overlay {
    opacity: none;
  }
}
.robot-menu > *:not(:first-child) {
  margin-left: 15px;
}
/*
  FullPage replacement
  Dasom Ko, Pure CSS Fullpage Scrolling, https://codepen.io/ds92ko/pen/NWMaZRW
*/

* {
  box-sizing: border-box;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

::-webkit-scrollbar {
  display: none;
}

.scroll-container,
.v-application__wrap {
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
}

section {
  height: max-content;
  min-height: 100vh;
}

.scroll-item {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

main.scrolled,
main.scrolled .scroll-container {
  overflow: hidden;
}
</style>
