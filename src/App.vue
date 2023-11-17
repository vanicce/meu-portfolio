<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import { RouterView } from 'vue-router'
import floatingbutton from './components/floatingbutton.vue'
</script>

<template>
  <Header />
    <RouterView />
    <floatingbutton/>
  <Footer />
</template>
