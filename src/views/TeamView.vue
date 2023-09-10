<script setup lang="ts">
// Components
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';

// Media
import teamCapra from '@clubcapra/assets/media/teamcapra.jpg';
</script>

<template>
  <JumbotronVideoComponent :title="$t('our_team_title')" :img="teamCapra" />
  <section id="features">
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

<style>
.team-list img {
  width: 50%;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.team-list .content {
  width: 50%;
}

.team-list .content .follow {
  position: absolute;
  bottom: 24px;
}

.team-list:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

.team,
.team-list {
  -webkit-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
}

.team .content .title,
.team-list .content .title {
  font-size: 18px;
}

.team .overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.team .member-position,
.team .team-social {
  position: absolute;
  bottom: -35px;
  right: 0;
  left: 0;
  margin: auto 10%;
  z-index: 99;
}

.team .team-social {
  bottom: 40px;
  opacity: 0;
  -webkit-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
}

.team:hover {
  -webkit-transform: translateY(-7px);
  transform: translateY(-7px);
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

.team:hover .overlay {
  opacity: 0.6;
}

.team:hover .team-social {
  opacity: 1;
}

@media (max-width: 768px) {
  .team-list img,
  .team-list .content {
    width: 100%;
    float: none !important;
  }
  .team-list img .follow,
  .team-list .content .follow {
    position: relative;
    bottom: 0;
  }
}

.social-icon.social li a {
  color: #adb5bd;
  border-color: #adb5bd;
}
.social-icon li a {
  color: #35404e;
  border: 1px solid #35404e;
  display: inline-block;
  height: 32px;
  text-align: center;
  font-size: 15px;
  width: 32px;
  line-height: 30px;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  overflow: hidden;
  position: relative;
}
.rounded {
  border-radius: 5px !important;
}

.para-desc {
  max-width: 600px;
}
.text-muted {
  color: #8492a6 !important;
}

.section-title .title {
  letter-spacing: 0.5px;
  font-size: 30px;
}
</style>
