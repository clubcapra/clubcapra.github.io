<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import type { Event } from '@clubcapra/data/events';

const props = defineProps<{
  event: Event;
}>();

const formatter = new Intl.NumberFormat('en-US', {
  minimumIntegerDigits: 2,
  useGrouping: false,
});

const w = ref(0);
const d = ref(0);
const h = ref(0);
const m = ref(0);
const s = ref(0);

const weeks = computed(() => (w.value > 1 ? 'semaines' : 'semaine'));
const days = computed(() => (d.value > 1 ? 'jours' : 'jour'));
const hours = computed(() => (h.value > 1 ? 'heures' : 'heure'));
const minutes = computed(() => (m.value > 1 ? 'minutes' : 'minute'));
const seconds = computed(() => (s.value > 1 ? 'secondes' : 'seconde'));

let interval: number;

/**
 * Update the timer every second.
 */
function updateTimer() {
  const now = new Date().getTime();
  const distance = props.event.date.getTime() - now;

  if (distance < 0) {
    return;
  }

  d.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  w.value = Math.floor(d.value / 7);
  h.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  m.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  s.value = Math.floor((distance % (1000 * 60)) / 1000);
}

onMounted(() => {
  interval = setInterval(updateTimer, 1000);
});
onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="timer">
    <h2 class="timer-title">{{ event.title }}</h2>
    <div class="timer-date">
      <div>
        <p class="timer-data">{{ d }}</p>
        <p class="timer-tag">{{ days }}</p>
      </div>
      <div>
        <p class="timer-data">{{ formatter.format(h) }}</p>
        <p class="timer-tag">{{ hours }}</p>
      </div>
      <div>
        <p class="timer-data">{{ formatter.format(m) }}</p>
        <p class="timer-tag">{{ minutes }}</p>
      </div>
      <div>
        <p class="timer-data">{{ formatter.format(s) }}</p>
        <p class="timer-tag">{{ seconds }}</p>
      </div>
    </div>
    <p class="timer-tag font-bold">{{ w }} {{ weeks }}</p>
  </div>
</template>

<style>
.timer {
  text-align: center;
  font-family: ui-sans-serif, system-ui, sans-serif;
  display: flex;
  flex-direction: column;
}
.timer * {
  display: inline-block;
  margin: 0 5px;
  flex-grow: 0;
}
.timer-title {
  font-weight: bold;
}
.timer .timer-data {
  display: block;
  height: 100%;
  font-size: 30px;
  line-height: 30px;
  font-weight: bold;
}
.timer-tag {
  display: block;
  font-size: 15px;
}
</style>
