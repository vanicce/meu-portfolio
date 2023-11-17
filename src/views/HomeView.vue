<script setup>
let spotify = "https://open.spotify.com/intl-pt/artist/5INjqkS1o8h1imAzPqGZBb"
</script>

<template>
  <main class="flex flex-col items-center h-full min-h-screen p-4">
    <div class="w-56 h-56 text-4xl font-bold overflow-clip rounded-full my-3">
      <img class="" src="../assets/eu3.jpeg" alt="">
    </div>
    <div class="text-2xl md:text-4xl font-black text-center">
      <h1 class="">Hi, my name is Lucas.</h1>
    </div>
    <p class="text-lg md:text-2xl text-center">I love programming, games and
    <a class="underline decoration-slate-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500" target="_blank" :href="spotify">Tame Impala.</a> Here you will find some projects and learn a little about me.</p>
    <router-link class="border border-black rounded-md p-2 m-4 transition hover:scale-110" to="/about">Enjoy!</router-link>
  </main>
</template>
