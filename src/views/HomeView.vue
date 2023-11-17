<script setup>
let spotify = "https://open.spotify.com/intl-pt/artist/5INjqkS1o8h1imAzPqGZBb"

  // document.addEventListener('mousemove', (event) => {
  //   const mouseX = event.clientX / window.innerWidth
  //   const mouseY = event.clientY / window.innerHeight

  //   document.querySelector('main').style.background = `radial-gradient(circle at ${mouseX * 100}% ${mouseY * 100}%, red, rgb(245 245 244) )`
  // })
  function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)
</script>

<template >
  <main class="flex flex-col items-center p-4">
    <!-- <div id="circle" class="w-1 h-1 absolute" :class="['top-{{ mouseX }}', 'left-{{ mouseY }}']"></div> -->
    <div class="w-56 h-56 text-4xl font-bold overflow-clip rounded-full ring-2 ring-black ring-offset-2 my-3">
      <img class="" src="../assets/eu3.jpeg" alt="">
    </div>
    <div>
      <h1 class="text-2xl md:text-4xl font-black text-center">Hi, my name is Lucas.</h1>
    </div>
    <p class="text-lg md:text-2xl text-center">I love programming, games and
    <a class="underline decoration-slate-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500" target="_blank" :href="spotify">Tame Impala.</a> Here you will find some projects and learn a little about me.</p>
    <router-link class="border border-black rounded-md p-2 px-4 m-4 transition hover:scale-110 font-bold s text-lg" to="/about">Enjoy!</router-link>
  </main>
</template>
