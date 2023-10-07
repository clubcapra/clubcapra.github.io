<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{
  /**
   * The title of the jumbotron.
   */
  title: string;
  /**
   * If set, the main element will have a background video.
   */
  video?: string;
  /**
   * If set, the main element will have a background image.
   */
  img?: string;
  /**
   * If set and true, the opacity of the overlay and the size the text will change.
   * To show the content.
   */
  isContent?:  boolean;
}>();

const mainElementRef = ref<HTMLElement | null>(null);
if (props.img) {
  onMounted(() => {
    if (mainElementRef.value) {
      mainElementRef.value.style.backgroundImage = `url(${props.img})`;
    }
  });
}
</script>

<template>
  <div
    ref="mainElementRef"
    :class="isContent ? 'jumbotron-content' : 'jumbotron-title'"
    class="jumbotron d-flex align-items-center"
  >
    <h1 class="text-md-h1 mb-4">{{ title }}</h1>
    <video v-if="video" class="bg-video" preload="true" autoplay muted>
      <source :src="video" type="video/mp4" />
    </video>
  </div>
</template>

<style>
.jumbotron {
  color: #fff;
  padding-top: 80px;
  padding-bottom: 80px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  border-radius: 0;
  margin-bottom: 0;
  overflow: hidden;
  min-height: 100vh;
}

.jumbotron:before {
  z-index: 1;
  position: absolute;
  display: block;
  content: '';
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* fallback for old browsers */
  background: #d22b2b;
  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, #000, #121212);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #000, #121212);
}

.jumbotron > h1 {
  line-height: 0.9;
  font-weight: bold;
  display: inline-block;
  padding: 30px;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
}
.jumbotron-title::before {
  opacity: 0.8;
}
.jumbotron-content::before {
  opacity: 0.5;
}

.jumbotron-title > h1 {
  /* Fading animation */
  opacity: 0;
  animation: 1s fadeInFromTop cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s forwards;
  animation-delay: 0.2s;

  border: 15px solid #fff;
}
.jumbotron-content > h1 {
  font-size: 3.5rem !important;
}
</style>
