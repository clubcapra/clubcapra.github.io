<script setup lang="ts">
// Components
import MissionComponent from '@clubcapra/components/MissionComponent.vue';
import SponsorComponent from '@clubcapra/components/SponsorComponent.vue';

// Media
import prototypes from '@clubcapra/assets/media/prototypes.jpg';
import teamcaprarobot from '@clubcapra/assets/media/teamcaprarobot.png';
</script>

<template>
  <div
    class="flex flex-col md:flex-row max-w-6xl mx-auto justify-between h-screen w-screen px-4 gap-4"
  >
    <div>
      <h1
        class="md:pt-40 z-10 mx-auto text-primary-500 font-medium font-sans text-5xl md:text-7xl"
      >
        Building the future of robotics, together.
      </h1>
      <h3
        class="md:pt-10 z-10 mx-auto text-primary-900 font-medium font-sans text-3xl"
      >
        We are a student initiative that aims to develop the next generation of
        search and rescue robots.
      </h3>
    </div>

    <iframe
      class="rounded-full bg-primary-500 h-1/2 self-center"
      style="border: none"
      width="100%"
      height="100%"
      src="https://rive.app/community/9385-17851-red-robot/embed"
    />
  </div>

  <!-- Missions -->
  <section class="featurettes">
    <MissionComponent />
  </section>

  <!-- Prototypes -->
  <section class="featurettes">
    <v-container>
      <div class="section-content">
        <v-row>
          <v-col>
            <v-row class="align-items-center">
              <div class="col-md-8 offset-md-right-2 col-sm-6">
                <v-img class="my-5" :src="prototypes" />
              </div>
              <div class="col-md-4 col-sm-6" data-aos="fade-right">
                <h2 class="mb-4">{{ $t('our_prototypes_title') }}</h2>
                <p>{{ $t('our_prototypes_description') }}</p>
                <router-link v-slot="{ navigate }" to="/robots" custom>
                  <button class="btn btn-primary" @click="navigate">
                    {{ $t('our_robots').toUpperCase() }}
                  </button>
                </router-link>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>

  <!-- Team members -->
  <section class="featurettes">
    <div class="container">
      <div class="section-content">
        <v-row>
          <v-col>
            <div class="row align-items-center">
              <div class="col-md-4 col-sm-6">
                <h2 class="mb-4">{{ $t('our_team_title') }}</h2>
                <p>{{ $t('our_team_description') }}</p>
                <router-link v-slot="{ navigate }" to="/team" custom>
                  <button class="btn btn-primary" @click="navigate">
                    {{ $t('btn_learn_more').toUpperCase() }}
                  </button>
                </router-link>
              </div>
              <div
                class="col-md-8 offset-md-right-2 col-sm-6"
                data-aos="flip-right"
              >
                <v-img class="my-5" :src="teamcaprarobot" />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>

  <!-- Sponsors -->
  <section>
    <div class="container">
      <div class="section-content">
        <div class="row">
          <div class="col-md-12">
            <div class="title-wrap mb-5">
              <h2>{{ $t('people_that_love_to_work_with_us') }}</h2>
            </div>
          </div>
          <SponsorComponent />
        </div>
      </div>
    </div>
  </section>
</template>
