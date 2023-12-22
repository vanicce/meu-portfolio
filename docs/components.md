# Here you will find a explication above some components.

<p align="center"> Enjoy! 😀</p>

## Main Page

### Scroll Component
a component that, when clicked, takes the user to the beginning of the page:

<div>

```js
<script setup>
import { ref } from 'vue'

let scroll = ref(false)

//verify if user scroll more than 20 in document
const scrolling = () => {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? scroll.value = true : scroll.value = false
}

//verify if user scroll
window.onscroll = () => scrolling()

//move the user to top of the page
const toTop = () => {
  document.documentElement.scrollTop = 0
}

</script>

<template>
  <button @click="toTop()"...</button>
</template>

```
</div>

## About Page

## Projects Page
