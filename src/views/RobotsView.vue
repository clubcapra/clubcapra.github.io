<script setup lang="ts">
// Components
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';

// Media
import robotsBG from '@clubcapra/assets/media/robotsbg.png';
</script>

<template>
  <JumbotronVideoComponent :title="$t('our_robots')" :img="robotsBG" />
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

video {
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  background-position: center center;
  background-size: contain;
  object-fit: cover;
  z-index: 3;
}
.section-image {
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  background-position: center center;
  background-size: contain;
  object-fit: cover;
  z-index: 3;
}
.split-video {
  width: 50%;
}
.left-video {
  left: 0;
}
.right-video {
  right: 0;
}
.section {
  text-align: center;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>
