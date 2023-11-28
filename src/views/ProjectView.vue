<script setup>
import { reactive, onMounted } from 'vue'
import projectCard from '../components/projectCard.vue';

const state = reactive({
  projects: []
})

const defineProjects = async () => {
  try {
    const response = await fetch('https://api.github.com/users/lucwx/repos')
    state.projects = await response.json()
  } catch (error) {
    alert('an error ocurred in repos')
  }
}

onMounted(() => {
  setTimeout(() => {
    defineProjects()
  }, 1500);
})
</script>

<template>
  <main class="flex flex-col px-4 md:px-14 dark:text-neutral-300">
    <div class="flex justify-center flex-col mb-10">
      <h2 class="text-center text-xl p-4 font-black md:text-4xl">Main Projects</h2>
      <p class="self-center italic md:text-lg">All projects listed here are updated via the GitHub API (README.md too).</p>
    </div>
    <section class="break-inside-avoid">
      <div v-if="defineProjects.error">
        <p>No data available.</p>
      </div>
      <div v-else-if="state.projects.length > 0" class="columns-1 sm:columns-2 lg:columns-3 gap-8">
        <projectCard class="break-inside-avoid" v-for="(repo, index) in state.projects" :key="index" :name="repo.name" :description="repo.description" :language="repo.language" :homepage="repo.homepage" :html_url="repo.html_url" :topics="repo.topics"/>
      </div>
      <div v-else>
        <div class="flex flex-wrap justify-center gap-8 ">
          <div class="bg-neutral-400 dark:bg-neutral-800 w-96 h-96 rounded-3xl animate-pulse">
            <div class=" bg-neutral-300 dark:bg-neutral-700 w-full h-2/4 rounded-t-xl">
            </div>
            <div class="bg-neutral-300 dark:bg-neutral-700 h-3 m-4"></div>
            <div class="bg-neutral-300 dark:bg-neutral-700 h-3 m-4"></div>
            <div class="bg-neutral-300 dark:bg-neutral-700 h-3 mt-20 mx-4"></div>
          </div>

          <div class="bg-neutral-400 dark:bg-neutral-800 w-96 h-96 rounded-3xl animate-pulse">
            <div class=" bg-neutral-300 dark:bg-neutral-700 w-full h-2/4 rounded-t-xl">
            </div>
            <div class="bg-neutral-300 dark:bg-neutral-700 h-3 m-4"></div>
            <div class="bg-neutral-300 dark:bg-neutral-700 h-3 m-4"></div>
            <div class="bg-neutral-300 dark:bg-neutral-700 h-3 mt-20 mx-4"></div>
          </div>

          <div class="bg-neutral-400 dark:bg-neutral-800 w-96 h-96 rounded-3xl animate-pulse">
            <div class=" bg-neutral-300 dark:bg-neutral-700 w-full h-2/4 rounded-t-xl">
            </div>
            <div class="bg-neutral-300 dark:bg-neutral-700 h-3 m-4"></div>
            <div class="bg-neutral-300 dark:bg-neutral-700 h-3 m-4"></div>
            <div class="bg-neutral-300 dark:bg-neutral-700 h-3 mt-20 mx-4"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
