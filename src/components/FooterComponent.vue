<script setup lang="ts"></script>

<template>
  <footer class="mastfoot my-3">
    <div class="inner container">
      <div class="row">
        <div class="col-lg-4 col-md-12 d-flex align-items-center" />
        <div class="col-lg-4 col-md-12 d-flex align-items-center">
          <p class="mx-auto text-center mb-0">&copy; Club Capra 2023</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-12 d-flex align-items-center" />
        <div class="col-lg-4 col-md-12 d-flex align-items-center">
          <p class="mx-auto text-center mb-0">
            {{ $t('made_with_love') }}
            <v-icon icon="mdi-heart" />
          </p>
        </div>
        <div class="col-lg-4 col-md-12">
          <nav class="nav nav-mastfoot justify-content-center">
            <a class="nav-link" href="https://www.facebook.com/clubcapra/">
              <i class="fab fa-facebook-f" />
            </a>
            <a class="nav-link" href="https://www.instagram.com/capra_ets/">
              <i class="fab fa-instagram" />
            </a>
            <a
              class="nav-link"
              href="https://www.linkedin.com/company/club-capra/"
            >
              <i class="fab fa-linkedin" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>
