<script setup lang="ts">
import { useI18n } from 'vue-i18n';
// Components
import MemberItemComponent from '@clubcapra/components/MemberItemComponent.vue';

// Media
import defaultAvatar from '@clubcapra/assets/media/team/avatar.png';

// Members pictures
import davidCaron from '@clubcapra/assets/media/team/davidCaron.jpg';
import benoitMalenfant from '@clubcapra/assets/media/team/benoitMalenfant.jpg';
import kevinLarochelle from '@clubcapra/assets/media/team/kevinLarochelle.jpg';
import amberLouie from '@clubcapra/assets/media/team/amberLouie.jpg';
import leoDanielGosselin from '@clubcapra/assets/media/team/leoDanielGosselin.jpg';
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
  {
    name: 'Gabriel Rondeau-Brouvette',
    program: 'engineering_mechanical',
  },
  {
    name: 'Martin-Nicolas Primeau-Vincelette',
    program: 'engineering_mechanical',
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
    name: 'Christian Bourget',
    program: 'engineering_gpa',
  },
  {
    name: 'Étienne Le Guerrier',
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
  {
    name: 'Guy-Philippe Nadon',
    program: 'engineering_software',
  },
  {
    name: 'Nicolas Vigneault',
    program: 'engineering_gpa',
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
  <section>
    <div class="container mx-auto px-4 pt-10 pb-20">
      <div class="pt-20 pb-10">
        <h2 class="text-5xl font-bold font-sans text-center">
          {{ t('our_team_title') }}
        </h2>
      </div>
      <div class="flex flex-col gap-8 items-center">
        <template v-for="(section, key) in sections" :key="key">
          <div>
            <h2 class="font-bold font-sans text-3xl md:text-4xl">
              {{ t(section.title) }}
            </h2>
          </div>

          <div class="flex flex-wrap justify-center items-center">
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
