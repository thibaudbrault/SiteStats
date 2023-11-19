<template>
  <main class="main">
    <Netlify />
    <UiSeparator class="separator" />
    <Github />
    <UiSeparator class="separator" />
    <Cloudflare />
  </main>
</template>

<style scoped lang="postcss">
.main {
  @apply flex flex-col gap-12;
}
.separator {
  @apply w-11/12 mx-auto;
}
</style>
