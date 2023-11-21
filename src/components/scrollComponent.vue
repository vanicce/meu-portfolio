<script setup>
  const props = defineProps({
    tech: ''
  })
</script>

<template>
  <div class="flex gap-1">
    <img class="w-5" :src="'./' + props.tech + '.svg'" alt="" srcset="">
    <p class="text-lg font-medium capitalize">{{ props.tech }}</p>
  </div>
</template>
