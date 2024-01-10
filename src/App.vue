<script setup>
import Header from './components/header.vue';
import floatingbutton from './components/floatingbutton.vue'

</script>

<template>
  <Header class="flex justify-center fixed top-0 inset-x-0 z-50 px-6 h-12 mt-4" />
  <router-view class="h-full min-h-[100dvh] bg-stone-100 dark:bg-neutral-900 py-16 duration-500 ease-in-out selection:bg-neutral-800 selection:text-neutral-200 dark:selection:bg-neutral-100 dark:selection:text-neutral-800" />
  <floatingbutton />
</template>
