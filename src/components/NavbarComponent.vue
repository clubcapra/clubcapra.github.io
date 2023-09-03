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
            <a class="nav-link" href="/">Capra</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="robots">Robots</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="team">Équipe</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="competition">Compétitions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="partners">Partenaires</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="ressources">Ressources</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="en/">EN</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
