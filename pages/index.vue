<template>
  <main class="main">
    <section class="hero">
      <h1 class="title">Check your sites stats at a glance</h1>
    </section>
  </main>
</template>

<style scoped lang="postcss">
.main {
  @apply flex flex-col gap-12;
  .hero {
    @apply h-screen flex flex-col justify-center items-center;
    .title {
      @apply text-4xl font-bold;
    }
  }
}
</style>
