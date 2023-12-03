<template>
  <main class="auth">
    <section class="email">
      <input v-model="email" type="email" />
      <button @click="signInWithOtp">Sign In with E-Mail</button>
    </section>
  </main>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");

const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: "http://localhost:3000/confirm",
    },
  });
  if (error) {
    console.log(error);
  }
};
</script>

<style lang="postcss">
.auth {
  @apply bg-neutral-800 p-6 rounded-md flex justify-center items-center flex-col;
  .email {
    @apply flex flex-col;
    input {
      @apply bg-transparent rounded-md border border-neutral-100 px-1;
    }
  }
}
</style>
