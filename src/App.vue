<script setup>
import Header from './components/header.vue';
import floatingbutton from './components/floatingbutton.vue'

</script>

<template>
  <Header class="flex justify-center fixed top-0 inset-x-0 z-50 px-6 h-12 mt-4" />
  <router-view class="h-full min-h-[100dvh] bg-stone-100 dark:bg-[#222] transition py-16" v-slot="{ Component }">
    <transition name="fade" >
      <component :is="Component" />
    </transition>
  </router-view>
  <floatingbutton />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

