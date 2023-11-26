<script setup>
import { ref } from 'vue'

let isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>

<template>
  <div >
    <div class="flex h-full items-center gap-3 border border-gray-500/20 rounded-[14px] backdrop-blur-sm px-3 text-[#333] bg-white/40 dark:text-neutral-200 dark:bg-[rgba(18,17,19,.4)]">
      <router-link class="element relative after:bg-[#333] dark:after:bg-neutral-50 " to="/">Home</router-link>
      <router-link class="element relative after:bg-[#333] dark:after:bg-neutral-50 " to="/about">About</router-link>
      <router-link class="element relative after:bg-[#333] dark:after:bg-neutral-50 " to="/projects">Projects</router-link>
      <button class="border-l pl-2 border-[#333] dark:border-neutral-200 transition" @click="toggleTheme"><img width="19" :src="isDark ? './sun.svg' : './moon.svg'"></button>
    </div>
  </div>
</template>

<style scoped>
.element::after {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.element:hover::after,
a.router-link-active::after {
  transform: scaleX(1);
}

</style>
