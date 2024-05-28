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
    program: 'engineering_electrical',
    title: 'title_captain',
  },
  {
    name: 'William Jarry',
    program: 'engineering_software',
    title: 'title_co_captain',
  },
  {
    name: 'Mathieu Salois',
    program: 'engineering_software',
    title: 'title_co_captain_treasury',
  },
  {
    name: 'Nicolas Vigneault',
    program: 'engineering_gpa',
    title: 'title_technical_director',
  },
  {
    name: 'Iliana De Carufel',
    program: 'engineering_software',
    title: 'title_technical_director_f',
  },
];
const mechanical: Member[] = [
  {
    name: 'Kevin Larochelle',
    img: kevinLarochelle,
    program: 'engineering_gpa',
    title: 'title_mechanical_team_leader',
  },
  {
    name: 'Bonzly Noël',
    program: 'engineering_mechanical',
  },
  {
    name: 'Maxime Rolland',
    img: maximeRolland,
    program: 'engineering_gpa',
  },
  {
    name: 'William Zamudio-Turcotte',
    program: 'engineering_gpa',
  },
  {
    name: 'Samuel Lagassé',
    program: 'engineering_mechanical',
  },
  {
    name: 'Philippe-Antoine Fortin',
    program: 'engineering_mechanical',
  },
  {
    name: 'Antony Afif',
    program: 'engineering_electrical',
  },
];
const electrical: Member[] = [
  {
    name: 'Amber Louie',
    img: amberLouie,
    program: 'engineering_electrical',
    title: 'title_electrical_team_leader',
  },
  {
    name: 'Benoit Malenfant',
    img: benoitMalenfant,
    program: 'engineering_electrical',
  },
  {
    name: 'Léo-Daniel Gosselin',
    img: leoDanielGosselin,
    program: 'engineering_gpa',
  },
  {
    name: 'Antoine Maltais',
    program: 'engineering_electrical',
  },
  {
    name: 'Guy-Philippe Nadon',
    program: 'engineering_software',
  },
  {
    name: 'Christian Bourget',
    program: 'engineering_gpa',
  },
  {
    name: 'Étienne Le Guerrier',
    program: 'engineering_electrical',
  },
  {
    name: 'Jordan Morinville',
    program: 'engineering_electrical',
  },
  {
    name: 'Alexis Girardin',
    program: 'engineering_electrical',
  },
  {
    name: 'Karl Aidans',
    program: 'engineering_electrical',
  },
  {
    name: 'Philippe Desbiens',
    program: 'engineering_electrical',
  },
  {
    name: 'Émile Lacroix',
    program: 'engineering_electrical',
  },
];
const software: Member[] = [
  {
    name: 'Nathan Gueissaz-Teufel',
    program: 'engineering_software',
    title: 'title_software_team_leader',
  },
  {
    name: 'Samuel Lachance',
    program: 'engineering_software',
  },
  {
    name: 'Marc-Olivier Champagne',
    img: marcOlivierChampagne,
    program: 'engineering_software',
  },
  {
    name: 'Gabriel Lévesque-Duval',
    img: gabrielLevesqueDuval,
    program: 'engineering_software',
  },
  {
    name: 'Simon Roy',
    program: 'engineering_software',
  },
  {
    name: 'Alexis Martin',
    img: alexisMartin,
    program: 'engineering_software',
  },
  {
    name: 'Jacob Clermont',
    program: 'engineering_software',
  },
  {
    name: 'Denis Turk',
    program: 'engineering_software',
  },
  {
    name: 'Raphaël Vigneault',
    program: 'engineering_gpa',
  },
  {
    name: 'Suzon Olory',
    program: 'engineering_software_master',
  },
  {
    name: 'Simon St-André',
    program: 'engineering_software',
  },
  {
    name: 'Charles Albert Choupin',
    program: 'engineering_software',
  },
  {
    name: 'Samuel Barbeau',
    program: 'engineering_software',
  },
  {
    name: 'Laurent St-Hilaire',
    program: 'engineering_software',
  },
];

const { t } = useI18n();
const sections = [
  { title: 'team_administration', members: administration },
  { title: 'team_mechanical', members: mechanical },
  { title: 'team_electrical', members: electrical },
  { title: 'team_software', members: software },
];
</script>

<template>
  <JumbotronVideoComponent :title="$t('our_team_title')" :img="teamCapra" />
  <section id="features">
    <div class="container">
      <div class="section-content">
        <template v-for="(section, key) in sections" :key="key">
          <div class="title-wrap" data-aos="fade-up">
            <h2 class="section-title">{{ t(section.title) }}</h2>
          </div>

          <div class="row justify-content-center">
            <MemberItemComponent
              v-for="(member, j) in section.members"
              :key="j"
              :name="member.name"
              :img="member.img ?? defaultAvatar"
              :program="$t(member.program)"
              :title="
                member.title == undefined ? $t('team_member') : $t(member.title)
              "
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
