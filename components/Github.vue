<template>
  <section class="section" id="github">
    <h2 class="title" style="font-variant: small-caps">GitHub</h2>
    <div>
      <ul class="repos">
        <Card v-for="repo in repos" class="repo">
          <CardHeader>
            <CardTitle class="name">{{ repo.name }}</CardTitle>
            <CardDescription>{{ repo.description }}</CardDescription>
          </CardHeader>
          <CardContent class="details">
            <div>
              <strong>URL: </strong>
              <NuxtLink :to="repo.html_url" target="_blank" class="url">{{
                repo.html_url
              }}</NuxtLink>
            </div>
            <div class="stats">
              <Tooltip>
                <TooltipTrigger>
                  <p class="stat">
                    <Icon name="octicon:repo-forked-24" />
                    <TooltipContent>Forks</TooltipContent>
                    {{ repo.forks_count }}
                  </p>
                </TooltipTrigger>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <p class="stat">
                    <Icon name="octicon:star-24" />
                    <TooltipContent>Stars</TooltipContent>
                    {{ repo.stargazers_count }}
                  </p>
                </TooltipTrigger>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <p class="stat">
                    <Icon name="octicon:eye-24" />
                    <TooltipContent>Watchers</TooltipContent>
                    {{ repo.watchers_count }}
                  </p>
                </TooltipTrigger>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <p class="stat">
                    <Icon name="octicon:issue-opened-24" />
                    <TooltipContent>PR + Issues</TooltipContent>
                    {{ repo.open_issues_count }}
                  </p>
                </TooltipTrigger>
              </Tooltip>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="secondary"
              asChild
              class="moreBtn"
              style="font-variant: small-caps"
            >
              <NuxtLink>More</NuxtLink>
            </Button>
          </CardFooter>
        </Card>
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
  username: runtimeConfig.public.GITHUB_NAME,
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
