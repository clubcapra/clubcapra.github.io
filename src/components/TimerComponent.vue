<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Event } from '@clubcapra/data/events';

const props = defineProps<{
  event: Event;
}>();

const formatter = new Intl.NumberFormat('en-US', {
  minimumIntegerDigits: 2,
  useGrouping: false,
});

const weeks = ref(0);
const days = ref(0);
const hours = ref(formatter.format(0));
const minutes = ref(formatter.format(0));
const seconds = ref(formatter.format(0));

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

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  weeks.value = Math.floor(days.value / 7);
  hours.value = formatter.format(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  minutes.value = formatter.format(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  seconds.value = formatter.format(Math.floor((distance % (1000 * 60)) / 1000));
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
        <p id="days-1" class="timer-data">{{ days }}</p>
        <p class="timer-tag">jours</p>
      </div>
      <div>
        <p id="hours-1" class="timer-data">{{ hours }}</p>
        <p class="timer-tag">heures</p>
      </div>
      <div>
        <p id="minutes-1" class="timer-data">{{ minutes }}</p>
        <p class="timer-tag">minutes</p>
      </div>
      <div>
        <p id="seconds-1" class="timer-data">{{ seconds }}</p>
        <p class="timer-tag">secondes</p>
      </div>
    </div>
    <p class="timer-tag font-bold">{{ weeks }} semaines</p>
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
