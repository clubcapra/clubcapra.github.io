<script setup lang="ts">
import { watch, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import DescriptiveContentComponent from '@clubcapra/components/DescriptiveContentComponent.vue';

import voyage from '@clubcapra/assets/media/join/voyage.jpg';
import customDesign from '@clubcapra/assets/media/join/custom_design.jpg';
import eleWorking from '@clubcapra/assets/media/join/ele_working.jpg';
import mapping from '@clubcapra/assets/media/join/mapping.jpg';
import meetingMec from '@clubcapra/assets/media/join/meeting_mec.jpg';
import newArm from '@clubcapra/assets/media/join/new_arm.jpg';
import nuclearPlant from '@clubcapra/assets/media/join/nuclear_plant.jpg';
import pcbWorking from '@clubcapra/assets/media/join/pcb_working.jpg';
import poseDetection from '@clubcapra/assets/media/join/pose_detection.mp4';
import pizza from '@clubcapra/assets/media/join/pizza.png';

const { t, locale } = useI18n();
const route = useRoute();

const selectedTab = ref('MEC');

const nextPizzaParty = new Date('2024-09-26:17:00:00 gmt-0400');
const nextPizzaPartyLink = 'https://forms.office.com/r/UjRvbafzMg';
const nextPizzaPartyLocation = 'D-4025';

const dateStr = ref('');
const timeStr = ref('');

updateDateTimeStr();

watch(() => route.hash, scrollToId);

watch(() => locale.value, updateDateTimeStr);

onMounted(() => {
  scrollToId();
});

/**
 * Scroll to the element with the id in the route params
 */
function scrollToId() {
  if (route.hash) {
    const id = route.hash.replace('#', '').toUpperCase();
    if (id === 'MEC' || id === 'ELE' || id === 'LOG') {
      selectedTab.value = id;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
  }
}

/**
 * Update the date and time strings based on the locale
 */
function updateDateTimeStr() {
  dateStr.value = nextPizzaParty.toLocaleDateString(locale.value, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  timeStr.value = nextPizzaParty.toLocaleTimeString(locale.value, {
    hour: 'numeric',
  });
}
</script>

<template>
  <section id="TEAM" class="container mx-auto px-4 pt-20">
    <h2 class="text-5xl md:text-6xl font-bold font-sans text-center pt-10">
      <a href="#TEAM">{{ t('our_team_title') }}</a>
    </h2>
    <DescriptiveContentComponent :image-right="true">
      <template #title>
        {{ $t('passionate_students_title') }}
      </template>
      <template #content1>
        {{ $t('passionate_students_content') }}
      </template>
      <template #image>
        <img
          :src="meetingMec"
          alt="mechanical team meeting"
          class="rounded-lg w-full"
        />
      </template>
    </DescriptiveContentComponent>
    <DescriptiveContentComponent :image-right="false">
      <template #title>
        {{ $t('social_title') }}
      </template>
      <template #content1>
        {{ $t('social_content') }}
      </template>
      <template #image>
        <img :src="voyage" alt="bbq" class="rounded-lg w-full" />
      </template>
    </DescriptiveContentComponent>
  </section>

  <!-- Buttons -->
  <div class="flex justify-center">
    <div
      role="tablist"
      class="inline-flex flex-wrap justify-center p-1 gap-8 z-40"
    >
      <!-- Button #1 -->
      <button
        id="MEC"
        class="flex-1 text-2xl h-12 font-medium px-4 rounded-full whitespace-nowrap focus:outline-none transition-colors duration-500 ease-in-out"
        :class="
          selectedTab === 'MEC'
            ? 'bg-white ring-2 ring-black ring-inset'
            : 'bg-black text-white'
        "
        :tabindex="selectedTab === 'MEC' ? 0 : -1"
        :aria-selected="selectedTab === 'MEC'"
        aria-controls="tabpanel-MEC"
        role="tab"
        @click="selectedTab = 'MEC'"
        @focus="selectedTab = 'MEC'"
      >
        {{ t('team_mechanical') }}
      </button>
      <!-- Button #2 -->
      <button
        id="ELE"
        class="flex-1 text-2xl h-12 font-medium px-4 rounded-full whitespace-nowrap focus:outline-none transition-colors duration-500 ease-in-out"
        :class="
          selectedTab === 'ELE'
            ? 'bg-white ring-2 ring-black ring-inset'
            : 'bg-black text-white'
        "
        :tabindex="selectedTab === 'ELE' ? 0 : -1"
        :aria-selected="selectedTab === 'ELE'"
        aria-controls="tabpanel-ELE"
        role="tab"
        @click="selectedTab = 'ELE'"
        @focus="selectedTab = 'ELE'"
      >
        {{ t('team_electrical') }}
      </button>
      <!-- Button #3 -->
      <button
        id="LOG"
        class="flex-1 text-2xl h-12 font-medium px-4 rounded-full whitespace-nowrap focus:outline-none transition-colors duration-500 ease-in-out"
        :class="
          selectedTab === 'LOG'
            ? 'bg-white ring-2 ring-black ring-inset'
            : 'bg-black text-white'
        "
        :tabindex="selectedTab === 'LOG' ? 0 : -1"
        :aria-selected="selectedTab === 'LOG'"
        aria-controls="tabpanel-LOG"
        role="tab"
        @click="selectedTab = 'LOG'"
        @focus="selectedTab = 'LOG'"
      >
        {{ t('team_software') }}
      </button>
    </div>
  </div>

  <!-- Tab panels -->
  <section class="container mx-auto px-4">
    <div class="relative flex flex-col">
      <!-- Panel #1 -->
      <Transition
        enter-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 transform order-first"
        enter-from-class="opacity-0 -translate-y-8"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-300 transform absolute"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-12"
      >
        <div
          v-if="selectedTab === 'MEC'"
          id="tabpanel-MEC"
          class="w-full bg-white rounded-2xl shadow-xl focus-visible:outline-none"
          role="tabpanel"
          tabindex="0"
          aria-labelledby="MEC"
        >
          <DescriptiveContentComponent :image-right="true">
            <template #title>
              {{ $t('custom_robot_title') }}
            </template>
            <template #content1>
              {{ $t('custom_robot_content') }}
            </template>
            <template #image>
              <img
                :src="customDesign"
                alt="custom design"
                class="rounded-lg w-full"
              />
            </template>
          </DescriptiveContentComponent>
          <DescriptiveContentComponent :image-right="false">
            <template #title>
              {{ $t('robot_optimisation_title') }}
            </template>
            <template #content1>
              {{ $t('robot_optimisation_content') }}
            </template>
            <template #image>
              <img
                :src="newArm"
                alt="new robotic arm"
                class="rounded-lg w-full"
              />
            </template>
          </DescriptiveContentComponent>
        </div>
      </Transition>
      <!-- Panel #2 -->

      <Transition
        enter-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 transform order-first"
        enter-from-class="opacity-0 -translate-y-8"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-300 transform absolute"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-12"
      >
        <div
          v-if="selectedTab === 'ELE'"
          id="tabpanel-ELE"
          class="w-full bg-white rounded-2xl shadow-xl focus-visible:outline-none"
          role="tabpanel"
          tabindex="0"
          aria-labelledby="ELE"
        >
          <DescriptiveContentComponent :image-right="true">
            <template #title>
              {{ $t('pcb_design_title') }}
            </template>
            <template #content1>
              {{ $t('pcb_design_content') }}
            </template>
            <template #image>
              <img
                :src="pcbWorking"
                alt="PCB design"
                class="rounded-lg w-full"
              />
            </template>
          </DescriptiveContentComponent>
          <DescriptiveContentComponent :image-right="false">
            <template #title>
              {{ $t('electrical_stack_title') }}
            </template>
            <template #content1>
              {{ $t('electrical_stack_content') }}
            </template>
            <template #image>
              <img
                :src="eleWorking"
                alt="eletrical team working"
                class="rounded-lg w-full"
              />
            </template>
          </DescriptiveContentComponent>
        </div>
      </Transition>
      <!-- Panel #3 -->

      <Transition
        enter-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 transform order-first"
        enter-from-class="opacity-0 -translate-y-8"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-300 transform absolute"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-12"
      >
        <div
          v-if="selectedTab === 'LOG'"
          id="tabpanel-LOG"
          class="w-full bg-white rounded-2xl shadow-xl focus-visible:outline-none"
          role="tabpanel"
          tabindex="0"
          aria-labelledby="LOG"
        >
          <DescriptiveContentComponent :image-right="true">
            <template #title>
              {{ $t('ai_title') }}
            </template>
            <template #content1>
              {{ $t('ai_content') }}
            </template>
            <template #image>
              <video
                :src="poseDetection"
                alt="AI pose detection"
                class="rounded-lg w-full"
                loop
                autoplay
                muted
              />
            </template>
          </DescriptiveContentComponent>
          <DescriptiveContentComponent :image-right="false">
            <template #title>
              {{ $t('mapping_title') }}
            </template>
            <template #content1>
              {{ $t('mapping_content') }}
            </template>
            <template #image>
              <img :src="mapping" alt="mapping" class="rounded-lg w-full" />
            </template>
          </DescriptiveContentComponent>
        </div>
      </Transition>
    </div>
  </section>

  <section id="COMPETITION" class="container mx-auto px-4 pt-10">
    <h2 class="text-5xl md:text-6xl font-bold font-sans text-center pt-10">
      <a href="#COMPETITION">{{ t('our_next_competition') }}</a>
    </h2>
    <DescriptiveContentComponent :image-right="true">
      <template #title>
        {{ $t('nuclear_plant_title') }}
      </template>
      <template #content1>
        {{ $t('nuclear_plant_content') }}
      </template>
      <template #image>
        <img
          :src="nuclearPlant"
          alt="nuclear plant"
          class="rounded-lg w-full"
        />
      </template>
    </DescriptiveContentComponent>
  </section>

  <section
    v-if="nextPizzaParty > new Date()"
    id="PIZZA"
    class="container mx-auto px-4 pt-10"
  >
    <h2 class="text-5xl md:text-6xl font-bold font-sans text-center pt-10">
      <a href="#PIZZA">{{ t('our_next_event') }}</a>
    </h2>
    <DescriptiveContentComponent
      :image-right="false"
      :button="$t('i_will_be_there')"
      :link="nextPizzaPartyLink"
    >
      <template #title>
        {{ $t('information_evening_title') }}
      </template>
      <template #content1>
        <b>
          {{ $t('meet_us') }} {{ dateStr }} {{ $t('at_time') }} {{ timeStr }}
          {{ $t('at_location') }} {{ nextPizzaPartyLocation }}
          {{ $t('treat_pizza') }}
        </b>
      </template>
      <template #content2>
        {{ $t('information_evening_content') }}
      </template>
      <template #image>
        <img :src="pizza" alt="pizza" class="animate-spin-slow w-full" />
      </template>
    </DescriptiveContentComponent>
  </section>
</template>
