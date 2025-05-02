<script setup lang="ts">
import { useI18n } from 'vue-i18n';
// Components
import MemberItemComponent from '@clubcapra/components/MemberItemComponent.vue';

// Media
import defaultAvatar from '@clubcapra/assets/media/members/avatar.png';
import { teams } from '@clubcapra/data/teams';

const { t } = useI18n();
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
        <template v-for="(team, key) in teams" :key="key">
          <div>
            <h2 class="font-bold font-sans text-3xl md:text-4xl text-center">
              {{
                t(
                  'name' in team
                    ? team.name
                    : 'project' in team
                      ? team.project.name
                      : ''
                )
              }}
            </h2>
            <p class="text-center text-lg font-medium pt-3">
              {{
                'description' in team
                  ? t(team.description)
                  : 'project' in team
                    ? t(team.project.description)
                    : ''
              }}
            </p>
          </div>

          <div class="flex flex-wrap justify-center items-center">
            <MemberItemComponent
              v-if="'leader' in team && team.leader"
              :name="team.leader.name"
              :img="team.leader.img ?? defaultAvatar"
              :program="$t(team.leader.program)"
              :title="
                team.leader.title == undefined
                  ? $t('title_project_manager')
                  : $t(team.leader.title)
              "
              :link="team.leader.link"
            />
            <MemberItemComponent
              v-for="(member, j) in team.members"
              :key="j"
              :name="member.name"
              :img="member.img ?? defaultAvatar"
              :program="$t(member.program)"
              :title="
                member.title == undefined ? $t('team_member') : $t(member.title)
              "
              :link="member.link"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
