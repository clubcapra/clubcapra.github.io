<script setup lang="ts">
import { useI18n } from 'vue-i18n';
// Components
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';
import MemberItemComponent from '@clubcapra/components/MemberItemComponent.vue';

// Media
import defaultAvatar from '@clubcapra/assets/media/team/avatar.png';
import teamCapra from '@clubcapra/assets/media/teamcapra.jpg';

// Members pictures
import david from '@clubcapra/assets/media/team/david.jpg';
import ben from '@clubcapra/assets/media/team/ben.jpg';
import kev from '@clubcapra/assets/media/team/kev.jpg';
import maxb from '@clubcapra/assets/media/team/maxb.jpg';
import gabrb from '@clubcapra/assets/media/team/gabrb.jpg';
import maxrolland from '@clubcapra/assets/media/team/maxrolland.jpg';
import amber from '@clubcapra/assets/media/team/amber.jpg';
import leo from '@clubcapra/assets/media/team/leo.jpg';
import marco from '@clubcapra/assets/media/team/marco.jpg';
import alex from '@clubcapra/assets/media/team/alex.jpg';
import gabld from '@clubcapra/assets/media/team/gabld.jpg';
import alexis from '@clubcapra/assets/media/team/alexis.jpg';

interface Member {
  name: string;
  program: string;
  img?: string; // Default to defaultAvatars
  title?: string; // Default to 'Membre'
}

const administration: Member[] = [
  {
    name: 'David Caron',
    img: david,
    program: 'Génie Électrique',
    title: 'Capitaine',
  },
  {
    name: 'Bonzly Noël',
    program: 'Génie Mécanique',
    title: 'Co-Capitaine',
  },
  {
    name: 'William Jarry',
    program: 'Génie Logiciel',
    title: 'Co-Capitaine',
  },
  {
    name: 'Benoit Malenfant',
    img: ben,
    program: 'Génie Électrique',
    title: 'Directeur Technique',
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
const mechanical: Member[] = [
  {
    name: 'Kevin Larochelle',
    img: kev,
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
    img: maxb,
    program: 'Génie Mécanique',
  },
  {
    name: 'Gabriel Rondeau-Bouvrette',
    img: gabrb,
    program: 'Génie Mécanique',
  },
  {
    name: 'Maxime Rolland',
    img: maxrolland,
    program: 'Génie de la Production Automatisée',
  },
];
const electrical: Member[] = [
  {
    name: 'Amber Louie',
    img: amber,
    program: 'Génie Électrique',
    title: 'Chef Électrique',
  },
  {
    name: 'Asma Djoual',
    program: 'Génie Électrique',
  },
  {
    name: 'Léo-Daniel Gosselin',
    img: leo,
    program: 'Génie de la Production Automatisée',
  },
];
const software: Member[] = [
  {
    name: 'Samuel Lachance',
    program: 'Génie Logiciel',
    title: 'Chef Logiciel',
  },
  {
    name: 'Marc-Olivier Champagne',
    img: marco,
    program: 'Génie Logiciel',
  },
  {
    name: 'Michael Gagnon',
    program: 'Génie Logiciel',
  },
  {
    name: 'Alexandre Lapointe',
    img: alex,
    program: 'Génie de la Production Automatisée',
  },
  {
    name: 'Gabriel Lévesque-Duval',
    img: gabld,
    program: 'Génie Logiciel',
  },
  {
    name: 'Simon Roy',
    program: 'Génie Logiciel',
  },
  {
    name: 'Alexis Martin',
    img: alexis,
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

// Set title
document.title = t('page_team');
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
