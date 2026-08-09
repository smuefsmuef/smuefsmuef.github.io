<script setup lang="ts">
defineProps<{
  item: {
    icon: string
    title: string
    text: string
  }
}>()
</script>

<template>
  <div class="rounded-lg border border-[var(--color-line)] bg-[var(--color-bg)] p-6 text-center sm:p-7">
    <h3 class="text-lg font-semibold text-[var(--color-ink)]">{{ item.title }}</h3>
    <p class="mt-2 text-sm text-[var(--color-ink-muted)]">{{ item.text }}</p>
  </div>
</template>
