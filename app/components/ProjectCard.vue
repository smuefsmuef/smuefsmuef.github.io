<script setup lang="ts">
defineProps<{
  project: {
    title: string
    image: string
    description: string
    tools: string
    link?: string
  }
}>()
</script>

<template>
  <component
    :is="project.link ? 'a' : 'div'"
    :href="project.link"
    :target="project.link ? '_blank' : undefined"
    :rel="project.link ? 'noopener noreferrer' : undefined"
    class="flex flex-col overflow-hidden rounded-lg bg-[var(--color-surface)] shadow-[0_1px_2px_var(--shadow)] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_-6px_color-mix(in_srgb,var(--color-grad-b)_40%,var(--shadow))]"
  >
    <img :src="project.image" :alt="project.title" class="h-48 w-full object-cover" />
    <div class="flex flex-1 flex-col p-5">
      <h3 class="text-lg font-semibold text-[var(--color-ink)]">{{ project.title }}</h3>
      <p class="mt-2 flex-1 text-sm text-[var(--color-ink-muted)]">{{ project.description }}</p>
      <p class="mt-4 font-mono text-xs uppercase tracking-wide text-[var(--color-brand-teal)]">{{ project.tools }}</p>
    </div>
  </component>
</template>
