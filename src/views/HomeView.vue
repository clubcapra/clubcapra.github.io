<script setup lang="ts">
import robotStory from '@clubcapra/assets/media/robot_story.jpg';
import yoloV9 from '@clubcapra/assets/media/yolov9.jpeg';
import codeIcon from '@clubcapra/assets/media/icons8-code-100.png';
import circuitIcon from '@clubcapra/assets/media/icons8-circuit-100.png';
import gearIcon from '@clubcapra/assets/media/icons8-gear-100.png';

import enrichVideo from '@clubcapra/assets/media/Capra_montage.mp4';

import GlobeComponent from '@clubcapra/components/GlobeComponent.vue';
import CompetitionCarouselComponent from '@clubcapra/components/CompetitionCarouselComponent.vue';

import { VideoPlayer } from '@videojs-player/vue';
import 'video.js/dist/video-js.css';
import TeamProjectCardComponent from '@clubcapra/components/TeamProjectCardComponent.vue';
import SponsorCarouselComponent from '@clubcapra/components/SponsorCarouselComponent.vue';
</script>

<template>
  <section class="bg-primary-500">
    <div
      class="flex flex-col md:flex-row container mx-auto md:items-center h-screen w-screen px-4 gap-4"
    >
      <div class="md:w-1/2 z-10 flex flex-col gap-10 pt-20 md:pt-0">
        <h1
          class="mx-auto text-white font-bold font-sans text-5xl md:text-7xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {{ $t('home_title') }}
        </h1>
        <h3
          class="mx-auto text-primary-100 font-medium font-sans text-2xl md:text-3xl"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {{ $t('home_subtitle') }}
        </h3>
        <a
          class="bg-black hover:border-primary-50 border-2 border-black transition-colors text-white font-medium text-lg py-2 px-4 rounded-lg w-fit"
          data-aos="fade-up"
          data-aos-delay="1000"
          href="#footer "
        >
          {{ $t('get_in_touch_button') }}
        </a>
      </div>

      <iframe
        class="aspect-square md:absolute md:right-0 md:w-1/2 md:h-full z-0"
        style="border: none"
        width="100%"
        height="100%"
        src="https://rive.app/community/9385-17851-red-robot/embed"
        data-aos="zoom-in"
        data-aos-delay="100"
      />
    </div>
  </section>

  <!-- About us -->
  <section class="container mx-auto px-4 pt-20">
    <div class="flex flex-col md:flex-row gap-8 items-center">
      <div class="flex md:w-1/2 flex-col gap-8" data-aos="fade-up">
        <h2 class="font-bold font-sans text-4xl md:text-5xl">
          {{ $t('our_story_title') }}
        </h2>
        <p>
          {{ $t('our_story_content_1') }}
        </p>
        <p>
          {{ $t('our_story_content_2') }}
        </p>
      </div>
      <div class="md:w-1/2" data-aos="fade-up" data-aos-delay="400">
        <img :src="robotStory" alt="robot" class="rounded-lg" />
      </div>
    </div>
  </section>
  <section class="bg-black py-20 mt-20">
    <div
      class="flex flex-col gap-12 items-center justify-center container px-4 w-full mx-auto"
    >
      <div
        class="flex flex-col items-center justify-center gap-4"
        data-aos="fade-up"
      >
        <h2 class="font-bold font-sans text-3xl md:text-5xl text-white">
          {{ $t('watch_our_robot_title') }}
        </h2>
        <h5 class="font-sans text-lg md:text-xl text-white">
          {{ $t('watch_our_robot_subtitle') }}
        </h5>
      </div>

      <div class="w-3/5 rounded-lg" data-aos-delay="400" data-aos="zoom-in">
        <VideoPlayer controls preload="auto" :src="enrichVideo" fluid />
      </div>
    </div>
  </section>
  <section>
    <div class="container mx-auto px-4 py-20">
      <div class="flex flex-col md:flex-row gap-8 items-center w-full">
        <div
          class="flex flex-col gap-8 md:w-1/2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 class="font-bold font-sans text-4xl md:text-5xl">
            Robots designed from
            <span class="text-primary-500">scratch</span>
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
          data-aos="fade-up"
          data-aos-delay="400"
        />
      </div>
    </div>
  </section>
  <section>
    <div class="container mx-auto px-4 py-20">
      <div class="flex flex-col md:flex-row-reverse gap-8 items-center w-full">
        <div
          class="flex flex-col gap-8 md:w-1/2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
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
        <img
          :src="yoloV9"
          alt="yolo"
          class="md:w-1/2 rounded-lg"
          data-aos="fade-right"
          data-aos-delay="400"
        />
      </div>
    </div>
  </section>
  <section class="bg-black py-20">
    <div
      class="flex flex-col md:flex-row gap-8 items-center container w-full mx-auto px-4 h-96 md:h-96 mb-80 md:mb-0"
    >
      <div
        class="flex flex-col gap-8 md:w-1/2 z-10"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h2 class="font-bold font-sans text-4xl md:text-5xl text-white">
          Impact on a global scale
        </h2>
        <p class="text-white">
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
  <section class="container px-4 mx-auto py-20">
    <div>
      <h2
        class="font-bold font-sans text-4xl md:text-5xl text-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Contribute to one of our teams
      </h2>
      <!-- Team card-->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-12 w-full md:w-3/4 mx-auto"
      >
        <TeamProjectCardComponent
          :icon="gearIcon"
          title="Mechanical Engineering"
          :tasks="[
            'Design and build the mechanical components of our robot',
            'Work with 3D modeling software to create detailed designs',
            'Collaborate with other team members to integrate mechanical components',
          ]"
          data-aos="fade-up"
          data-aos-delay="800"
        />
        <TeamProjectCardComponent
          :icon="circuitIcon"
          title="Electrical Engineering"
          :tasks="[
            'Design and build the electrical systems of our robot',
            'Work with microcontrollers and sensors to control the robot',
            'Collaborate with other team members to integrate electrical systems',
          ]"
          data-aos="fade-up"
          data-aos-delay="1200"
        />
        <TeamProjectCardComponent
          :icon="codeIcon"
          title="Software Engineering"
          :tasks="[
            'Develop the software that controls the robot',
            'Implement algorithms for object detection and path planning',
            'Collaborate with other team members to integrate software components',
          ]"
          data-aos="fade-up"
          data-aos-delay="1600"
        />
      </div>
    </div>
  </section>
  <section class="container px-4 mx-auto pb-20">
    <h2 class="font-bold font-sans text-4xl md:text-5xl text-center mb-8">
      {{ $t('people_that_love_to_work_with_us') }}
    </h2>
    <SponsorCarouselComponent />
  </section>
</template>
