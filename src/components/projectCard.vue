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
  <div v-if="props.name !== 'lucwx' && props.name !== 'meu-portfolio'" class="rounded-3xl flex flex-col justify-between md:hover:scale-105 ease-in-out mb-4 duration-300 bg-white dark:bg-neutral-800">
    <div class="">
      <h2 class="font-bold capitalize absolute p-3 text-white">{{ props.name }}</h2>
      <a v-if="props.home !== null && props.homepage !== undefined " :href="props.homepage" target="_blank" title="link to github repository">
        <img class="object-contain rounded-t-2xl" :src="'./' + props.name + '.png'" alt="">
      </a>
    </div>
    <div class="flex flex-col items-center py-3">
      <p v-if="props.description !== undefined" class=" overflow-scroll md:overflow-visible text-center">{{ props.description }}</p>
      <div class="flex flex-wrap justify-center py-1 text-stone-900 dark:text-stone-100">
        <p class="m-1 p-1 border dark:border-neutral-200 border-neutral-900 rounded-lg capitalize text-sm md:text-base" v-for="(topic, index) in props.topics" :key="index">{{ topic }}</p>
      </div>
      <p class="text-stone-500 dark:text-stone-400 md:text-lg" v-if="props.language !== null && props.language !== undefined">{{ 'Main Technology: ' + props.language }}</p>
    </div>
    <div class="flex gap-2 justify-end items-center pr-4 pb-4">
      <a class="hover:scale-110 transition" v-if="props.html_url !== null && props.html_url !== undefined"
        :href="props.html_url" target="_blank" title="link to github repository">
        <svg width="30px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-140.000000, -7559.000000)"
              class="fill-black dark:fill-neutral-300">
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                  id="github-[#142]">
                </path>
              </g>
            </g>
          </g>
        </svg>
      </a>
      <a class="hover:scale-110 transition" v-if="props.homepage !== null && props.homepage !== undefined && props.homepage !== ''"
        :href="props.homepage" target="_blank" title="link to site in production">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
          stroke-linejoin="round" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
    </div>
  </div>
</template>
