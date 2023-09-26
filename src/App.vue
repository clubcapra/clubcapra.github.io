<script setup lang="ts">
import type { WritableComputedRef } from 'vue';
import { computed, onMounted } from 'vue';
import { useGlobalStore } from './store';

// Components
import FooterComponent from './components/FooterComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';

// Assets
import favicon16x16 from './assets/favicon-16x16.png';
import favicon32x32 from './assets/favicon-32x32.png';
import appleTouchIcon from './assets/apple-touch-icon.png';
import safariPinnedTab from './assets/safari-pinned-tab.svg';

// Animate on scroll library
import AOS from 'aos';
import 'aos/dist/aos.css';

/** Global Store */
const globalStore = useGlobalStore();

/** loading overlay visibility */
const loading: WritableComputedRef<boolean> = computed({
  get: () => globalStore.loading,
  set: v => globalStore.setLoading(v),
});

onMounted(() => {
  loading.value = false;
  AOS.init();
});
</script>

<template>
  <teleport to="head">
    <link rel="apple-touch-icon" sizes="152x152" :href="appleTouchIcon" />
    <link rel="icon" type="image/png" sizes="32x32" :href="favicon32x32" />
    <link rel="icon" type="image/png" sizes="16x16" :href="favicon16x16" />
    <link rel="mask-icon" :href="safariPinnedTab" color="#5bbad5" />
  </teleport>
  <v-app>
    <NavbarComponent />
    <v-main>
      <router-view />
    </v-main>

    <v-overlay :model-value="loading" app class="justify-center align-center">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>

    <FooterComponent />
  </v-app>
</template>

<style>
html,
body {
  width: 100%;
  overflow-x: hidden;
}

body {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  overflow-y: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: 'Work Sans', sans-serif;
  margin-top: 0;
}

a {
  color: #d2042d;
  transition: all 0.3s ease-in-out;
}

a:focus,
button:focus {
  outline: none;
}

.btn-primary:active {
  background-color: #f00d0d !important;
}

.btn:hover,
a:hover {
  text-decoration: none;
  color: #fff;
}

img {
  max-width: 100%;
}

.bg-fixed {
  background-size: cover;
}

.bg-grey {
  background-color: #f7f8f9;
}

.fs-40 {
  font-size: 40px;
}

section {
  position: relative;
}

.section-content {
  padding-top: 80px;
  padding-bottom: 80px;
}

.title-wrap,
.section-title {
  text-align: center;
}

.shadow {
  box-shadow:
    0 10px 30px 0 rgba(67, 80, 98, 0.24),
    0 2px 4px 0 rgba(67, 80, 98, 0.1) !important;
}

#header-navbar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 11;
  transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.navbar-brand {
  font-size: 40px;
  color: #000;
}

.navbar-nav .nav-link {
  color: #fff;
  transition: 0.3s ease;
}

.navbar-nav:hover li a {
  opacity: 0.5;
}

.navbar-nav:hover li a:hover {
  opacity: 1;
}

.navbar-toggler {
  font-size: 2rem;
  color: #fff;
}

.jumbotron .container {
  position: relative;
  z-index: 1;
}

.jumbotron-single h1 {
  font-size: 3rem !important;
}

.lnr-icon {
  color: #d2042d;
}

