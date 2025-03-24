<script setup lang="ts">
import { useI18n } from 'vue-i18n';
// Components
import MemberItemComponent from '@clubcapra/components/MemberItemComponent.vue';

// Media
import defaultAvatar from '@clubcapra/assets/media/members/avatar.png';
import {
  administrationTeam,
  electricalTeam,
  mechanicalTeam,
  softwareTeam,
} from '@clubcapra/data/members';

const { t } = useI18n();
const sections = [
  { title: 'team_administration', members: administrationTeam },
  { title: 'team_mechanical', members: mechanicalTeam },
  { title: 'team_electrical', members: electricalTeam },
  { title: 'team_software', members: softwareTeam },
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
