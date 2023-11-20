<script setup>
import { ref } from 'vue'

let open = ref(false)

const openMenu = () => {
  open.value = !open.value
}
</script>

<template>
  <header class="bg-stone-100 flex flex-col w-full border-b border-gray-300 z-50">
    <div class="flex justify-between items-center w-full p-3">
      <p class="font-semibold">Lucas S. Silva</p>
      <button class="transition ease-in-out hover:scale-110" @click="openMenu()">
        <img width="25" :src="open ? '../assets/closemenu.svg' : '../assets/openmenu.svg'" alt="menu">
      </button>
    </div>
    <nav class="duration-[400ms] ease-in-out absolute bg-stone-100 border-b border-gray-300 w-full flex flex-col items-center gap-2 p-2" :class="[open ? 'top-12 ' : '-top-96']">
      <router-link class="underline" @click="openMenu()" to="/">Home</router-link>
      <router-link class="underline" @click="openMenu()" to="/about">About Me</router-link>
      <router-link class="underline" @click="openMenu()"  to="/projects">Projects</router-link>
    </nav>
  </header>
</template>
