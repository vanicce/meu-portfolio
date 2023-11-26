<script setup>
import contact from '../components/contact.vue'
import scrollComponent from '../components/scrollComponent.vue'

const techs = ['HTML5', 'CSS3', 'JavaScript', 'vue', 'react', 'tailwind', 'mySQL', 'git']

</script>

<template>
  <main class="flex flex-col dark:text-[#BBBBBB]">
    <section class="flex justify-center items-center flex-col p-3 md:px-16 gap-2">
      <h2 class="text-shark text-xl font-bold md:text-4xl dark:text-[#BBBBBB]">About Me</h2>
      <p class="md:text-lg md:w-full">I'm Lucas, an aspiring programmer on a <strong>continuous learning journey</strong>. Currently, I'm dedicated to honing my skills in programming and exploring the diverse realms of software development.</p>

      <p class="md:text-lg">I am investing my time in studies, acquiring knowledge in <strong>JavaScript, Vue and Tailwind</strong>. My passion for problem-solving and creating innovative solutions drives me to delve deep into the programming universe.</p>
    </section>

    <section class="flex flex-col items-center ">
      <h2 class="text-shark text-xl md:text-4xl font-bold dark:text-[#BBBBBB]">My Habilities:</h2>
      <div class="w-full md:w-2/4 overflow-hidden">
        <div class="scroller_inner flex flex-nowrap w-fit p-4 px-4 gap-10 ">
          <scrollComponent v-for="tech in techs" :tech="tech"/>
          <scrollComponent v-for="tech in techs" :tech="tech"/>
        </div>
      </div>
    </section>

    <section class="md:px-16 flex flex-col">
      <p class="p-3 md:text-lg">Throughout my learning journey, I have developed projects. Each project represents a significant step in my evolution as a programmer, showcasing my ability to apply learned concepts in <strong>practical scenarios.</strong></p>

      <p class="italic md:text-lg p-3 self-center">To see my projects click here!</p>
      <router-link to="/projects" class="border p-2 rounded-md m-4 border-black text-center font-bold md:self-center md:text-lg transition md:hover:scale-110 dark:border-[#BBBBBB]">Projects</router-link>

      <contact/>
    </section>
  </main>
</template>

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
