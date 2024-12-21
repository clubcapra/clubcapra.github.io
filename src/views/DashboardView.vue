<script setup lang="ts">
import { ref } from 'vue';
import capraLongLogo from '@clubcapra/assets/media/capra_long.svg';
import pedro from '@clubcapra/assets/media/dashboard/pedro.gif';

import TimerComponent from '@clubcapra/components/TimerComponent.vue';
import NewsComponent from '@clubcapra/components/NewsComponent.vue';

import { events, EventTypes } from '@clubcapra/data/events';
import type { Event } from '@clubcapra/data/events';

const filteredEvents = ref<Event[]>([]);
const competitionEvents = ref<Event[]>([]);

filterEvents();

/**
 * Filter the events to only show the ones that are in the future.
 */
async function filterEvents() {
  updateEvents();
  while (filteredEvents.value.length != 0) {
    let resolve: (value?: unknown) => void;
    const promise = new Promise(r => {
      resolve = r;
    });
    setTimeout(() => {
      resolve();
    }, filteredEvents.value[0].date.getTime() - new Date().getTime());
    await promise;

    updateEvents();
  }
}

/**
 * Filter the events to only show the ones that are in the future.
 */
function updateEvents() {
  filteredEvents.value = events.filter(event => {
    return event.date && event.date > new Date();
  });

  competitionEvents.value = events.filter(event => {
    return (
      event.date &&
      event.date > new Date() &&
      event.eventType == EventTypes.COMPETITION
    );
  });
}
</script>

<template>
  <div class="container flex flex-col h-screen w-screen m-auto">
    <div class="header bg-black flex flex-row">
      <TimerComponent
        v-if="competitionEvents.length > 0"
        :event="competitionEvents[0]"
      />
      <img class="w-0" :src="capraLongLogo" />
      <TimerComponent
        v-if="competitionEvents.length > 0"
        :event="
          competitionEvents.length > 1
            ? competitionEvents[1]
            : competitionEvents[0]
        "
      />
    </div>
    <div class="flex flex-row grow h-0">
      <div class="flex grow">
        <img
          class="rounded-full h-3/5 m-auto border-white"
          :src="pedro"
          alt="Pedro"
        />
      </div>
      <div
        class="events scroll-auto flex flex-col flex-wrap overflow-hidden w-96"
      >
        <div
          v-for="event in filteredEvents"
          :key="event.title"
          class="relative flex flex-col bg-white w-96"
        >
          <div class="p-4">
            <h5 class="mb-2 text-slate-800 text-xl font-semibold">
              {{ event.title }}
            </h5>
            <p class="text-slate-600 leading-normal">
              {{
                event.date.toLocaleDateString('fr', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              }}
              <span v-if="event.eventType != EventTypes.COMPETITION">
                à
                {{
                  event.date.toLocaleTimeString('fr', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                }}
              </span>
            </p>
            <p class="text-slate-600 leading-normal font-light">
              {{ event.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <NewsComponent />
  </div>
</template>

<style>
.container {
  max-width: unset !important;
  max-height: unset !important;
}

.header {
  padding: 0.5%;
}

.header * {
  flex-grow: 1;
  text-align: center;
  color: white;
}
</style>
