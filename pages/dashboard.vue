<template>
  <main class="main">
    <Profile />
    <Separator class="separator" />
    <Github />
    <Separator class="separator" />
    <Netlify />
    <Separator class="separator" />
    <Cloudflare />
  </main>
</template>

<script setup></script>

<style scoped lang="postcss">
.main {
  @apply flex flex-col gap-12;
}
.separator {
  @apply w-11/12 mx-auto;
}
</style>
