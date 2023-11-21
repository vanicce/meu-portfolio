<script setup>
  const props = defineProps({
    tech: ''
  })
</script>

<template>
  <div class="flex gap-1 border border-zinc-400 px-5 rounded-lg items-center justify-center hover:border-blue-500 shadow-md cursor-pointer">
    <img class="w-5" :src="'./' + props.tech + '.svg'" alt="" srcset="">
    <a :href="'https://google.com/search?q=' +  props.tech" target="_blank">
      <p class="text-lg font-medium capitalize">{{ props.tech }}</p>
    </a>
  </div>
</template>
