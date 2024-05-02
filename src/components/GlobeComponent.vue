<script setup lang="ts">
import Globe from 'globe.gl';
import { onMounted, ref } from 'vue';

const globe = ref<HTMLElement>();

onMounted(() => {
  // Vue ref
  if (!globe.value) return;

  // Globe instance
  const globeInstance = Globe();

  globeInstance(globe.value)
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
    .showAtmosphere(true)
    .atmosphereColor('black')
    .backgroundColor('black')
    .pointOfView({ lat: 45.5017, lng: -72.5673, altitude: 2 })
    .arcsData([
      // Montreal to Bangkok, Dortmund, Vienna and Sydney
      {
        startLat: 45.5017,
        startLng: -73.5673,
        endLat: 13.7563,
        endLng: 100.5018,
      },
      {
        startLat: 45.5017,
        startLng: -73.5673,
        endLat: 51.5136,
        endLng: 7.4653,
      },
      {
        startLat: 45.5017,
        startLng: -73.5673,
        endLat: 48.2082,
        endLng: 16.3738,
      },
      {
        startLat: 45.5017,
        startLng: -73.5673,
        endLat: -33.8688,
        endLng: 151.2093,
      },
    ])
    .arcsTransitionDuration(0)
    .arcDashLength(0.5)
    .arcDashGap(2)
    .arcDashAnimateTime(1000)
    .arcColor(() => 'red')
    // Add markers for Montreal, Bangkok, Dortmund, Vienna and Sydney with names
    .labelsData([
      { lat: 45.5017, lng: -73.5673, text: 'Montreal' },
      { lat: 13.7563, lng: 100.5018, text: 'Bangkok' },
      { lat: 51.5136, lng: 7.4653, text: 'Dortmund' },
      { lat: 48.2082, lng: 16.3738, text: 'Vienna' },
      { lat: -33.8688, lng: 151.2093, text: 'Sydney' },
    ])
    .labelSize(1.5)
    .labelDotRadius(0.5)
    .labelColor(() => 'white')
    .labelText('text');

  // Rotate the globe
  globeInstance.controls().autoRotate = true;

  // Rotate counter-clockwise
  globeInstance.controls().autoRotateSpeed = -0.8;

  // Disable zoom
  globeInstance.controls().enableZoom = false;

  // Globe max height
  // If mobile, set the width to the window width if not set width to half of the window width
  if (window.innerWidth < 768) {
    globeInstance.width(window.innerWidth).height(window.innerHeight / 2);
  } else {
    globeInstance.width(window.innerWidth / 3).height(window.innerHeight / 1.5);
  }

  // Resize the globe when the window is resized
  window.addEventListener('resize', () => {
    if (!globe.value) return;

    // If mobile, set the width to the window width if not set width to half of the window width
    if (window.innerWidth < 768) {
      globeInstance.width(window.innerWidth).height(window.innerHeight / 2);
    } else {
      globeInstance
        .width(window.innerWidth / 2)
        .height(window.innerHeight / 1.5);
    }
  });
});
</script>

<template>
  <div ref="globe" data-aos="zoom-in" data-aos-delay="1000" />
</template>
