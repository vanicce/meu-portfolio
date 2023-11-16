<script setup>
import { ref } from 'vue'

let open = ref(false)

const openMenu = () => {
  open.value = !open.value
}
</script>

<template>
  <header class="bg-stone-100 sticky top-0 left-0 flex flex-col w-full">
    <div class="flex justify-between items-center w-full p-3">
      <p class="font-semibold">Lucas S. Silva</p>
      <button class="transition ease-in-out hover:scale-110" @click="openMenu()">
        <img class="" width="30" src="../assets/icons8-cardápio.svg" alt="menu">
      </button>
    </div>
    <nav class="duration-[400ms] ease-in-out absolute bg-stone-100 w-full flex flex-col items-center gap-2 p-2" :class="[open ? 'top-12 ' : '-top-96']">
      <routerLink class="underline" @click="openMenu()" to="/">Home</routerLink>
      <routerLink class="underline" @click="openMenu()" to="/about">About Me</routerLink>
      <router-link class="underline" @click="openMenu()"  to="/projects">Projects</router-link>
    </nav>
  </header>
</template>
