<script setup lang="ts">
import { useI18n } from 'vue-i18n';
// Components
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';
import MemberItemComponent from '@clubcapra/components/MemberItemComponent.vue';

// Media
import defaultAvatar from '@clubcapra/assets/media/team/avatar.png';
import teamCapra from '@clubcapra/assets/media/teamcapra.jpg';

// Members pictures
import davidCaron from '@clubcapra/assets/media/team/davidCaron.jpg';
import benoitMalenfant from '@clubcapra/assets/media/team/benoitMalenfant.jpg';
import kevinLarochelle from '@clubcapra/assets/media/team/kevinLarochelle.jpg';
import maximeBernard from '@clubcapra/assets/media/team/maximeBernard.jpg';
import maximeRolland from '@clubcapra/assets/media/team/maximeRolland.jpg';
import amberLouie from '@clubcapra/assets/media/team/amberLouie.jpg';
import leoDanielGosselin from '@clubcapra/assets/media/team/leoDanielGosselin.jpg';
import marcOlivierChampagne from '@clubcapra/assets/media/team/marcOlivierChampagne.jpg';
import gabrielLevesqueDuval from '@clubcapra/assets/media/team/gabrielLevesqueDuval.jpg';
import alexisMartin from '@clubcapra/assets/media/team/alexisMartin.jpg';

interface Member {
  name: string;
  program: string;
  img?: string; // Default to defaultAvatars
  title?: string; // Default to 'Membre'
}

const administration: Member[] = [
  {
    name: 'David Caron',
    img: davidCaron,
    program: 'Génie Électrique',
    title: 'Capitaine',
  },
  {
    name: 'William Jarry',
    program: 'Génie Logiciel',
    title: 'Co-Capitaine',
  },
  {
    name: 'Mathieu Salois',
    program: 'Génie Logiciel',
    title: 'Trésorier & Co-Capitaine',
  },
  {
    name: 'Nicolas Vigneault',
    program: 'Génie de la Production Automatisée',
    title: 'Directeur Technique',
  },
];
const mechanical: Member[] = [
  {
    name: 'Kevin Larochelle',
    img: kevinLarochelle,
    program: 'Génie de la Production Automatisée',
    title: 'Chef Mécanique',
  },
  {
    name: 'Bonzly Noël',
    program: 'Génie Mécanique',
  },
  {
    name: 'Maxime Bernard',
    img: maximeBernard,
    program: 'Maitrise en Génie de la Production Automatisée',
  },
  {
    name: 'Maxime Rolland',
    img: maximeRolland,
    program: 'Génie de la Production Automatisée',
  },
  {
    name: 'William Zamudio-Turcotte',
    program: 'Génie de la Production Automatisée',
  },
  {
    name: 'Samuel Lagassé',
    program: 'Génie mécanique',
  },
  {
    name: 'Philippe-Antoine',
    program: 'Génie mécanique',
  },
  {
    name: 'Antony Afif',
    program: 'Génie mécanique',
  },
];
const electrical: Member[] = [
  {
    name: 'Amber Louie',
    img: amberLouie,
    program: 'Génie Électrique',
    title: 'Chef Électrique',
  },
  {
    name: 'Benoit Malenfant',
    img: benoitMalenfant,
    program: 'Génie Électrique',
  },
  {
    name: 'Léo-Daniel Gosselin',
    img: leoDanielGosselin,
    program: 'Génie de la Production Automatisée',
  },
  {
    name: 'Antoine Maltais',
    program: 'Génie Électrique',
  },
  {
    name: 'Christian Bourget',
    program: 'Génie de la Production Automatisée',
  },
  {
    name: 'Étienne Le Guerrier',
    program: 'Génie Électrique',
  },
  {
    name: 'Jordan Morinville',
    program: 'Génie Électrique',
  },
  {
    name: 'Alexis Girardin',
    program: 'Génie Électrique',
  },
  {
    name: 'Karl Aidans',
    program: 'Génie Électrique',
  },
  {
    name: 'Philippe Desbiens',
    program: 'Génie Électrique',
  },
  {
    name: 'Émile Lacroix',
    program: 'Génie Électrique',
  },
];
const software: Member[] = [
  {
    name: 'Nathan Gueissaz-Teufel',
    program: 'Génie Logiciel',
    title: 'Chef Logiciel',
  },
  {
    name: 'Samuel Lachance',
    program: 'Génie Logiciel',
  },
  {
    name: 'Guy-Philippe Nadon',
    program: 'Génie Logiciel',
  },
  {
    name: 'Marc-Olivier Champagne',
    img: marcOlivierChampagne,
    program: 'Génie Logiciel',
  },
  {
    name: 'Gabriel Lévesque-Duval',
    img: gabrielLevesqueDuval,
    program: 'Génie Logiciel',
  },
  {
    name: 'Simon Roy',
    program: 'Génie Logiciel',
  },
  {
    name: 'Alexis Martin',
    img: alexisMartin,
    program: 'Génie Logiciel',
  },
  {
    name: 'Jacob Clermont',
    program: 'Génie Logiciel',
  },
  {
    name: 'Denis Turk',
    program: 'Génie Logiciel',
  },
  {
    name: 'Iliana De Carufel',
    program: 'Génie Logiciel',
  },
  {
    name: 'Raphaël Vigneault',
    program: 'Génie De La Production Automatisée',
  },
  {
    name: 'Suzon Orlando',
    program: 'Maitrise en Génie Logiciel',
  },
  {
    name: 'Simon St-André',
    program: 'Génie Logiciel',
  },
  {
    name: 'Charles Albert Choupin',
    program: 'Génie Logiciel',
  },
];

const { t } = useI18n();
const sections = [
  { title: t('team_administration'), members: administration },
  { title: t('team_mechanical'), members: mechanical },
  { title: t('team_electrical'), members: electrical },
  { title: t('team_software'), members: software },
];
</script>

<template>
  <JumbotronVideoComponent :title="$t('our_team_title')" :img="teamCapra" />
  <section id="features">
    <div class="container">
      <div class="section-content">
        <template v-for="(section, key) in sections" :key="key">
          <div class="title-wrap" data-aos="fade-up">
            <h2 class="section-title">{{ section.title }}</h2>
          </div>

          <div class="row justify-content-center">
            <MemberItemComponent
              v-for="(member, j) in section.members"
              :key="j"
              :name="member.name"
              :img="member.img ?? defaultAvatar"
              :program="member.program"
              :title="member.title ?? $t('team_member')"
            />
          </div>
        </template>
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
