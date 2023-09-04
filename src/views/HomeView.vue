<script setup lang="ts">
// Components
import SponsorComponent from '@clubcapra/components/SponsorComponent.vue';
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';
import MissionComponent from '@clubcapra/components/MissionComponent.vue';

// Media
import introTrimmed from '@clubcapra/assets/media/intro_trimmed.mp4';
import teamcaprarobot from '@clubcapra/assets/media/teamcaprarobot.png';
import prototypes from '@clubcapra/assets/media/prototypes.jpg';

// Files
import partenariatFile from '@clubcapra/assets/documents/CAPRA_PlanPartenariat.pdf';
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
              <!--/ .col-md-4.col-md-offset-right-2.col-sm-6 -->
              <div class="col-md-4 col-sm-6" data-aos="fade-right">
                <h2 class="mb-4">Nos prototypes</h2>
                <p>
                  L’équipe Capra conçoit des robots depuis 1999. Notre mission a
                  changé depuis 2016 pour nous spécialiser en robotique de
                  recherche et secourisme.
                </p>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick="location.href='robots';"
                >
                  NOS ROBOTS
                </button>
              </div>
              <!--/ .col-md-4.col-md-offset-2.col-sm-6 -->
            </v-row>
            <!--/ .featurettes-item -->
          </v-col>
          <!--/ .col-md-12 -->
        </v-row>
        <!--/ .row -->
      </div>
    </v-container>
    <!--/ .container -->
  </section>

  <!-- Team members -->
  <section class="featurettes">
    <div class="container">
      <div class="section-content">
        <div class="row">
          <div class="col-md-12">
            <div class="row align-items-center">
              <div class="col-md-4 col-sm-6" data-aos="fade-right">
                <h2 class="mb-4">Notre Équipe</h2>
                <p>
                  Notre équipe multidisciplinaire est toujours prête à faire
                  face aux différents défis !
                </p>
                <router-link v-slot="{ navigate }" to="/team" custom>
                  <button class="btn btn-primary" @click="navigate">
                    EN SAVOIR PLUS
                  </button>
                </router-link>
              </div>
              <!--/ .col-md-4.col-md-offset-2.col-sm-6 -->

              <div
                class="col-md-8 offset-md-right-2 col-sm-6"
                data-aos="flip-right"
              >
                <v-img class="my-5" :src="teamcaprarobot" />
              </div>
              <!--/ .col-md-4.col-md-offset-right-2.col-sm-6 -->
            </div>
            <!--/ .featurettes-item -->
          </div>
          <!--/ .col-md-12 -->
        </div>
        <!--/ .row -->
      </div>
    </div>
  </section>

  <!-- Sponsors -->
  <section>
    <div class="container">
      <div class="section-content" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <!-- Section Title -->
            <div class="title-wrap mb-5">
              <h2>Ceux qui aiment travailler avec nous</h2>
            </div>
            <!-- End of Section Title -->
          </div>
          <!-- Client Holder -->
          <SponsorComponent />
        </div>
        <div class="col-md-12">
          <div class="mt-3 text-center">
            <a :href="partenariatFile" target="_blank" class="btn btn-primary">
              DÉCOUVRIR LE PLAN DE PARTENARIAT
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
