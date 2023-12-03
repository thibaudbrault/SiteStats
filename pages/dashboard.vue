<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const { data: profile } = await useAsyncData('profiles', async () => {
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('email', user.value.email)
    .single()
  return data
})
</script>

<template>
  <main class="main">
    <Github v-if="profile.github_token && profile.github_username" />
    <Netlify />
    <Cloudflare />
  </main>
</template>

<style scoped lang="postcss">
.main {
  @apply flex flex-col gap-12;
}
</style>
