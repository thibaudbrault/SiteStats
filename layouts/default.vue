<template>
  <header class="header">
    <div>
      <NuxtLink class="name" :to="Routes.HOME">
        <Icon name="iconoir:network-left" />
        <p class="title">SiteStats</p>
      </NuxtLink>
    </div>
    <nav class="nav">
      <div v-if="user" class="connected">
        <NuxtLink :to="Routes.DASHBOARD">Dashboard</NuxtLink>
        <Dialog>
          <DialogTrigger>Profile</DialogTrigger>
          <Profile />
        </Dialog>
        <button @click="logout">Logout</button>
      </div>
      <Button v-else asChild>
        <NuxtLink :to="Routes.LOGIN">Login</NuxtLink>
      </Button>
    </nav>
  </header>
  <slot />
</template>

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
  await navigateTo(Routes.HOME);
};
</script>

<style scoped lang="postcss">
.header {
  @apply flex justify-between items-center;
  .name {
    @apply flex gap-2 items-center;
    svg {
      @apply text-4xl;
    }
    .title {
      @apply font-bold text-foreground text-4xl;
    }
  }
  .nav {
    .connected {
      @apply flex gap-6;
    }
  }
}
</style>
