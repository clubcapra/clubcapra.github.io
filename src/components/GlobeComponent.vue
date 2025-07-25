<script setup lang="ts">
import { competitions } from '@clubcapra/data/competitions';
import {
  bangkok,
  dortmund,
  montreal,
  sydney,
  zwentendorf,
} from '@clubcapra/data/locations';
import Globe from 'globe.gl';
import { onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import labelfont from '@clubcapra/assets/fonts/typeface.json';

const globe = ref<HTMLElement>();
const globeInstance = Globe();

const { t, locale } = useI18n();

watch(() => locale.value, updateGlobe);

/**
 *
 */
function updateGlobe() {
  if (!globe.value) return;

  globeInstance.labelsData([
    { lat: montreal.lat, lng: montreal.lng, text: t(montreal.city) },
    ...Array.from(
      new Set(
        competitions.map(competition => ({
          lat: competition.location.lat,
          lng: competition.location.lng,
          text: t(competition.location.city),
        }))
      )
    ),
  ]);
}

onMounted(() => {
  if (!globe.value) return;

  globeInstance(globe.value)
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
    .showAtmosphere(true)
    .atmosphereColor('black')
    .backgroundColor('black')
    .pointOfView({ lat: montreal.lat, lng: montreal.lng, altitude: 2 })
    .arcsData([
      // Montreal to Bangkok, Dortmund, Zwentendorf and Sydney
      {
        startLat: montreal.lat,
        startLng: montreal.lng,
        endLat: bangkok.lat,
        endLng: bangkok.lng,
      },
      {
        startLat: montreal.lat,
        startLng: montreal.lng,
        endLat: dortmund.lat,
        endLng: dortmund.lng,
      },
      {
        startLat: montreal.lat,
        startLng: montreal.lng,
        endLat: zwentendorf.lat,
        endLng: zwentendorf.lng,
      },
      {
        startLat: montreal.lat,
        startLng: montreal.lng,
        endLat: sydney.lat,
        endLng: sydney.lng,
      },
    ])
    .arcsTransitionDuration(0)
    .arcDashLength(0.5)
    .arcDashGap(2)
    .arcDashAnimateTime(1000)
    .arcColor(() => 'red')
    .labelSize(1.5)
    .labelDotRadius(0.5)
    .labelColor(() => 'white')
    .labelText('text')
    .labelTypeFace(labelfont);

  updateGlobe();
  // Rotate the globe
  globeInstance.controls().autoRotate = true;

  // Rotate counter-clockwise
  globeInstance.controls().autoRotateSpeed = -0.8;

  // Disable zoom
  globeInstance.controls().enableZoom = false;

  // Globe max height
  // If mobile, set the width to the window width if not set width to half of the window width
  if (window.innerWidth < 768) {
    globeInstance.width(window.innerWidth - 32).height(400);
  } else if (window.innerWidth < 1100) {
    globeInstance.width(window.innerWidth / 2).height(500);
  } else {
    globeInstance.width(window.innerWidth / 3).height(500);
  }

  // Resize the globe when the window is resized
  window.addEventListener('resize', () => {
    if (!globe.value) return;

    // If mobile, set the width to the window width if not set width to half of the window width
    if (window.innerWidth < 768) {
      globeInstance.width(window.innerWidth - 32).height(400);
    } else if (window.innerWidth < 1100) {
      globeInstance.width(window.innerWidth / 2).height(500);
    } else {
      globeInstance.width(window.innerWidth / 3).height(500);
    }
  });
});
</script>

<template>
  <div ref="globe" data-aos="zoom-in" data-aos-delay="1000" />
</template>
