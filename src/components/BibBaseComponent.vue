<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{
  url: string;
}>();

const mainElement = ref(document.createElement('iframe'));

const urlParam = computed(() => {
  const bruh = new URLSearchParams();
  bruh.append('bib', props.url);
  bruh.append('iframe', 'true');
  return bruh.toString();
});

onMounted(() => {
  const contentWindow = mainElement.value.contentWindow || window;
  const body = contentWindow.document.body;
  const html = contentWindow.document.documentElement;
  const scrollHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight,
    html.getBoundingClientRect().height,
    916 // HACK: vuejs does not allow <script> tags in templates, find a better way to do this
  );
  const height = scrollHeight ? `${scrollHeight}px` : '100%';
  mainElement.value.height = height;
});
</script>

<template>
  <iframe
    ref="mainElement"
    :src="`https://bibbase.org/show?${urlParam}`"
    width="100%"
  />
</template>

<style>
iframe {
  border: none;
  overflow: hidden;
}
</style>
