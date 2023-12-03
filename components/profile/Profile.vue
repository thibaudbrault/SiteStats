<script setup>
import GithubTab from './GithubTab.vue'

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const netlify = ref('')

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
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit your profile</DialogTitle>
    </DialogHeader>
    <Tabs default-value="github">
      <TabsList>
        <TabsTrigger value="github">
          GitHub
        </TabsTrigger>
        <TabsTrigger value="netlify">
          Netlify
        </TabsTrigger>
      </TabsList>
      <GithubTab :profile="profile" />
      <TabsContent value="netlify">
        <Input
          v-model="netlify"
          :placeholder="profile.netlify ?? 'Netlify token'"
          type="text"
          required
        />
        <Button>Add</Button>
      </TabsContent>
    </Tabs>
  </DialogContent>
</template>

<style lang="postcss"></style>
