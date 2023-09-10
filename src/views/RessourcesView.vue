<script setup lang="ts">
import JumbotronVideoComponent from '@clubcapra/components/JumbotronVideoComponent.vue';
import codebg from '@clubcapra/assets/media/codebg.jpg';



const bidUr



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
            <div class="skill-item">
              <div class="d-flex justify-content-between">
                <p>C++</p>
                <p class="text-muted">70%</p>
              </div>
              <div class="progress" data-percent="70%">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 0"
                />
              </div>
            </div>
            <!-- End Skill Item -->
            <!-- Skill Item -->
            <div class="skill-item">
              <div class="d-flex justify-content-between">
                <p>TypeScript</p>
                <p class="text-muted">20%</p>
              </div>
              <div class="progress" data-percent="20%">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 0"
                />
              </div>
            </div>
            <!-- End Skill Item -->
            <!-- Skill Item -->
            <div class="skill-item">
              <div class="d-flex justify-content-between">
                <p>Python</p>
                <p class="text-muted">5%</p>
              </div>
              <div class="progress" data-percent="5%">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="5"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 0"
                />
              </div>
            </div>
            <div class="skill-item">
              <div class="d-flex justify-content-between">
                <p>C</p>
                <p class="text-muted">5%</p>
              </div>
              <div class="progress" data-percent="5%">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="5"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 0"
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
            <script src="https://bibbase.org/show?bib=https://raw.githubusercontent.com/clubcapra/papers/master/papers.bib&jsonp=1"></script>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
