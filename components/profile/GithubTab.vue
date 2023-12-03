<template>
  <TabsContent value="github">
    <form @submit.prevent="handleGithub">
      <Input
        v-model="github"
        :placeholder="profile.github_token ?? 'GitHub token'"
        type="text"
        required
      />
      <Input
        v-model="githubName"
        :placeholder="profile.github_token ?? 'GitHub username'"
        type="text"
        required
      />
      <Button>Add</Button>
    </form>
  </TabsContent>
</template>

<script setup>
const props = defineProps({
  profile: {
    required: true,
  },
});
const { profile } = props;

const github = ref("");
const githubName = ref("");

const handleGithub = async () => {
  const { data, error } = await supabase
    .from("profiles")
    .upsert({ github_token: github, github_username: githubName })
    .select()
    .eq("email", user.value.email);
  if (error) {
    console.error(error.message);
  }
  if (data) {
    console.log(data);
  }
};
</script>

<style scoped lang="postcss"></style>
