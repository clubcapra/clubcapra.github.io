<script setup lang="ts">
// Components
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';
import MemberItemComponent from '@clubcapra/components/MemberItemComponent.vue';

// Media
import teamCapra from '@clubcapra/assets/media/teamcapra.jpg';
interface Member {
  name: string;
  img?: string;
  program: string;
  title?: string;
}

import defaultAvatar from '@clubcapra/assets/media/team/avatar.png';

const members: { [category: string]: Member[] } = {};

const administration: Member[] = [
  {
    name: 'David Caron',
    img: 'src/assets/media/team/david.jpg',
    program: 'Génie Électrique',
    title: 'Capitaine',
  },
  {
    name: 'Benoit Malenfant',
    img: 'src/assets/media/team/ben.jpg',
    program: 'Génie Électrique',
    title: 'Co-Capitaine',
  },
  {
    name: 'Mathieu Salois',
    program: 'Génie Logiciel',
    title: 'Trésorier',
  },
  {
    name: 'Guy-Philippe Nadon',
    program: 'Génie Logiciel',
    title: 'Directeur Technique',
  },
  {
    name: 'Nicolas Vigneault',
    program: 'Génie Logiciel',
    title: 'Directeur Technique',
  },
];

const mecanique: Member[] = [
  {
    name: 'Kevin Larochelle',
    img: 'src/assets/media/team/kev.jpg',
    program: 'Génie de la Production Automatisée',
    title: 'Chef Mécanique',
  },
  {
    name: 'Noémie Godbout',
    program: 'Génie de la Production Automatisée',
    title: 'Chef Mécanique',
  },
  {
    name: 'Maxime Bernard',
    img: 'src/assets/media/team/maxb.jpg',
    program: 'Génie Mécanique',
  },
  {
    name: 'Gabriel Rondeau-Bouvrette',
    img: 'src/assets/media/team/gabrb.jpg',
    program: 'Génie Mécanique',
  },
  {
    name: 'Maxime Rolland',
    img: 'src/assets/media/team/maxrolland.jpg',
    program: 'Génie de la Production Automatisée',
  },
];

const electrique: Member[] = [
  {
    name: 'Amber Louie',
    img: 'src/assets/media/team/amber.jpg',
    program: 'Génie Électrique',
    title: 'Chef Électrique',
  },
  {
    name: 'Asma Djoual',
    program: 'Génie Électrique',
  },
  {
    name: 'Léo-Daniel Gosselin',
    img: 'src/assets/media/team/leo.jpg',
    program: 'Génie de la Production Automatisée',
  },
  {
    name: 'Suzon Olory',
    program: 'Génie Électrique',
  },
];

const logiciel: Member[] = [
  {
    name: 'Samuel Lachance',
    program: 'Génie Logiciel',
    title: 'Chef Logiciel',
  },
  {
    name: 'Marc-Olivier Champagne',
    img: 'src/assets/media/team/marco.jpg',
    program: 'Génie Logiciel',
  },
  {
    name: 'Cloé Dutil',
    img: 'src/assets/media/team/cloe.jpg',
    program: 'Génie Logiciel',
  },
  {
    name: 'Michael Gagnon',
    img: 'src/assets/media/team/mike.jpg',
    program: 'Génie Logiciel',
  },
  {
    name: 'Alexandre Lapointe',
    img: 'src/assets/media/team/alex.jpg',
    program: 'Génie de la Production Automatisée',
  },
  {
    name: 'Gabriel Lévesque-Duval',
    img: 'src/assets/media/team/gabld.jpg',
    program: 'Génie Logiciel',
  },
  {
    name: 'Simon Roy',
    program: 'Génie Logiciel',
  },
  {
    name: 'Alexis Martin',
    program: 'Génie Logiciel',
  },
];

// Capitaine:
//   David, Caron

// Co-Capitaine:
//   William, Jarry
//   Bonzly, Noël
//   Mathieu, Salois

// Trésorier:
//   Mathieu, Salois

// Directeurs techniques:
//   Guy-Philippe Nadon
//   Nicolas, Vigneault

// Électrique:
//   Chef Électrique:
//     Amber, Louie
//   Membre:
//     Asma, Djoual
//     Léo-Daniel, Gosselin
//     Benoit, Malenfant
//     Suzon, Olory

// Mécanique:
//   Chef Mécanique:
//     Kevin, Larochelle
//     Noémie, Godbout
//   Membres:
//     Maxime, Rolland
//     Gabriel, Rondeau-Bouvrette
//     Pierre-Luc, Villeneuve
//     Asma Nouara, Yahiaoui
//     William, Zamudio-Turcotte
//     Maxime, Bernard
//     Guillaume, Beaufort-Samson

// Logiciel:
//   Chef Logiciel:
//     Samuel, Lachance
//   Membres:
//     Marc-Olivier, Champagne
//     Cloé, Dutil
//     Michael, Gagnon
//     Alexandre, Lapointe
//     Gabriel, Lévesque-Duval
//     Yulia, Bakaleinik
//     Mohamed Redha, Meddad
//     Daouda Faye, Ngom
//     Simon, Roy
//     Alexis, Martin
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
          <MemberItemComponent
            v-for="(member, i) in administration"
            :key="i"
            :name="member.name"
            :img="member.img ?? defaultAvatar"
            :program="member.program"
            :title="member.title"
          />

          <!--end col-->
        </div>
        <!--end row-->
        <div class="member-title-wrap" data-aos="fade-up">
          <h2 class="section-title">Mécanique</h2>
        </div>

        <div class="row justify-content-center">
          <MemberItemComponent
            v-for="(member, i) in mecanique"
            :key="i"
            :name="member.name"
            :img="member.img ?? defaultAvatar"
            :program="member.program"
            :title="member.title"
          />
        </div>
        <!--end row-->
        <div class="member-title-wrap" data-aos="fade-up">
          <h2 class="section-title">Électrique</h2>
        </div>

        <div class="row justify-content-center">
          <MemberItemComponent
            v-for="(member, i) in electrique"
            :key="i"
            :name="member.name"
            :img="member.img ?? defaultAvatar"
            :program="member.program"
            :title="member.title"
          />
        </div>
        <!--end row-->
        <div class="member-title-wrap" data-aos="fade-up">
          <h2 class="section-title">Logiciel</h2>
        </div>

        <div class="row justify-content-center">
          <MemberItemComponent
            v-for="(member, i) in logiciel"
            :key="i"
            :name="member.name"
            :img="member.img ?? defaultAvatar"
            :program="member.program"
            :title="member.title"
          />
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

.section-title .member-title {
  letter-spacing: 0.5px;
  font-size: 30px;
}
</style>
