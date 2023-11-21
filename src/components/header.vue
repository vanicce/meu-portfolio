<script setup>
import { ref } from 'vue'

let open = ref(false)

const openMenu = () => {
  open.value = !open.value
}
</script>

<template>
  <header class="bg-stone-100 flex flex-col w-full border-b border-gray-300 z-50 md:flex-row md:justify-between">
    <div class="flex justify-between items-center w-full p-3 md:p-1">
      <p class="font-semibold md:w-2/4">Lucas S. Silva</p>
      <button class="md:hidden transition ease-in-out hover:scale-110" @click="openMenu()">
        <img width="25" :src="open ? './closemenu.svg' : './menu.svg'" alt="menu">
      </button>
      <nav class="duration-[400ms] ease-in-out absolute bg-stone-100 border-b border-gray-300 w-full flex flex-col items-center gap-2 p-2 md:flex-row md:relative md:border-none md:justify-end md:text-lg" :class="[open ? 'top-12 md:top-auto' : '-top-96 md:top-auto']">
        <router-link class="underline" @click="openMenu()" to="/">Home</router-link>
        <router-link class="underline" @click="openMenu()" to="/about">About Me</router-link>
        <router-link class="underline" @click="openMenu()"  to="/projects">Projects</router-link>
      </nav>
    </div>
  </header>
</template>
