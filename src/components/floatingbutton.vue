<script setup>
import { ref } from 'vue'

let scroll = ref(false)

const scrolling = () => {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? scroll.value = true : scroll.value = false
}

window.onscroll = () => scrolling()

const toTop = () => {
  document.documentElement.scrollTop = 0
}

</script>

<template>
  <button @click="toTop()"
    class="duration-500 ease-in-out border border-black rounded-full w-12 fixed bottom-10  backdrop-blur-sm hover:scale-110 dark:border-[#BBBBBB]" :class="scroll ? 'left-[80%] md:left-[90%] xl:left-[95%]' : 'left-[105%]'">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#333" class="dark:stroke-neutral-300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>
