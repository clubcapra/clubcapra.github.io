<!-- eslint-disable prettier/prettier -->
<template>
  <v-app-bar absolute density="compact" color="white" id="robot-navbar">
    <v-list-item
      class="robot-btn"
      density="compact"
      :title="$t('our_robots')"
    />
    <v-spacer />
    <v-list-item
      v-for="name in robotsName"
      :key="name"
      class="robot-btn"
      :class="selectedRobot == name? 'robot-btn-active':''"
      density="compact"
      :title="name"
      @click="selectRobot(name)"
    />
  </v-app-bar>
  <full-page id="fullpage">
    <slot />
  </full-page>
</template>

<script lang="ts">
console.log('load');
import { ref, provide } from 'vue';
export default {
  setup(props, { slots }) {
    const robotsName = ref(
      slots.default().map(robot => robot.children.map(c => c.key))
    ).value[0];
    const selectedRobot = ref(robotsName[0]);

    /**
     * Select the robot to show, the name must be unique.
     */
    function selectRobot(name: string) {
      selectedRobot.value = name;
      console.log('test');
      setTimeout(
        () =>
          // eslint-disable-next-line no-undef, camelcase
          fullpage_api.render(),
        1
      ); // executed too soon: may be changed
    }

    provide('selectedRobot', selectedRobot);

    return {
      robotsName,
      selectedRobot,
      selectRobot,
    };
  },
};
</script>

<style>
.robot-btn {
  color: rgb(244, 67, 54);
}
.robot-btn-active {
  background-color: rgb(244, 67, 54, 0.9);
  color: white;
}
#robot-navbar {
  opacity: 0;
}

#robot-navbar {
  animation: fadeout 3s;
}

header:hover + main > header,
#robot-navbar:hover {
  animation: fadein 3s !important;
  opacity: 1;
}

header:hover + main > header {
  opacity: 1 !important;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
