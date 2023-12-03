<template>
  <div class="field">
    <Label :for="value">{{ label }}</Label>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="postcss">
.field {
  @apply flex flex-col gap-2;
}
</style>
