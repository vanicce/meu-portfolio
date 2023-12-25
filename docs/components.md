# Here you will find a explication above some components.

<p align="center"> Enjoy! 😀</p>

## Main Page

### Scroll Component
a component that, when clicked, takes the user to the beginning of the page:

<div>

```vue
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
  <button @click="toTop()">...</button>
</template>

```
</div>

## About Page

### Carrousel
a carousel component with small components showing the technologies I know about:

Component: scrollComponent.vue

```vue
<script setup>
// defining properties to component
  const props = defineProps({
    tech: ''
  })
</script>

<template>
  <div class=". . .">
    <!-- for all props define a image -->
    <img :src="'./' + props.tech + '.svg'" alt="" srcset="">
    <!-- search the technologies in props -->
    <a :href="'https://google.com/search?q=' +  props.tech" target="_blank">
    <!-- print in document the tech -->
      <p class=". . .">{{ props.tech }}</p>
    </a>
  </div>
</template>
```
View: AboutView.vue

```vue
<script setup>
// importing the component to the view
import scrollComponent from '. . ./scrollComponent.vue'

// defining techs (hard coded)
const techs = ['HTML5', 'CSS3', 'JavaScript', 'vue', 'react', 'tailwind', 'mySQL', 'git']

</script>

<template>
    <div class="overflow-hidden">
      <div class="scroller_inner">
        <!-- rendering components by nums of techs and passing the props to scrollComponent -->
        <scrollComponent v-for="tech in techs" :tech="tech"/>
        <scrollComponent v-for="tech in techs" :tech="tech"/>
      </div>
    </div>
</template>

```

```css
<style>
.scroller_inner {
  animation: scroll 30s linear infinite;
}

.scroller_inner:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  from {
    transform: translate(0%);
  }
  to {
    transform: translate(-50%);
  }
}
</style>
```

## Projects Page
