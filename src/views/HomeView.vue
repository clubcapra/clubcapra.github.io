<script setup lang="ts">
import robotStory from '@clubcapra/assets/media/robot_story.jpg';
import yoloV9 from '@clubcapra/assets/media/yolov9.jpeg';

import GlobeComponent from '@clubcapra/components/GlobeComponent.vue';
import CompetitionCarouselComponent from '@clubcapra/components/CompetitionCarouselComponent.vue';
</script>

<template>
  <section class="bg-primary-500">
    <div
      class="flex flex-col md:flex-row container mx-auto md:items-center h-screen w-screen px-4 gap-4"
    >
      <div class="md:w-1/2 z-10 flex flex-col gap-10 pt-20 md:pt-0">
        <h1
          class="mx-auto text-primary-50 font-bold font-sans text-5xl md:text-7xl animate-fade-up animate-delay-200"
        >
          Building the future of robotics, together
        </h1>
        <h3
          class="mx-auto text-primary-100 font-medium font-sans text-2xl md:text-3xl animate-fade-up animate-delay-700"
        >
          We are a student initiative that aims to develop the next generation
          of search and rescue robots.
        </h3>
        <button
          class="bg-black hover:border-primary-50 border-2 border-black transition-colors text-white font-medium text-lg py-2 px-4 rounded-lg w-fit animate-fade-up animate-delay-1000"
        >
          Get in touch with us
        </button>
      </div>

      <iframe
        class="aspect-square md:absolute md:right-0 md:w-1/2 md:h-full z-0 animate-jump-in"
        style="border: none"
        width="100%"
        height="100%"
        src="https://rive.app/community/9385-17851-red-robot/embed"
      />
    </div>
  </section>

  <!-- About us -->
  <section class="container mx-auto px-4 pt-20">
    <div class="flex flex-col md:flex-row gap-8 items-center">
      <div class="flex md:w-1/2 flex-col gap-8">
        <h2 class="font-bold font-sans text-4xl md:text-5xl">
          Our
          <span class="text-primary-500">story</span>
        </h2>
        <p>
          At Capra, we are a dynamic student club affiliated with École de
          technologie supérieure (ÉTS) in Montréal. Since our inception in 1999,
          we’ve passionately dedicated ourselves to the fascinating world of
          robotics. Our journey has been one of innovation, collaboration, and
          hands-on learning.
        </p>
        <p>
          In 2016, we decided to focus on building search and rescue robots.
          With our expertise, we aim to make a tangible impact on real-world
          emergency scenarios. From rugged terrains to critical situations,
          Capra’s robots are designed to save lives and make a significant
          impact on the evolution of robotics.
        </p>
      </div>
      <div class="md:w-1/2">
        <img :src="robotStory" alt="robot" class="rounded-lg" />
      </div>
    </div>
  </section>
  <section class="bg-black py-40 mt-20">
    <div
      class="flex flex-col gap-12 items-center justify-center container px-4 w-full mx-auto"
    >
      <h2 class="font-bold font-sans text-3xl md:text-5xl text-primary-50">
        See our robots in action
      </h2>
      <iframe
        class="rounded-lg aspect-video w-full md:w-3/4"
        src="https://www.youtube.com/embed/_KpCUCoCCqU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </section>
  <section>
    <div class="container mx-auto px-4 py-20">
      <div class="flex flex-col md:flex-row gap-8 items-center w-full">
        <div class="flex flex-col gap-8 md:w-1/2">
          <h2 class="font-bold font-sans text-4xl md:text-5xl">
            Designed from
            <span class="text-primary-500">scratch</span>
            by us
          </h2>
          <p>
            Our robots are designed and built from scratch by our team of
            dedicated students. We use cutting-edge technology and innovative
            design to create robots that can navigate through challenging
            terrains and save lives.
          </p>
        </div>
        <iframe
          class="md:w-1/2 rounded-lg"
          style="border: none"
          height="400"
          src="https://rive.app/community/files/9884-18863-guy-designing/embed"
        />
      </div>
    </div>
  </section>
  <section>
    <div class="container mx-auto px-4 py-20">
      <div class="flex flex-col md:flex-row-reverse gap-8 items-center w-full">
        <div class="flex flex-col gap-8 md:w-1/2">
          <h2 class="font-bold font-sans text-4xl md:text-5xl">
            Powered by
            <span class="text-primary-500">AI</span>
          </h2>
          <p>
            Our robots are equipped with artificial intelligence that enables
            them to make autonomous decisions in real-time. From object
            detection to path planning, our robots are designed to be
            intelligent and efficient in their operations.
          </p>
        </div>
        <img :src="yoloV9" alt="yolo" class="md:w-1/2 rounded-lg" />
      </div>
    </div>
  </section>
  <section class="bg-black py-20">
    <div
      class="flex flex-col md:flex-row gap-8 items-center container w-full mx-auto px-4 h-64 md:h-96"
    >
      <div class="flex flex-col gap-8 md:w-1/2 z-10">
        <h2 class="font-bold font-sans text-4xl md:text-5xl text-primary-50">
          Impact on a global scale
        </h2>
        <p class="text-primary-50">
          Our robots participate in international competitions and events. We
          have showcased our robots in countries like Thailand, Germany,
          Austria, and Australia. Our goal is to make a global impact and
          inspire the next generation of roboticists.
        </p>
      </div>

      <!-- Globe animation -->
      <GlobeComponent />
    </div>
  </section>
  <CompetitionCarouselComponent />
</template>
