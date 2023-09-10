<script setup lang="ts">
// Components
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';

// Media
import teamCapra from '@clubcapra/assets/media/teamcapra.jpg';
</script>

<template>
  <JumbotronVideoComponent :title="$t('our_team_title')" :img="teamCapra" />
  <section id="features" class="">
    <div class="container">
      <div class="section-content">
        <div class="title-wrap" data-aos="fade-up">
          <h2 class="section-title">Administration</h2>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/marco.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Marc-Olivier Champagne</h4>
                <small>Capitaine</small>
                <br />
                <small class="text-muted">Génie Logiciel</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/ben.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Benoit Malenfant</h4>
                <small>Co-Capitaine</small>
                <br />
                <small class="text-muted">Génie Électrique</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/alexis.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Alexis Martin</h4>
                <small>Trésorier</small>
                <br />
                <small class="text-muted">Génie Logiciel</small>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
        <div class="title-wrap" data-aos="fade-up">
          <h2 class="section-title">Mécanique</h2>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/kev.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Kevin Larochelle</h4>
                <small>Chef Mécanique</small>
                <br />
                <small class="text-muted">
                  Génie de la Production Automatisée
                </small>
              </div>
            </div>
          </div>
          <!--end col-->
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/maxb.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Maxime Bernard</h4>
                <small class="text-muted">Génie Mécanique</small>
              </div>
            </div>
          </div>
          <!--end col-->
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/gabrb.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Gabriel Rondeau-Bouvrette</h4>
                <small class="text-muted">Génie Mécanique</small>
              </div>
            </div>
          </div>
          <!--end col-->
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/maxrolland.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Maxime Rolland</h4>
                <small class="text-muted">
                  Génie de la Production Automatisée
                </small>
              </div>
            </div>
          </div>
        </div>
        <!--end row-->
        <div class="title-wrap" data-aos="fade-up">
          <h2 class="section-title">Électrique</h2>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/david.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">David Caron</h4>
                <small>Chef Électrique</small>
                <br />
                <small class="text-muted">Génie Électrique</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/amber.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Amber Louie</h4>
                <small class="text-muted">Génie Électrique</small>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
        <div class="title-wrap" data-aos="fade-up">
          <h2 class="section-title">Logiciel</h2>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/gabld.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Gabriel Lévesque-Duval</h4>
                <small>Chef Logiciel</small>
                <br />
                <small class="text-muted">Génie Logiciel</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/leo.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Léo-Daniel Gosselin</h4>
                <small>Opérateur</small>
                <br />
                <small class="text-muted">
                  Génie de la Production Automatisée
                </small>
              </div>
            </div>
          </div>

          <!--end col-->
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/cloe.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Cloé Dutil</h4>
                <small class="text-muted">Génie Logiciel</small>
              </div>
            </div>
          </div>
          <!--end col-->
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/myriam.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Myriam Lacroix</h4>
                <small class="text-muted">Génie Logiciel</small>
              </div>
            </div>
          </div>
          <!--end col-->
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/alex.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Alexandre Lapointe</h4>
                <small class="text-muted">
                  Génie de la Production Automatisée
                </small>
              </div>
            </div>
          </div>
          <!--end col-->
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/ludo.jpg"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Ludovic Vanasse</h4>
                <small class="text-muted">Génie Logiciel</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/avatar.png"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Yulia Bakaleinik</h4>
                <small class="text-muted">Génie Logiciel</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/avatar.png"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">William Jarry</h4>
                <small class="text-muted">Génie Logiciel</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/avatar.png"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Guy-Philippe Nadon</h4>
                <small class="text-muted">Génie Logiciel</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/avatar.png"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Daouda-Faye Ngom</h4>
                <small class="text-muted">Génie Logiciel</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/avatar.png"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Suzon Olory</h4>
                <small class="text-muted">Génie Logiciel</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/avatar.png"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Simon Roy</h4>
                <small class="text-muted">Génie Logiciel</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
              <img
                src="img/team/avatar.png"
                class="img-fluid avatar avatar-medium shadow rounded-pill"
                alt=""
              />
              <div class="content mt-3">
                <h4 class="title mb-0">Simon Savard</h4>
                <small class="text-muted">Génie Électrique</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
