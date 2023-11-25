<template>
  <div >
    <div class="flex h-full items-center gap-3 border border-gray-500/20 rounded-[14px] backdrop-blur-sm px-3 bg-white/40">
      <router-link class="element" to="/">Home</router-link>
      <router-link class="element" to="/about">About</router-link>
      <router-link class="element" to="/projects">Projects</router-link>
    </div>
  </div>
</template>

<style scoped>
.element {
  position: relative;
  display: inline-block;
  color: #333; /* Cor do texto */
}

.element::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px; /* Espessura do underline */
  background-color: #333; /* Cor do underline normal */
  transform: scaleX(0); /* Inicialmente, o underline está invisível */
  transition: transform 0.3s ease; /* Adiciona uma transição suave */
}

.element:hover::after,
a.router-link-active::after {
  transform: scaleX(1); /* Quando o mouse está sobre o elemento, o underline aparece */
}

</style>
