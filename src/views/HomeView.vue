<script setup lang="ts">
// Components
import SponsorHolderComponent from '@clubcapra/components/SponsorHolderComponent.vue';
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';

// Media
import introTrimmed from '@clubcapra/assets/media/intro_trimmed.mp4';
import teamcaprarobot from '@clubcapra/assets/media/teamcaprarobot.png';
import prototypes from '@clubcapra/assets/media/prototypes.jpg';
</script>

<template>
  <JumbotronVideoComponent title="CAPRA" :video="introTrimmed" />
  <section id="content">
    <section id="features" class="featurettes">
      <div class="container">
        <div class="section-content">
          <div class="title-wrap" data-aos="fade-up">
            <h2 class="section-title">Notre mission</h2>
          </div>

          <div class="row text-center">
            <div class="col-md-4 col-sm-6" data-aos="fade-up">
              <span class="lnr lnr-heart lnr-icon fs-40 py-4 d-block" />
              <h5 class="mb-4">Sauver des vies</h5>
              <p>
                Utiliser la robotique afin de créer des solutions qui peuvent
                avoir un impact direct sur la vie des gens.
              </p>
            </div>
            <!-- /.col-md-4 col-sm-6  -->
            <div
              class="col-md-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span class="lnr lnr-star lnr-icon fs-40 py-4 d-block" />
              <h5 class="mb-4">Compétitionner</h5>
              <p>
                Participer et se démarquer dans des compétitions de robotique à
                travers le monde.
              </p>
            </div>
            <!-- /.col-md-4 col-sm-6  -->
            <div
              class="col-md-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span
                class="lnr lnr-graduation-hat lnr-icon fs-40 py-4 d-block"
              />
              <h5 class="mb-4">Former des ingénieurs</h5>
              <p>
                Pousser nos membres à développer une multitude de compétences en
                ingénierie.
              </p>
            </div>
            <!-- /.col-md-4 col-sm-6  -->
          </div>
        </div>
      </div>
    </section>
    <!-- End of Features Section-->
    <section class="featurettes">
      <div class="container">
        <div class="section-content">
          <div class="row">
            <div class="col-md-12">
              <div class="row align-items-center">
                <div
                  class="col-md-8 offset-md-right-2 col-sm-6"
                  data-aos="flip-right"
                >
                  <img class="my-5" :src="prototypes" />
                </div>
                <!--/ .col-md-4.col-md-offset-right-2.col-sm-6 -->
                <div class="col-md-4 col-sm-6" data-aos="fade-right">
                  <h2 class="mb-4">Nos prototypes</h2>
                  <p>
                    L’équipe Capra conçoit des robots depuis 1999. Notre mission
                    a changé depuis 2016 pour nous spécialiser en robotique de
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
              </div>
              <!--/ .featurettes-item -->
            </div>
            <!--/ .col-md-12 -->
          </div>
          <!--/ .row -->
        </div>
      </div>
      <!--/ .container -->
    </section>
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
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick="location.href='team';"
                  >
                    EN SAVOIR PLUS
                  </button>
                </div>
                <!--/ .col-md-4.col-md-offset-2.col-sm-6 -->

                <div
                  class="col-md-8 offset-md-right-2 col-sm-6"
                  data-aos="flip-right"
                >
                  <img class="my-5" :src="teamcaprarobot" />
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
      <!--/ .container -->
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
            <SponsorHolderComponent />
          </div>
          <div class="col-md-12">
            <div class="mt-3 text-center">
              <button
                class="btn btn-primary"
                onClick="location.href='documents/CAPRA_PlanPartenariat.pdf'"
              >
                DÉCOUVRIR LE PLAN DE PARTENARIAT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
