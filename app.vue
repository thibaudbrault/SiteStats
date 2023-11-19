<template>
  <div class="app">
    <UiTooltipProvider>
    <header class="header">
      <div class="name">
        <Icon name="iconoir:network-left" />
        <h1 class="title">SiteStats</h1>
      </div>
      <nav class="nav">
            <NuxtLink to="#netlify">Netlify</NuxtLink>
            <NuxtLink to="#github">Github</NuxtLink>
      </nav>
    </header>
    <NuxtPage />
  </UiTooltipProvider>
  </div>
</template>

<style scoped lang="postcss">
.app {
  @apply bg-background text-foreground min-h-screen p-8 scroll-smooth;
  .header {
    @apply pb-8 flex justify-between items-center;
    .name {
      @apply flex gap-2 items-center;
      svg {
        @apply text-4xl;
      }
      .title {
        @apply font-bold text-foreground text-4xl
      }
    }
    .nav {
      @apply flex gap-4;
    }
  }
}
</style>
