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
    <div class="flex h-full items-center gap-3 border border-gray-500/20 rounded-[14px] backdrop-blur-sm px-3 bg-white/40">
      <router-link class="element" to="/">Home</router-link>
      <router-link class="element" to="/about">About</router-link>
      <router-link class="element" to="/projects">Projects</router-link>
      <button class="border-l pl-2 border-[#333] transition" @click="toggleTheme"><img width="19" :src="isDark ? './sun.svg' : './moon.svg'"></button>
    </div>
  </div>
</template>

<style scoped>
.element {
  position: relative;
  display: inline-block;
  color: #333;
}

.element::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #333;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.element:hover::after,
a.router-link-active::after {
  transform: scaleX(1);
}

</style>
