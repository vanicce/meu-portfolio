<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import floatingbutton from './components/floatingbutton.vue'
import { RouterView } from 'vue-router'

</script>

<template>
  <Header class="fixed top-0" />
  <transition name="slide-fade">
    <RouterView class="h-full min-h-screen pt-14 bg-stone-100" />
  </transition>
  <floatingbutton class="z-50" />
  <Footer />
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
