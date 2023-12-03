<script setup lang="ts">
const supabase = useSupabaseClient()
const runtimeConfig = useRuntimeConfig()
const email = ref('')

async function signInWithOtp() {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: `${runtimeConfig.public.SITE_URL}/confirm`,
    },
  })
  if (error)
    console.error(error)
}
</script>

<template>
  <main class="auth">
    <section class="title">
      <h1 style="font-variant: small-caps">
        Login
      </h1>
      <p>Check your email</p>
    </section>
    <section class="email">
      <Field value="email" label="Email">
        <Input v-model="email" type="email" placeholder="Email" />
      </Field>
      <Button @click="signInWithOtp">
        Sign In with E-Mail
      </Button>
    </section>
  </main>
</template>

<style lang="postcss">
.auth {
  @apply bg-neutral-800 p-8 rounded-md flex justify-center items-center flex-col gap-8 border;
  .title {
    @apply flex flex-col items-center justify-center gap-1;
    h1 {
      @apply text-6xl font-bold text-center lowercase;
    }
    p {
      @apply text-sm text-muted-foreground;
    }
  }
  .email {
    @apply flex flex-col gap-4;
    input {
      @apply bg-transparent rounded-md border border-neutral-100 px-1;
    }
  }
}
</style>
