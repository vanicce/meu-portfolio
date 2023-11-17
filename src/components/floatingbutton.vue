<script setup>
import { ref } from 'vue'

let scroll = ref(false)

const scrolling = () => {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? scroll.value = true : scroll.value = false
}

window.onscroll = () => { scrolling() }

const toTop = () => {
  document.documentElement.scrollTop = 0
}
</script>

<template>
  <button @click="toTop()"
    class="duration-500 ease-in-out border border-black rounded-full w-12 fixed bottom-10  backdrop-blur-sm hover:scale-110"
    :class="scroll ? 'left-[80%] md:left-[90%] xl:left-[95%]' : 'left-full'">
    <img src="../assets/arrow.svg" class="" alt="">
  </button>
</template>
