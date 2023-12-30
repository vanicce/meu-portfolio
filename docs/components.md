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
<hr>

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
<hr>
<br>

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
<hr>
<br>

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

### Fetch Projects
a component fetching projects from GitHub.

Component: projectCard.vue

```vue
<script setup>
// define props
const props = defineProps({
  name: '',
  description: '',
  language: '',
  html_url: '',
  homepage: '',
  topics: ''
})
</script>

<template>
  <!-- filter projects -->
  <div v-if="props.name === 'project-name'" class=". . .">
    <div class=". . .">
      <!-- define project name -->
      <h2 class=". . .">{{ props.name }}</h2>
      <!-- define a link to site if available -->
      <a v-if="props.homepage !== undefined" :href="props.homepage" target="_blank" title="link to github repository">
      <!-- define img based in name of project -->
        <img class=". . ." :src="'./' + props.name + '.png'" alt="">
      </a>
    </div>
    <div class=". . .">
      <!-- define description if available -->
      <p v-if="props.description !== undefined" class=". . .">{{ props.description }}</p>
      <div class=". . .">
        <!-- iterates over topics -->
        <p class=". . ." v-for="topic in props.topics">{{ topic }}</p>
      </div>
      <!-- define language if available -->
      <p class=". . ." v-if="props.language !== undefined">{{ 'Main Technology: ' + props.language }}</p>
    </div>
    <div class=". . .">
      <a class=". . ." v-if="props.html_url !== undefined" :href="props.html_url" target="_blank" title="link to github repository">
        <svg>
        </svg>
      </a>
      <a class=". . ." v-if="props.homepage !== undefined && props.homepage !== ''" :href="props.homepage" target="_blank" title="link to site in production">
        <svg>
        </svg>
      </a>
    </div>
  </div>
</template>

```

View: ProjecView.vue
```vue
<script setup>
import { reactive, onMounted } from 'vue'
import projectCard from '../components/projectCard.vue';
import skelleton  from '../components/skelleton.vue'

// set state to projects
const state = reactive({
  projects: []
})

// fetch projetcs from github api
const defineProjects = async () => {
  try {
    const response = await fetch('https://api.github.com/users/lucwx/repos')
    state.projects = await response.json()
  } catch (error) {
    alert('an error ocurred in repos')
  }
}

onMounted(() => {
  // when component is mounted set a timeout and after call the function defineProjects
  setTimeout(() => {
    defineProjects()
  }, 1500);
})
</script>

<template>
    <section class=". . .">
      <div v-if="defineProjects.error">
        <p>No data available.</p>
      </div>
      <!-- if projects > 0 render projects -->
      <div v-else-if="state.projects.length > 0" class=". . .">
      <!-- iterates over the projects and passes the props to each project -->
        <projectCard class=". . ." v-for="(repo, index) in state.projects" :key="index" :name="repo.name" :description="repo.description" :language="repo.language" :homepage="repo.homepage" :html_url="repo.html_url" :topics="repo.topics"/>
      </div>
      <div v-else>
        <!-- while is loading render a skelleton -->
        <div class=". . .">
          <skelleton/>
          <skelleton/>
          <skelleton/>
        </div>
      </div>
    </section>
</template>

```
