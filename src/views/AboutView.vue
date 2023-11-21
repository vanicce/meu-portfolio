<template>
  <main class="flex flex-col">
    <section class="flex justify-center items-center flex-col p-3 md:px-16 gap-2">
      <h2 class="text-shark text-xl font-bold md:text-4xl">About Me</h2>
      <p class="md:text-lg md:w-full">I'm Lucas, an aspiring programmer on a <strong>continuous learning journey</strong>. Currently, I'm dedicated to honing my skills in programming and exploring the diverse realms of software development.</p>

      <p class="md:text-lg">I am investing my time in studies, acquiring knowledge in <strong>JavaScript, Vue and Tailwind</strong>. My passion for problem-solving and creating innovative solutions drives me to delve deep into the programming universe.</p>
    </section>

    <section class="flex flex-col items-center ">
      <h2 class="text-shark text-xl md:text-4xl font-bold">My Habilities:</h2>
      <ul class="flex flex-wrap md:justify-center md:p-4 w-screen md:w-full px-4 gap-3 select-none">
        <div class="flex">
          <img class="w-5" src="../assets/html5.svg" alt="">
          <li class="text-lg">HTML</li>
        </div>
        <div class="flex">
          <img class="w-5" src="../assets/css3.svg" alt="">
          <li class="text-lg">CSS</li>
        </div>
        <div class="flex">
          <img class="w-5" src="../assets/javascript.svg" alt="">
          <li class="text-lg">JavaScript</li>
        </div>
        <div class="flex">
          <img class="w-5" src="../assets/vue.svg" alt="">
          <li class="text-lg">Vue.js</li>
        </div>
        <div class="flex">
          <img class="w-5" src="../assets/react.svg" alt="">
          <li class="text-lg">React</li>
        </div>
        <div class="flex">
          <img class="w-5" src="../assets/mysql.svg" alt="">
          <li class="text-lg">MySQL</li>
        </div>
      </ul>
    </section>

    <section class="md:px-16">
      <p class="p-3 md:text-lg">Throughout my learning journey, I have developed <router-link to="/projects" class="font-black underline" >projects</router-link>. Each project represents a significant step in my evolution as a programmer, showcasing my ability to apply learned concepts in practical scenarios.</p>

      <p class="p-3 md:text-lg"><strong>I am open to collaboration, learning opportunities, and sharing experiences</strong>. Feel free to reach out to me through <a href="" class="underline">GitHub</a> or <a href="" class="underline">Linkedin</a>. Thank you for visiting my portfolio, and I look forward to sharing my programming journey with you!</p>
    </section>
  </main>
</template>
