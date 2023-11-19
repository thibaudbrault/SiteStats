<template>
  <section class="section" id="github">
    <h2 class="title" style="font-variant: small-caps">GitHub</h2>
    <div>
      <ul class="repos">
        <UiCard v-for="repo in repos" class="repo">
          <UiCardHeader>
            <UiCardTitle class="name">{{ repo.name }}</UiCardTitle>
            <UiCardDescription>{{ repo.description }}</UiCardDescription>
          </UiCardHeader>
          <UiCardContent class="details">
            <div>
              <strong>URL: </strong>
              <NuxtLink :to="repo.html_url" target="_blank" class="url">{{
                repo.html_url
              }}</NuxtLink>
            </div>
            <div class="stats">
              <UiTooltip>
                <UiTooltipTrigger>
                  <p class="stat">
                    <Icon name="octicon:repo-forked-24" />
                    <UiTooltipContent>Forks</UiTooltipContent>
                    {{ repo.forks_count }}
                  </p>
                </UiTooltipTrigger>
              </UiTooltip>
              <UiTooltip>
                <UiTooltipTrigger>
                  <p class="stat">
                    <Icon name="octicon:star-24" />
                    <UiTooltipContent>Stars</UiTooltipContent>
                    {{ repo.stargazers_count }}
                  </p>
                </UiTooltipTrigger>
              </UiTooltip>
              <UiTooltip>
                <UiTooltipTrigger>
                  <p class="stat">
                    <Icon name="octicon:eye-24" />
                    <UiTooltipContent>Watchers</UiTooltipContent>
                    {{ repo.watchers_count }}
                  </p>
                </UiTooltipTrigger>
              </UiTooltip>
              <UiTooltip>
                <UiTooltipTrigger>
                  <p class="stat">
                    <Icon name="octicon:issue-opened-24" />
                    <UiTooltipContent>PR + Issues</UiTooltipContent>
                    {{ repo.open_issues_count }}
                  </p>
                </UiTooltipTrigger>
              </UiTooltip>
            </div>
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
import { Octokit } from "octokit";

const runtimeConfig = useRuntimeConfig();
const octokit = new Octokit({
  auth: runtimeConfig.public.GITHUB_TOKEN,
});

const { data: repos } = await octokit.rest.repos.listForUser({
  username: "thibaudbrault",
});
</script>
<style scoped lang="postcss">
.section {
  .title {
    @apply font-semibold text-7xl text-foreground text-center lowercase pb-8;
  }
  .repos {
    @apply grid grid-cols-3 gap-8;
    .repo {
      @apply flex flex-col gap-2 hover:scale-105 transition duration-300 ease-in-out relative;
      .details {
        .url {
          @apply hover:underline;
        }
        .stats {
          @apply flex gap-2 justify-between;
          .stat {
            @apply flex items-center gap-1;
          }
        }
      }
      .moreBtn {
        @apply w-full absolute bottom-0 left-0 right-0 lowercase font-semibold text-xl rounded-t-none;
      }
    }
  }
}
</style>
