<script setup lang="ts">
import robotStory from '@clubcapra/assets/media/robot_story.jpg';
import yoloV9 from '@clubcapra/assets/media/yolov9.jpeg';
import team2024 from '@clubcapra/assets/media/team/team2024.jpg';
import GlobeComponent from '@clubcapra/components/GlobeComponent.vue';
import CompetitionCarouselComponent from '@clubcapra/components/CompetitionCarouselComponent.vue';

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
        class="aspect-square h-1/2 w-full md:absolute md:right-0 md:w-1/2 md:h-full z-0"
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

      <div class="w-full max-w-4xl" data-aos-delay="400" data-aos="zoom-in">
        <!-- YouTube video iframe -->
        <iframe
          width="100%"
          height="100%"
          class="rounded-l aspect-video"
          src="https://www.youtube.com/embed/_KpCUCoCCqU"
        />
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
            {{ $t('robots_design_title') }}
            <span class="text-primary-500">{{ $t('scratch_title') }}</span>
          </h2>
          <p>
            {{ $t('robots_design_content') }}
          </p>
        </div>
        <iframe
          class="md:w-1/2 rounded-lg w-full"
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
            {{ $t('powered_by_title') }}
            <span class="text-primary-500">{{ $t('ai') }}</span>
          </h2>
          <p>
            {{ $t('powered_by_content') }}
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
          {{ $t('global_impact_title') }}
        </h2>
        <p class="text-white">
          {{ $t('global_impact_content') }}
        </p>
      </div>

      <!-- Globe animation -->
      <GlobeComponent />
    </div>
  </section>
  <CompetitionCarouselComponent />
  <section class="container mx-auto px-4 py-20">
    <div class="flex flex-col md:flex-row gap-8 items-center">
      <div class="flex md:w-1/2 flex-col gap-8" data-aos="fade-up">
        <h2 class="font-bold font-sans text-4xl md:text-5xl">Join our team</h2>
        <p>
          We are always looking for new members to join our team. If you are
          interested in robotics, AI, or just want to learn more about
          technology, we would love to have you on board. No experience is
          necessary, just a passion for learning and a desire to make a
          difference.
        </p>
        <a
          class="bg-black hover:border-primary-50 border-2 border-black transition-colors text-white font-medium text-lg py-2 px-4 rounded-lg w-fit"
          href="#footer"
        >
          Join us
        </a>
      </div>
      <div class="md:w-1/2" data-aos="fade-up" data-aos-delay="400">
        <img :src="team2024" alt="robot" class="rounded-lg" />
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
