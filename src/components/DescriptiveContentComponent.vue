<script lang="ts" setup>
const props = defineProps<{
  button?: string;
  link?: string;
  imageRight: boolean;
  centered?: boolean;
}>();
</script>

<template>
  <div
    class="container mx-auto px-4 py-10 flex flex-col gap-8 items-center w-full"
    :class="
      props.centered
        ? 'text-center'
        : props.imageRight
          ? 'md:flex-row'
          : 'md:flex-row-reverse'
    "
  >
    <div
      class="flex flex-col gap-8"
      :class="props.centered ? 'items-center w-full' : 'md:w-1/2'"
      data-aos="fade-up"
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
        :class="props.centered ? 'mx-auto' : ''"
        :href="props.link"
        target="_blank"
      >
        {{ props.button }}
      </a>
    </div>
    <div
      v-if="$slots.image"
      class="w-full"
      :class="props.centered ? '' : 'md:w-1/2'"
      data-aos="fade-up"
    >
      <slot name="image" />
    </div>
  </div>
</template>
