<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import floatingbutton from './components/floatingbutton.vue'
import { RouterView } from 'vue-router'

</script>

<template>
  <Header class="fixed top-0"/>
    <RouterView class="h-full min-h-screen pt-14"/>
    <floatingbutton class="z-50"/>
  <Footer />
</template>
