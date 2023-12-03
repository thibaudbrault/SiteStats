<template>
  <section>
    <form @submit.prevent="handleGithub">
      <Input
        v-model="github"
        :placeholder="profile.github_token ?? 'Github token'"
        type="text"
        required
      />
      <Input
        v-model="githubName"
        :placeholder="profile.github_token ?? 'Github username'"
        type="text"
        required
      />
      <Button>Add</Button>
    </form>
  </section>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const github = ref("");
const githubName = ref("");

const { data: profile } = await useAsyncData("profiles", async () => {
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", user.value.email)
    .single();
  return data;
});

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

<style lang="postcss"></style>
