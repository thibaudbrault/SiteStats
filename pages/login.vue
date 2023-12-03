<script setup>
definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <main class="main">
    <Auth />
  </main>
</template>

<style scoped lang="postcss">
.main {
  @apply flex items-center justify-center h-screen;
}
</style>