.section-separator-bg {
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.sydney-section-separator-bg {
  background-repeat: no-repeat;
  background-position: 50% 70%;
}

.section-separator {
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;
  border-radius: 0;
  margin-bottom: 0;
  overflow: hidden;
}

.section-separator h2 {
  line-height: 0.9;
  font-weight: bold;
  display: inline-block;
  border: 15px solid #fff;
  padding: 30px;
  font-size: 3rem;
  color: #fff;
  z-index: 1;
}

.overlay {
  color: #fff;
}

.overlay:before {
  position: absolute;
  display: block;
  content: '';
  opacity: 0.9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #d2042d;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #000, #121212);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #000, #121212);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.overlay.bg-white {
  color: #000;
}

.overlay.bg-white:before {
  background: #fff;
  opacity: 0.7;
}

.bg-video {
  position: absolute;
  right: 0;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}

.text-white {
  color: #fff;
}

/*==============================
=            BUTTON            =
==============================*/
.btn {
  font-size: 14px;
  font-weight: 600;
  border-radius: 30px;
  padding: 9px 25px;
  text-transform: capitalize;
  transition: all 0.3s ease 0s;
}

.btn-primary {
  display: inline-block;
  background-color: #d22b2b;
  border-color: #d22b2b;
  color: #fff;
}

.btn-primary:hover {
  background-color: #f00d0d;
  border-color: #f00d0d;
  color: #fff;
}

.btn-outline-primary {
  color: #fff;
  background-color: transparent;
  background-image: none;
  border-color: #fff;
}

.btn-outline-primary:hover {
  background-color: #f00d0d;
  border-color: #f00d0d;
  color: #fff;
}

.btn-shadow {
  box-shadow: -5px 8px 20px 0px rgba(229, 16, 2, 0.15);
}

.btn-icon {
  color: #000;
}

.btn-link {
  color: #d22b2b;
}

.rectangle-1 {
  width: 2000px;
  height: 400px;
  background: #d2042d;
  background: -webkit-linear-gradient(to right, #d22b2b, #d2042d);
  background: linear-gradient(to right, #d22b2b, #d2042d);
  transform-origin: 50% 150% 0;
  position: absolute;
  left: 0;
  z-index: 0;
  transform: scale(1) rotate(-10deg);
}

.rectangle-2 {
  width: 2000px;
  height: 400px;
  background: #d2042d;
  background: -webkit-linear-gradient(to right, #d22b2b, #d2042d);
  background: linear-gradient(to right, #d22b2b, #d2042d);
  transform-origin: 65% 100% 0;
  position: absolute;
  right: 0;
  z-index: 0;
  transform: scale(1) rotate(50deg);
}

.papers-container {
  display: flex;
  padding-bottom: 1em;
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(-100vw) rotate(-15deg);
  }

  to {
    opacity: 1;
    transform: translateX(0) rotate(-15deg);
  }
}

@keyframes grow1 {
  from {
    opacity: 0;
    transform: scale(2) rotate(-10deg);
  }

  to {
    opacity: 1;
    transform: scale(1) rotate(-10deg);
  }
}

@keyframes grow2 {
  from {
    opacity: 0;
    transform: scale(2) rotate(50deg);
  }

  to {
    opacity: 1;
    transform: scale(1) rotate(50deg);
  }
}

@keyframes fadeInFromTop {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.rectangle-1 {
  opacity: 0;
  animation: grow1 ease 1s forwards;
  box-shadow: 0px 20px 30px 0px rgba(9, 21, 54, 0.25) !important;
}

.rectangle-2 {
  opacity: 0;
  animation: grow2 ease 1s forwards;
  box-shadow: 0px 20px 30px 0px rgba(9, 21, 54, 0.25) !important;
}

.rectangle-transparent-1 {
  width: 500px;
  height: 500px;
  border: 15px solid rgba(255, 255, 255, 0.08);
  position: absolute;
  left: -5%;
  bottom: -10%;
  display: block;
  animation: floating-slow ease-in-out 12s infinite;
}

.rectangle-transparent-2 {
  width: 600px;
  height: 600px;
  border: 15px solid rgba(255, 255, 255, 0.08);
  position: absolute;
  right: -10%;
  top: 5%;
  display: block;
  animation: floating-slow ease-in-out 12s infinite;
}

.circle {
  width: 200px;
  height: 200px;
  border: 2px solid;
  position: absolute;
  display: block;
  border-radius: 50%;
  z-index: -100;
}

.square {
  width: 200px;
  height: 200px;
  border: 2px solid;
  position: absolute;
  display: block;
  z-index: -100;
}

.circle-1 {
  width: 50px;
  height: 50px;
  border: 2px solid #d22b2b;
  position: absolute;
  display: block;
  border-radius: 50%;
  transform-origin: 50% 50%;
  left: 5%;
  top: 50%;
  animation:
    fadeInFromTop 0.5s linear forwards,
    floating ease 4s infinite;
}

.circle-2 {
  width: 70px;
  height: 70px;
  top: 20%;
  left: 83%;
  border: 2px solid #d22b2b;
  position: absolute;
  display: block;
  border-radius: 50%;
  transform-origin: 50% 50%;
  animation:
    fadeInFromTop 0.5s linear forwards,
    floating ease-in-out 4s infinite;
}

.circle-3 {
  top: 80%;
  right: 25%;
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  position: absolute;
  display: block;
  border-radius: 50%;
  animation:
    fadeInFromTop 0.5s linear forwards,
    floating ease-in-out 4s infinite;
}

@keyframes floating {
  0% {
    transform: translate(0%, 0%) rotate(25deg);
  }

  25% {
    transform: translate(5%, 15%) rotate(25deg);
  }

  50% {
    transform: translate(10%, 5%) rotate(25deg);
  }

  75% {
    transform: translate(0%, 15%) rotate(25deg);
  }

  100% {
    transform: translate(0%, 0%) rotate(25deg);
  }
}

@keyframes floating-slow {
  0% {
    transform: translate(0%, 0%) rotate(25deg);
  }

  25% {
    transform: translate(1%, 3%) rotate(25deg);
  }

  50% {
    transform: translate(2%, 1%) rotate(25deg);
  }

  75% {
    transform: translate(0%, 3%) rotate(25deg);
  }

  100% {
    transform: translate(0%, 0%) rotate(25deg);
  }
}

.geometric {
  position: absolute;
}

.hexagon-1 {
  right: 5%;
  animation:
    fadeInFromTop 0.5s linear forwards,
    floating ease-in-out 6s infinite;
}

.hexagon-1 img {
  height: 100px;
  width: 115px;
  transform: rotate(30deg);
}

.hexagon-2 {
  left: 40%;
  top: 80%;
  animation:
    fadeInFromTop 0.5s linear forwards,
    floating ease-in-out 6s infinite;
}

.hexagon-2 img {
  height: 100px;
  width: 115px;
  transform: rotate(30deg);
}

.triangle-2 {
  top: 30%;
  left: 20%;
  animation:
    fadeInFromTop 0.5s linear forwards,
    floating ease-in-out 8s infinite;
}

.triangle-2 img {
  width: 75px;
  height: 75px;
  transform: rotate(15deg);
}

.triangle-3 {
  top: 80%;
  left: 15%;
  animation:
    fadeInFromTop 0.5s linear forwards,
    floating ease-in-out 10s infinite;
}

.triangle-3 img {
  width: 45px;
  height: 45px;
  transform: rotate(40deg);
}

.triangle-4 {
  top: 60%;
  right: 15%;
  animation:
    fadeInFromTop 0.5s linear forwards,
    floating ease-in-out 5s infinite;
}

.triangle-4 img {
  width: 45px;
  height: 45px;
  transform: rotate(-40deg);
}

.feature-item {
  transition: all 0.2s ease-in-out 0s !important;
}

.feature-item:hover {
  transform: translateY(-13px);
}

.progress-bar {
  background-color: #d2042d;
}

.testi-img img {
  height: 60px;
  width: 60px !important;
  border-radius: 50%;
  display: inline-block !important;
}

.testi-details {
  text-align: left;
}

.testi-text {
  font-weight: 300;
  padding-top: 50px;
  padding-bottom: 50px;
}

.testi-icon {
  color: #d2042d;
}

.testi-content {
  margin-top: 80px;
  padding-bottom: 80px;
}

.testi-item {
  margin-left: 15px;
  margin-right: 15px;
}

.heading-section {
  position: relative;
}

.filter-button-group {
  margin-bottom: 15px;
}

.filter-button-group a {
  margin: 5px;
  cursor: pointer;
}

.grid-link a {
  margin: 5px;
  font-size: 20px;
  color: #000;
}

.grid-portfolio {
  overflow: hidden;
}

.gutter-sizer {
  width: 2%;
}

.grid-sizer,
.grid-item {
  width: 32%;
}

.grid-item {
  margin-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;
}

.grid-item:hover .grid-info {
  top: 50%;
  opacity: 1;
}

.grid-item-wrapper:before {
  content: '';
  display: block;
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all 0.3s ease;
  opacity: 0;
}

.grid-item-wrapper:hover:before {
  opacity: 1;
}

.grid-info {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease;
}

.lightcase-icon-close:before {
  content: '\e870';
  font-family: 'Linearicons-Free';
}

.grid-title {
  text-align: center;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1002;
  top: 0;
  left: 0;
  background-color: #000;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  color: #fff;
}

.sidenav-content {
  padding: 8px 32px;
  transform: translateY(20px);
  opacity: 0;
  transition:
    transform 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    opacity 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.in .sidenav-content {
  transform: translateY(0);
  opacity: 1;
  transition:
    transform 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s,
    opacity 0.5s 0.5s;
}

.sidenav a {
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav #side-nav-close,
.sidenav #side-search-close {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }

  .sidenav a {
    font-size: 18px;
  }
}

#side-search .form-control {
  background-color: transparent;
}

#side-search .input-group-text {
  background: transparent;
  color: #fff;
}

.skill-item {
  width: 100%;
  position: relative;
  padding: 10px 0;
}

.skill-item p {
  font-size: 16px;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 500;
}

.skill-item .text-muted {
  color: #939393;
}

.progress-bar,
.progress {
  transition: all 4s;
}

.form-control:focus {
  border-color: #d2042d;
  box-shadow: 0 0 0 0.2rem rgba(253, 101, 90, 0.25);
}

.form-control::-webkit-input-placeholder {
  opacity: 0.5;
}

.form-control::-moz-placeholder {
  opacity: 0.5;
}

.form-control:-ms-input-placeholder {
  opacity: 0.5;
}

.form-control::-ms-input-placeholder {
  opacity: 0.5;
}

.form-control::placeholder {
  opacity: 0.5;
}

@media (max-width: 992px) {
  .not-on-top #header-navbar {
    position: fixed;
    top: 0;
    height: auto;
    width: 100%;
    background: #d2042d;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #d2042d, #d2042d);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #d2042d, #d2042d);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    z-index: 11;
  }

  #header-navbar {
    padding-top: 15px !important;
    padding-bottom: 15px !important;
  }

  .navbar-collapse {
    background: #d2042d;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #d2042d, #d2042d);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #d2042d, #d2042d);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 10px;
  }
}

@media (max-width: 767px) {
  .jumbotron-single h1 {
    font-size: 2rem !important;
  }

  .grid-item {
    width: 100%;
  }

  .progress {
    height: 30px;
    font-size: 16px;
  }
}

/*=====  End of RESPONSIVE  ======*/
</style>
