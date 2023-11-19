<template>
  <section class="section">
    <h2 class="title" style="font-variant: small-caps">Netlify</h2>
    <p v-if="sitesLoading || userLoading">Loading...</p>
    <div v-else class="content">
      <div class="user">
        <p>Name: {{ user?.full_name }}</p>
        <p>Email: {{ user?.email }}</p>
        <p>Sites: {{ user?.site_count }}</p>
      </div>
      <ul class="sites">
        <UiCard v-for="site in sites" class="site">
          <UiCardHeader>
            <UiCardTitle class="name">{{ site.name }}</UiCardTitle>
          </UiCardHeader>
          <UiCardContent class="details">
            <p>
              <strong>URL: </strong>
              <NuxtLink :to="site.url" target="_blank" class="url">{{
                site.url
              }}</NuxtLink>
            </p>
            <p>
              <strong>Admin URL: </strong>
              <NuxtLink :to="site.url" target="_blank" class="url">{{
                site.admin_url
              }}</NuxtLink>
            </p>
            <p>
              <strong>Latest deploy: </strong>
              {{
                new Date(site.published_deploy.published_at).toLocaleString()
              }}
            </p>
          </UiCardContent>
          <UiCardFooter>
            <UiButton
              variant="secondary"
              asChild
              class="moreBtn"
              style="font-variant: small-caps"
            >
              <NuxtLink>More</NuxtLink>
            </UiButton>
          </UiCardFooter>
        </UiCard>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { NetlifySites } from "@/types/queries";
import type { NetlifyUser } from "@/types/queries";
const runtimeConfig = useRuntimeConfig();

const { data: sites, pending: sitesLoading } = await useFetch<NetlifySites[]>(
  "https://api.netlify.com/api/v1/sites",
  {
    headers: {
      "User-Agent": "SiteStats",
      Authorization: `Bearer ${runtimeConfig.public.NETLIFY_TOKEN}`,
    },
  }
);
console.log("🚀 ~ file: Netlify.vue:58 ~ sites:", sites.value);

const { data: user, pending: userLoading } = await useFetch<NetlifyUser>(
  "https://api.netlify.com/api/v1/user",
  {
    headers: {
      "User-Agent": "SiteStats",
      Authorization: `Bearer ${runtimeConfig.public.NETLIFY_TOKEN}`,
    },
  }
);
</script>

<style scoped lang="postcss">
.section {
  .title {
    @apply font-semibold text-7xl text-teal-500 text-center lowercase pb-8;
  }
  .content {
    @apply flex flex-col gap-4;
    .user {
      @apply flex gap-4 justify-between items-center;
    }
    .sites {
      @apply grid grid-cols-3 gap-8;
      .site {
        @apply flex flex-col gap-2 hover:scale-105 transition duration-300 ease-in-out relative;
        .details {
          .url {
            @apply hover:underline;
          }
        }
        .moreBtn {
          @apply w-full absolute bottom-0 left-0 right-0 lowercase font-semibold text-xl rounded-t-none;
        }
      }
    }
  }
}
</style>
