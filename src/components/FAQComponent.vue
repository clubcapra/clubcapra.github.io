<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

export interface QA {
  question: string;
  answer: string;
}

const content: QA[] = [
  {
    question: 'question_implication',
    answer: 'answer_implication',
  },
  {
    question: 'question_skills',
    answer: 'answer_skills',
  },
  {
    question: 'question_apply',
    answer: 'answer_apply',
  },
  {
    question: 'question_recruitment_period',
    answer: 'answer_recruitment_period',
  },
  {
    question: 'question_visit',
    answer: 'answer_visit',
  },
];

const selected: Ref<number | null> = ref(null);
const showAll = ref(false);
const containers: Ref<HTMLElement[]> = ref([]);
</script>

<template>
  <section
    id="FAQ"
    class="container mx-auto mb-10 px-4 bg-gray-100 w-100 pt-10 rounded-2xl"
  >
    <h2 class="text-5xl md:text-6xl font-bold font-sans text-center pt-10">
      {{ t('faq') }}
    </h2>
    <div class="flex justify-center px-4 py-20">
      <div class="container mx-auto px-4">
        <!-- Column 1 -->
        <div class="bg-white max-w-full mx-auto border border-gray-200">
          <ul class="shadow-box">
            <li
              v-for="(qa, index) in content"
              :key="index"
              class="relative border-b border-gray-200"
            >
              <button
                type="button"
                class="w-full px-6 py-5 text-left"
                @click="
                  selected !== index ? (selected = index) : (selected = null)
                "
              >
                <div class="flex items-center justify-between">
                  <div class="flex">
                    <p class="w-8 shrink-0 text-xl font-semibold">
                      {{ t('question') }}
                    </p>
                    <p class="pt-1">{{ t(qa.question) }}</p>
                  </div>
                  <svg
                    :class="{
                      'transform rotate-180': selected == index || showAll,
                    }"
                    class="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                ref="containers"
                class="relative overflow-hidden transition-all max-h-0 duration-700"
                style=""
                :style="
                  selected == index || showAll
                    ? 'max-height: ' + containers[index]?.scrollHeight + 'px'
                    : ''
                "
              >
                <div class="px-6 pb-5 flex">
                  <p class="w-8 shrink-0 text-xl font-semibold">
                    {{ t('answer') }}
                  </p>
                  <p class="pt-1">{{ t(qa.answer) }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.max-h-0 {
  max-height: 0;
}
</style>
