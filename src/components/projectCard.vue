<script setup>
const props = defineProps({
  name: '',
  description: '',
  language: '',
  html_url: '',
  homepage: '',
  imgSrc: ''
})
</script>

<template>
  <div class="border-2 border-gray-300 p-3 rounded-md mb-4 flex flex-col justify-between hover:scale-110 ease-in-out duration-300">
    <img class="rounded-md mix-blend-luminosity hover:mix-blend-normal" src="../assets/projeto1.png" alt="">
    <div class="flex flex-col items-center py-3">
      <h2 class="font-bold uppercase">{{ props.name }}</h2>
      <p v-if="props.description !== undefined" class=" overflow-scroll md:overflow-visible">{{ props.description }}</p>
      <p class="text-stone-500" v-if="props.language !== null">Main Language: {{ props.language }}</p>
    </div>
    <div class="flex gap-2 justify-end items-center">
      <a class="hover:scale-110 transition" :href="props.html_url" target="_blank" title="link to github props">
        <img width="30" src="../assets/github.svg" alt="">
      </a>
      <a class="hover:scale-110 transition" v-if="props.homepage !== null" :href="props.homepage" target="_blank"
        title="link to site in production">
        <img src="../assets/plus.svg" alt="">
      </a>
    </div>
  </div>
</template>
