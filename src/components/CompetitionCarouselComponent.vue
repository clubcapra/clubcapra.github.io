<script setup lang="ts">
import CompetitionCardComponent from '@clubcapra/components/CompetitionCardComponent.vue';
import ClassNames from 'embla-carousel-class-names';
import emblaCarouselVue from 'embla-carousel-vue';
import zwentendorfTeam1 from '@clubcapra/assets/media/zwentendorf/zwentendorf_team1.avif';
import robocup2022 from '@clubcapra/assets/media/bangkok/team_2022.jpg';
import robocup2021 from '@clubcapra/assets/media/dortmund/team2021.jpg';
import robocup2019 from '@clubcapra/assets/media/sydney/comp_team_2019.jpg';

import { ref, watchEffect } from 'vue';

const [emblaRef, emblaApi] = emblaCarouselVue({}, [ClassNames()]);

const nextButtonDisabled = ref(false);
const prevButtonDisabled = ref(true);

watchEffect(() => {
  if (emblaApi.value) {
    // Hide arrow when carousel is at the end

    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    emblaApi.value.on('select', () => {
      emblaApi.value && emblaApi.value.canScrollNext()
        ? (nextButtonDisabled.value = false)
        : (nextButtonDisabled.value = true);

      emblaApi.value && emblaApi.value.canScrollPrev()
        ? (prevButtonDisabled.value = false)
        : (prevButtonDisabled.value = true);
    });

    // Add onClick event to next button
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        emblaApi.value && emblaApi.value.scrollNext();
      });
    }

    // Add onClick event to previous button
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        emblaApi.value && emblaApi.value.scrollPrev();
      });
    }
  }
});

const competitions = [
  {
    image: zwentendorfTeam1,
    title: 'EnRicH 2023',
    city: 'zwentendorf',
    country: 'austria',
    link: 'https://enrich2023.european-robotics.eu/',
    tasks: ['enrich_task_1', 'enrich_task_2', 'enrich_task_3'],
  },
  {
    image: robocup2022,
    title: 'Robocup 2022',
    city: 'bangkok',
    country: 'thailand',
    link: 'https://2022.robocup.org/',
    tasks: ['robocup2022_task_1', 'robocup2022_task_2', 'robocup2022_task_3'],
  },
  {
    image: robocup2021,
    title: 'Robocup German Open 2021',
    city: 'dortmund',
    country: 'germany',
    tasks: ['robocup2021_task_1', 'robocup2021_task_2', 'robocup2021_task_3'],
  },
  {
    image: robocup2019,
    title: 'RoboCup 2019',
    city: 'sydney',
    country: 'australia',
    link: 'https://2019.robocup.org/',
    tasks: ['robocup2019_task_1', 'robocup2019_task_2'],
  },
];
</script>
<template>
  <section class="container pt-10 mx-auto flex flex-col gap-8 px-4">
    <h2
      class="text-4xl md:text-5xl font-bold"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      {{ $t('competitions_title') }}
    </h2>
    <div
      ref="emblaRef"
      class="relative overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="800"
    >
      <div class="embla__container z-0">
        <div
          v-for="(competition, index) in competitions"
          :key="index"
          class="embla__slide embla__class-names transition-all"
        >
          <CompetitionCardComponent
            :image="competition.image"
            :title="competition.title"
            :city="competition.city"
            :country="competition.country"
            :tasks="competition.tasks"
            :link="competition.link"
          />
        </div>
      </div>
      <div class="flex flex-row gap-4 pt-8 md:pt-0">
        <div class="md:absolute z-10 md:top-3/4 md:left-5">
          <button
            id="prev-button"
            :disabled="prevButtonDisabled"
            class="bg-black text-primary-50 font-medium text-lg py-2 px-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <!-- previous arrow -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div class="md:absolute z-10 md:top-3/4 md:right-5">
          <button
            id="next-button"
            :disabled="nextButtonDisabled"
            class="bg-black text-primary-50 font-medium text-lg py-2 px-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <!-- next arrow -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.embla__container {
  backface-visibility: hidden;
  display: flex;
  margin-left: -1rem;
  margin-right: 1rem;
}
.embla__slide {
  flex: 0 0 90%;
  min-width: 0;
  margin-left: 1rem;
  transition: opacity 0.2s ease-in-out;

  @media (min-width: 768px) {
    flex: 0 0 60%;
    margin-right: 0;
  }
}
.embla__slide:not(.is-snapped) {
  opacity: 0.16;
  transform: scale(0.92);
}
</style>
