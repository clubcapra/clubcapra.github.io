<script setup lang="ts">
// Components
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';
import MissionComponent from '@clubcapra/components/MissionComponent.vue';
import SponsorComponent from '@clubcapra/components/SponsorComponent.vue';

// Media
import introTrimmed from '@clubcapra/assets/media/intro_trimmed.mp4';
import prototypes from '@clubcapra/assets/media/prototypes.jpg';
import teamcaprarobot2024 from '@clubcapra/assets/media/team_capra_robot_2024.jpg';
</script>

<template>
  <JumbotronVideoComponent title="CAPRA" :video="introTrimmed" />

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
              <div
                class="col-md-8 offset-md-right-2 col-sm-6"
                data-aos="flip-right"
              >
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
              <div class="col-md-4 col-sm-6" data-aos="fade-right">
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
                <v-img class="my-5" :src="teamcaprarobot2024" />
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
      <div class="section-content" data-aos="fade-up">
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
