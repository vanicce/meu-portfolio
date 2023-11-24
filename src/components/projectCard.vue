<script setup>
const props = defineProps({
  name: '',
  description: '',
  language: '',
  html_url: '',
  homepage: '',
  topics: ''
})
</script>

<template>
  <div v-if="props.name !== 'lucwx' && props.name !== 'meu-portfolio'" class="border-2 border-gray-300 p-3 rounded-md mb-4 flex flex-col justify-between md:hover:scale-110 ease-in-out duration-300">
    <img class="rounded-md border border-gray-300 md:mix-blend-luminosity md:hover:mix-blend-normal" :src="'./' + props.name + '.png'" alt="">
    <div class="flex flex-col items-center py-3">
      <h2 class="font-bold uppercase">{{ props.name }}</h2>
      <p v-if="props.description !== undefined" class=" overflow-scroll md:overflow-visible">{{ props.description }}</p>
      <div class="flex flex-wrap py-1 text-stone-500">
        <p v-for="(topic, index) in props.topics" :key="index">{{ index > 0 ? `, ` : '' }}{{ topic }}</p>
      </div>
      <p class="text-stone-500" v-if="props.language !== null && props.language !== undefined">{{ 'Main Technology: ' + props.language }}</p>
    </div>
    <div class="flex gap-2 justify-end items-center">
      <a class="hover:scale-110 transition" v-if="props.html_url !== null && props.html_url !== undefined" :href="props.html_url" target="_blank" title="link to github repository">
        <img width="30" src="../assets/github.svg" alt="">
      </a>
      <a class="hover:scale-110 transition" v-if="props.homepage !== null && props.homepage !== undefined" :href="props.homepage" target="_blank"
        title="link to site in production">
        <img src="../assets/plus.svg" alt="">
      </a>
    </div>
  </div>
</template>
