<script setup>
import { reactive, onMounted, onBeforeMount, ref } from 'vue'
import projectCard from '../components/projectCard.vue';


const state = reactive({
  projects: []
})

const defineProjects = async () => {
  try {
    const response = await fetch('https://api.github.com/users/lucwx/repos')
    state.projects = await response.json()
  } catch (error) {
    console.log(error);
    alert('an error ocurred in repos')
  }
}

onBeforeMount(() => {
  document.body.scrollTop = 0
})

onMounted(() => {
  defineProjects()
})
</script>

<template>
  <main class="flex flex-col px-4 md:px-14">
    <div class="flex justify-center flex-col mb-10">
      <h2 class="text-center text-xl p-5 font-black md:text-4xl">Main Projects</h2>
      <p class="self-center italic">All projects listed here are updated via the GitHub API (README.md too).</p>
    </div>
    <section class="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:mb-10">
      <projectCard v-if="state.projects.length > 0" v-for="repo in state.projects" :name="repo.name" :description="repo.description" :language="repo.language" :homepage="repo.homepage" :html_url="repo.html_url" :topics="repo.topics" />
      <div v-else>
        <p>No data available.</p>
      </div>
    </section>
  </main>
</template>
