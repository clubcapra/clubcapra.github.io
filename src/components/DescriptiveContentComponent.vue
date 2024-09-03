<script lang="ts" setup>
const props = defineProps<{
  button?: string;
  link?: string;
  imageRight: boolean;
}>();
</script>

<template>
  <div
    class="container mx-auto px-4 py-20 flex flex-col gap-8 items-center w-full"
    :class="props.imageRight ? 'md:flex-row' : 'md:flex-row-reverse'"
  >
    <div
      class="flex flex-col gap-8 md:w-1/2"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h2 class="font-bold font-sans text-4xl md:text-5xl">
        <slot name="title" />
      </h2>
      <p v-if="$slots.content1">
        <slot name="content1" />
      </p>
      <p v-if="$slots.content2">
        <slot name="content2" />
      </p>
      <a
        v-if="props.button && props.link"
        class="bg-black hover:border-primary-50 border-2 border-black transition-colors text-white font-medium text-lg py-2 px-4 rounded-lg w-fit"
        :href="props.link"
        target="_blank"
      >
        {{ props.button }}
      </a>
    </div>
    <div class="w-full md:w-1/2" data-aos="fade-up" data-aos-delay="400">
      <slot name="image" />
    </div>
  </div>
</template>
