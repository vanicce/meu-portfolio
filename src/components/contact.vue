<script setup>
import { ref } from 'vue'

let color = ref('black')

const isDark = () => document.documentElement.classList.contains('dark') ? color.value = 'white' : color.value = 'black'

</script>

<template>
  <div
    class="flex flex-col items-center rounded-xl p-4 bg-neutral-100 text-sm text-center border border-gray-300 m-4 dark:bg-neutral-800">
    <div class="flex flex-col p-2">
      <p class="text-base md:text-lg"><strong>I am open to collaboration, learning opportunities, and sharing
          experiences</strong>. Feel free to reach out to me through GitHub or Linkedin. Thank you for visiting my
        portfolio, and I look forward to sharing my programming journey with you!</p>
    </div>
    <a class="underline text-base" href="mailto:ssilvalucas2004@gmail.com?subject=Olá, vi seu portfólio"
      target="_blank">ssilvalucas2004@gmail.com</a>
    <div class="flex items-center justify-center">
      <a href="https://github.com/lucwx">
        <img class="w-8 hover:scale-110 transition" :src="'./github-' + color + '.svg'" alt="">
      </a>
      <a href="https://linkedin.com/in/pedro-lucas-santos-silva">
        <img class="w-12 hover:scale-110 transition" :src="'./linkedin-' + color + '.svg'" alt="">
      </a>
    </div>
</div></template>
