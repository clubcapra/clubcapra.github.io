<script setup lang="ts">
import capraLogoWhite from '@clubcapra/assets/media/Capra_Logo_White.png';
</script>

<template>
  <nav id="header-navbar" class="fixed-top navbar navbar-expand-lg py-4">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center text-white" href="/">
        <img :src="capraLogoWhite" alt="CAPRA" style="height: 35px" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-nav-header"
        aria-controls="navbar-nav-header"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div id="navbar-nav-header" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link v-slot="{ navigate }" :to="{ name: 'home' }">
              <button class="nav-link" @click="navigate">
                {{ $t('page_home') }}
              </button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-slot="{ navigate }" :to="{ name: 'robots' }">
              <button class="nav-link" @click="navigate">
                {{ $t('page_robots') }}
              </button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-slot="{ navigate }" :to="{ name: 'team' }">
              <button class="nav-link" @click="navigate">
                {{ $t('page_team') }}
              </button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-slot="{ navigate }" :to="{ name: 'competition' }">
              <button class="nav-link" @click="navigate">
                {{ $t('page_competitions') }}
              </button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-slot="{ navigate }" :to="{ name: 'partners' }">
              <button class="nav-link" @click="navigate">
                {{ $t('page_partners') }}
              </button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-slot="{ navigate }" :to="{ name: 'ressources' }">
              <button class="nav-link" @click="navigate">
                {{ $t('page_ressources') }}
              </button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-slot="{ navigate }" :to="{ name: 'contact' }">
              <button class="nav-link" @click="navigate">
                {{ $t('page_contact') }}
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
