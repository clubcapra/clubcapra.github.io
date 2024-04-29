<script setup lang="ts">
import CompetitionCardComponent from '@clubcapra/components/CompetitionCardComponent.vue';
import ClassNames from 'embla-carousel-class-names';
import emblaCarouselVue from 'embla-carousel-vue';
import zwentendorfTeam1 from '@clubcapra/assets/media/zwentendorf/zwentendorf_team1.avif';
import robocup2022 from '@clubcapra/assets/media/bangkok/team_2022.jpg';
import robocup2021 from '@clubcapra/assets/media/dortmund/team2021.jpg';
import robocup2019 from '@clubcapra/assets/media/sydney/comp_team_2019.jpg';

import { watchEffect } from 'vue';

const [emblaRef, emblaApi] = emblaCarouselVue({}, [ClassNames()]);

watchEffect(() => {
  if (emblaApi.value) {
    // Hide arrow when carousel is at the end

    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    emblaApi.value.on('select', () => {
      if (nextButton) {
        nextButton.style.display = emblaApi.value.canScrollNext()
          ? 'block'
          : 'none';
      }
      if (prevButton) {
        prevButton.style.display = emblaApi.value.canScrollPrev()
          ? 'block'
          : 'none';
      }
    });

    // Add onClick event to next button
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        emblaApi.value.scrollNext();
      });
    }

    // Add onClick event to previous button
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        emblaApi.value.scrollPrev();
      });
    }
  }
});

const competitions = [
  {
    image: zwentendorfTeam1,
    title: 'EnRicH 2023',
    location: 'Zwentendorf, Austria',
    description:
      "Our team participated in the Zwentendorf competition in 2021. We were able to showcase our robot's capabilities and learn from other teams.",
  },
  {
    image: robocup2022,
    title: 'Robocup 2022',
    location: 'Bangkok, Thailand',
    description:
      "Our team participated in the Zwentendorf competition in 2021. We were able to showcase our robot's capabilities and learn from other teams.",
  },
  {
    image: robocup2021,
    title: 'Robocup German Open 2021',
    location: 'Dortmund, Germany',
    description:
      "Our team participated in the Zwentendorf competition in 2021. We were able to showcase our robot's capabilities and learn from other teams.",
  },
  {
    image: robocup2019,
    title: 'RoboCup 2019',
    location: 'Sydney, Australia',
    description:
      "Our team participated in the Zwentendorf competition in 2021. We were able to showcase our robot's capabilities and learn from other teams.",
  },
];
</script>
<template>
  <section class="container pt-10 mx-auto flex flex-col gap-8 px-4">
    <h2 class="text-4xl md:text-5xl font-bold">Our past competitions</h2>
    <div ref="emblaRef" class="embla relative">
      <div class="embla__container z-0">
        <div
          v-for="(competition, index) in competitions"
          :key="index"
          class="embla__slide embla__class-names transition-all"
        >
          <CompetitionCardComponent
            :image="competition.image"
            :title="competition.title"
            :location="competition.location"
            :description="competition.description"
          />
        </div>
      </div>
      <div class="absolute z-10 top-3/4 left-5">
        <button
          id="prev-button"
          style="display: none"
          class="bg-black text-primary-50 font-medium text-lg py-2 px-2 rounded-full transition-all"
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
      <div class="absolute z-10 top-3/4 right-5">
        <button
          id="next-button"
          class="bg-black text-primary-50 font-medium text-lg py-2 px-2 rounded-full transition-all"
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
  </section>
</template>

<style scoped>
.embla {
  overflow: hidden;
}
.embla__container {
  backface-visibility: hidden;
  display: flex;
  margin-left: -1rem;
}
.embla__slide {
  flex: 0 0 60%;
  min-width: 0;
  margin-left: 1rem;
  transition: opacity 0.2s ease-in-out;
}
.embla__slide:not(.is-snapped) {
  opacity: 0.16;
  transform: scale(0.92);
}
</style>
