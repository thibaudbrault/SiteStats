<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="field">
    <Label :for="value">{{ label }}</Label>
    <slot />
  </div>
</template>

<style scoped lang="postcss">
.field {
  @apply flex flex-col gap-2;
}
</style>
