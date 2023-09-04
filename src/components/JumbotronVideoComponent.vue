<script setup lang="ts">
defineProps<{
  title: string;
  video?: string;
  single?: boolean;
}>();
</script>

<template>
  <div class="jumbotron d-flex align-items-center">
    <h1 class="text-h4 mb-4">{{ title }}</h1>
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

@media (max-width: 767px) and (orientation: landscape) {
  .jumbotron {
    min-height: 500px;
  }

  .jumbotron h1 {
    font-size: 3rem;
  }
}

.jumbotron:before {
  z-index: 1;
  position: absolute;
  display: block;
  content: '';
  opacity: 0.8;
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
  white-space: normal;
  line-height: 0.9;
  font-weight: bold;
  display: inline-block;
  border: 15px solid #fff;
  padding: 30px;
  font-size: 9rem;
  opacity: 0;
  animation: 1s fadeInFromTop cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s forwards;
  animation-delay: 0.2s;
}
</style>
