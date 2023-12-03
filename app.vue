<template>
  <div class="app">
    <TooltipProvider>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </TooltipProvider>
  </div>
</template>

<style scoped lang="postcss">
.app {
  @apply bg-background text-foreground min-h-screen scroll-smooth;
}
</style>
