<script setup>
import { onMounted } from 'vue';

const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);

const handleMouse = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const deltaX = mouseX - centerX;
  const deltaY = mouseY - centerY;

  const angleX = (deltaY / centerY) * 75;
  const angleY = (-deltaX / centerX) * 75;

  const elemento = document.getElementById('elemento');
  if (elemento) {
    elemento.style.transform = `rotate3d(1, 0, 0, ${angleX}deg) rotate3d(0, 1, 0, ${angleY}deg)`;
  }
};

onMounted(() => {
  if (!isMobile()) {
    window.addEventListener('mousemove', handleMouse);
  }
});
</script>

<template>
  <main @mousemove="!isMobile()" class="flex flex-col items-center p-4 dark:text-[#BBBBBB]">
    <div class="box border-[5px] rounded-xl border-transparent w-56 h-56 my-4" id="elemento">
      <img class="select-none rounded-xl" src="https://avatars.githubusercontent.com/u/103083001?v=4" alt="">
    </div>
    <div>
      <h1 class="text-2xl md:text-4xl font-black text-center">Hi, my name is Lucas.</h1>
    </div>
    <p class="text-lg md:text-2xl text-center md:px-16">
      Front-end developer passionate about <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-black">creating intuitive
        user experiences</span>. Always seeking new challenges and ways to improve my skills. <br /> Here you will find
      some projects and learn a little about me.
    </p>
    <router-link
      class="border border-black rounded-md p-2 px-4 m-4 transition hover:scale-110 font-bold md:text-lg dark:border-[#BBBBBB]"
      to="/about">Enjoy!</router-link>
  </main>
</template>

<style scoped>
.box {
  background: linear-gradient(var(--angle),
      rgb(248, 88, 168),
      #6425f9) border-box;
  animation: 1s rotate linear infinite;
}

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
</style>
