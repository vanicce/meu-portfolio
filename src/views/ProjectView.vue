<script setup>
  const toTop = (() => {
    document.body.scrollTop = 0
  })()
</script>

<template>
  <main class="flex flex-col">
    <h2 class="text-center text-xl p-5 font-black">Projetos Principais</h2>
    <section class="flex h-screen items-center flex-col">
      <div class="flex flex-col border-2 rounded-md p-3 m-3">
        <h3>GitHub Card</h3>
        <p>Breve descrição do Projeto 1.</p>
      </div>
      <div class="flex flex-col border-2 rounded-md p-3 m-3">
        <h3>Pomodoro Timer</h3>
        <p>Breve descrição do Projeto 2.</p>
      </div>
      <div class="flex flex-col border-2 rounded-md p-3 m-3">
        <h3>Nome do Projeto 3</h3>
        <p>Breve descrição do Projeto 3.</p>
      </div>
      <div class="flex flex-col border-2 rounded-md p-3 m-3">
        <h3>Nome do Projeto 4</h3>
        <p>Breve descrição do Projeto 4.</p>
      </div>
    </section>
  </main>
</template>
