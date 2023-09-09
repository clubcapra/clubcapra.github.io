<script setup lang="ts">
// Components
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';

// Media
import team2021 from '@clubcapra/assets/media/team2021_2.jpg';
import robotcuprescue from '@clubcapra/assets/media/robotcuprescue.png';

// Bangkok
import bangkokBG from '@clubcapra/assets/media/bangkok/bangkokBG.jpg';
import bangkokTeamWorking1 from '@clubcapra/assets/media/bangkok/team_working1.jpg';
import bangkokTeamWorking2 from '@clubcapra/assets/media/bangkok/team_working2.jpg';
import bangkokTeam2022 from '@clubcapra/assets/media/bangkok/team_2022.jpg';
import bangkokMarkhorDex from '@clubcapra/assets/media/bangkok/markhor_dex.jpg';
import bangkokRrl from '@clubcapra/assets/media/bangkok/rrl.jpg';

// Dortmund
import dortmundBG from '@clubcapra/assets/media/dortmund/dortmund.jpg';
import dortmungMarkhorReparation from '@clubcapra/assets/media/dortmund/markhor_reparation.jpg';
import dortmundMarkhorObstacle from '@clubcapra/assets/media/dortmund/markhor_obstacle.jpg';
import dortmundMarkhorUI from '@clubcapra/assets/media/dortmund/markhor_ui.jpg';
import dortmundTeam2021 from '@clubcapra/assets/media/dortmund/team2021.jpg';
import dortmundMarkhorAssemblage from '@clubcapra/assets/media/dortmund/markhor_assemblage.jpg';
import dortmundMarkhorParcours from '@clubcapra/assets/media/dortmund/markhor_parcours.jpg';

// Sydney
import syndeyBG from '@clubcapra/assets/media/sydney/sydney.jpg';
import syndneyCompTeam2019 from '@clubcapra/assets/media/sydney/comp_team_2019.jpg';
import syndneyRC2019v2 from '@clubcapra/assets/media/sydney/rc2019_2.jpg';
import syndneyRC2019v3 from '@clubcapra/assets/media/sydney/rc2019_3.jpg';
import syndneyTakin1 from '@clubcapra/assets/media/sydney/takin1.jpg';
import syndneyTakin5 from '@clubcapra/assets/media/sydney/takin5.jpg';
import syndneyTakinAssemblage from '@clubcapra/assets/media/sydney/takin_assemblage.jpg';
</script>

<template>
  <JumbotronVideoComponent title="Compétitions" :img="team2021" />
  <section id="section-featurettes" class="featurettes">
    <v-container>
      <div class="section-content">
        <v-row>
          <v-col>
            <div class="row align-items-center">
              <div class="col-md-4 col-sm-6" data-aos="fade-right">
                <h2 class="mb-4">RoboCupRescue</h2>
                <p>{{ $t('competition_robocuprescue_description') }}</p>
                <a
                  class="btn btn-primary"
                  href="https://rrl.robocup.org/"
                  target="_blank"
                >
                  {{ $t('btn_learn_more').toUpperCase() }}
                </a>
              </div>
              <div
                class="col-md-8 offset-md-right-2 col-sm-6"
                data-aos="flip-right"
              >
                <v-img
                  class="my-5"
                  :src="robotcuprescue"
                  alt="Robocup Rescue Image"
                />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
  <!-- Testimonial Section-->
  <section
    id="bangkok-title"
    class="overlay section-separator-bg"
    :style="`background-image: url(${bangkokBG})`"
  >
    <div class="section-separator container text-center">
      <h2 class="mb-4">BANGKOK 2022</h2>
    </div>
  </section>
  <div class="container py-4">
    <div class="row">
      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          :src="bangkokTeamWorking1"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Bangkok Team Working 1"
        />
        <img
          :src="bangkokTeamWorking2"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Bangkok Team Working 2"
        />
      </div>
      <div class="col-lg-8 col-md-12 mb-4 mb-lg-0">
        <img
          :src="bangkokTeam2022"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Bangkok Team 2022"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mb-4 mb-lg-0">
        <img
          :src="bangkokMarkhorDex"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Bangkok Markhor Dex"
        />
      </div>
      <div class="col-md-8 mb-4 mb-lg-0">
        <img
          :src="bangkokRrl"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Bangkok RRL"
        />
      </div>
    </div>
  </div>
  <section
    id="dortmund-title"
    class="section-separator-bg overlay"
    :style="`background-image: url(${dortmundBG}) `"
  >
    <div class="section-separator container text-center">
      <h2 class="mb-4">DORTMUND 2021</h2>
    </div>
  </section>
  <div class="container py-4">
    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          :src="dortmungMarkhorReparation"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Markhor Réparation"
        />

        <img
          :src="dortmundMarkhorObstacle"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Markhor Obstacle"
        />
        <img
          :src="dortmundMarkhorUI"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Markhor UI"
        />
      </div>

      <div class="col-lg-8 mb-4 mb-lg-0">
        <img
          :src="dortmundTeam2021"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Équipe 2021"
        />
        <div class="row">
          <div class="col-md-6">
            <img
              :src="dortmundMarkhorAssemblage"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Markhor Assemblage"
            />
          </div>
          <div class="col-md-6">
            <img
              :src="dortmundMarkhorParcours"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Markhor Parcours"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <section
    id="sydney-title"
    class="sydney-section-separator-bg overlay"
    style="background-image: url(src/assets/media/sydney/sydney.jpg)"
  >
    <div class="section-separator container text-center">
      <h2 class="mb-4">SYDNEY 2019</h2>
    </div>
  </section>
  <div class="container py-4">
    <div class="row">
      <div class="col-lg-8 mb-4 mb-lg-0">
        <img
          src="src/assets/media/sydney/comp_team_2019.JPG"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Équipe 2021"
        />
        <img
          src="src/assets/media/sydney/rc2019_2.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Markhor Assemblage"
        />
      </div>
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src="src/assets/media/sydney/rc2019_3.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Markhor Réparation"
        />

        <img
          src="src/assets/media/sydney/takin1.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Markhor Obstacle"
        />
        <img
          src="src/assets/media/sydney/takin5.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Markhor UI"
        />
        <img
          src="src/assets/media/sydney/takin_assemblage.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Markhor UI"
        />
      </div>
    </div>
  </div>
</template>
