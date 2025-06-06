<script setup lang="ts">
import robotStory from '@clubcapra/assets/media/robot_story.jpg';
import yoloV9 from '@clubcapra/assets/media/yolov9.jpeg';
import team from '@clubcapra/assets/media/members/EQUIPE.jpg';
import GlobeComponent from '@clubcapra/components/GlobeComponent.vue';
import CompetitionCarouselComponent from '@clubcapra/components/CompetitionCarouselComponent.vue';
import ParnershipButtonComponent from '@clubcapra/components/ParnershipButtonComponent.vue';

import SponsorCarouselComponent from '@clubcapra/components/SponsorCarouselComponent.vue';
import DescriptiveContentComponent from '@clubcapra/components/DescriptiveContentComponent.vue';
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
        <p
          class="mx-auto text-primary-100 font-medium font-sans text-2xl md:text-3xl"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {{ $t('home_subtitle') }}
        </p>
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
        aria-hidden="true"
        class="aspect-square h-1/2 w-full md:absolute md:right-0 md:w-1/2 md:h-full z-0 hidden sm:block"
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
  <section>
    <DescriptiveContentComponent class="pb-0" :image-right="true">
      <template #title>
        {{ $t('our_story_title') }}
      </template>
      <template #content1>
        {{ $t('our_story_content_1') }}
      </template>
      <template #content2>
        {{ $t('our_story_content_2') }}
      </template>
      <template #image>
        <img :src="robotStory" alt="robot" class="rounded-lg w-full" />
      </template>
    </DescriptiveContentComponent>
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
        <p class="font-sans text-lg md:text-xl text-white">
          {{ $t('watch_our_robot_subtitle') }}
        </p>
      </div>

      <div class="w-full max-w-4xl" data-aos-delay="400" data-aos="zoom-in">
        <!-- YouTube video iframe -->
        <iframe
          height="100%"
          width="100%"
          class="rounded-l aspect-video"
          src="https://www.youtube.com/embed/_KpCUCoCCqU"
          :title="$t('video_robot_in_action')"
        />
      </div>
    </div>
  </section>
  <section>
    <DescriptiveContentComponent :image-right="true">
      <template #title>
        {{ $t('robots_design_title') }}
        <span class="text-primary-500">{{ $t('scratch_title') }}</span>
      </template>
      <template #content1>
        {{ $t('robots_design_content') }}
      </template>
      <template #image>
        <iframe
          aria-hidden="true"
          style="border: none"
          height="400"
          class="rounded-lg w-full"
          src="https://rive.app/community/files/9884-18863-guy-designing/embed"
        />
      </template>
    </DescriptiveContentComponent>
  </section>
  <section>
    <DescriptiveContentComponent
      :button="$t('view_projects_button')"
      link="https://github.com/clubcapra"
      :image-right="false"
    >
      <template #title>
        {{ $t('powered_by_title') }}
        <span class="text-primary-500">{{ $t('ai') }}</span>
      </template>
      <template #content1>
        {{ $t('powered_by_content') }}
      </template>
      <template #image>
        <img :src="yoloV9" alt="yolo" class="rounded-lg w-full" />
      </template>
    </DescriptiveContentComponent>
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
  <section>
    <DescriptiveContentComponent
      :button="$t('join_us')"
      link="https://formulaires.etsmtl.ca/ClubEtudiantAdhesion?requete=capra&categorie=0"
      :image-right="true"
    >
      <template #title>
        {{ $t('join_our_team_title') }}
      </template>
      <template #content1>
        {{ $t('join_our_team_content') }}
      </template>
      <template #image>
        <img :src="team" alt="robot" class="rounded-lg w-full" />
      </template>
    </DescriptiveContentComponent>
  </section>
  <section class="container px-4 mx-auto pb-20 flex flex-col items-center">
    <h2 class="font-bold font-sans text-4xl md:text-5xl text-center mb-8">
      {{ $t('people_that_love_to_work_with_us') }}
    </h2>
    <SponsorCarouselComponent />
    <ParnershipButtonComponent />
  </section>
</template>
