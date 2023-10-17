<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { GithubStats } from '@clubcapra/utils/GithubStats';
// Components
import BibBaseComponent from '@clubcapra/components/BibBaseComponent.vue';
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';

// Media
import codebg from '@clubcapra/assets/media/codebg.jpg';

const languages = ref();
onMounted(async () => {
  const githubStats = new GithubStats();

  const stats = await githubStats.fetchStats();
  const mergedStats = githubStats.mergeStats(stats);
  const parsedStats = githubStats.parseStats(mergedStats);

  languages.value = parsedStats;
});
</script>

<template>
  <JumbotronVideoComponent :title="$t('page_ressources')" :img="codebg" />
  <section id="skills" class="bg-white">
    <div class="container">
      <div class="section-content">
        <div class="title-wrap" data-aos="fade-up">
          <h2 class="section-title">
            {{ $t('our_code_title') }}
            <b>code</b>
          </h2>
          <p class="section-sub-title">{{ $t('our_code_description') }}</p>
        </div>

        <div class="row">
          <div class="col-md-12" data-aos="fade-right">
            <!-- Skill Item -->
            <div
              v-for="(codeLanguage, i) of languages"
              :key="i"
              class="skill-item"
            >
              <div class="d-flex justify-content-between">
                <p>{{ codeLanguage.name }}</p>
                <p class="text-muted">{{ codeLanguage.percent }}%</p>
              </div>
              <div class="progress" :data-percent="codeLanguage.percent">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :aria-valuenow="codeLanguage.percent"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :style="`width: ${codeLanguage.percent}%`"
                />
              </div>
            </div>
            <!-- End Skill Item -->
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <a class="btn btn-primary" href="https://github.com/clubcapra">
            {{ $t('see_our_github').toUpperCase() }}
          </a>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="section-content">
      <section id="papers">
        <div class="content">
          <h2>Publications</h2>
          <div class="papers-container">
            <BibBaseComponent
              url="https://raw.githubusercontent.com/clubcapra/papers/master/papers.bib"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
