<script setup lang="ts">
import { categoryMeta } from '~/utils/categoryMeta'

const props = defineProps<{
  project: {
    title: string
    image?: string
    description: string
    tools: string
    categories: Array<'dev' | 'design' | 'pm' | 'writing'>
    link?: string
  }
}>()

const badges = computed(() => props.project.categories.map((category) => categoryMeta[category]))
</script>

<template>
  <component
    :is="project.link ? 'a' : 'div'"
    :href="project.link"
    :target="project.link ? '_blank' : undefined"
    :rel="project.link ? 'noopener noreferrer' : undefined"
    class="flex flex-col overflow-hidden rounded-lg bg-[var(--color-surface)] shadow-[0_1px_2px_var(--shadow)] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_-6px_color-mix(in_srgb,var(--color-grad-b)_40%,var(--shadow))]"
  >
    <div class="flex h-48 w-full items-center justify-center bg-[var(--color-tag)]">
      <img v-if="project.image" :src="project.image" :alt="project.title" class="h-full w-full object-cover" />
      <Icon v-else :name="badges[0].icon" class="h-12 w-12 text-[var(--color-tag-ink)]" aria-hidden="true" />
    </div>
    <div class="flex flex-1 flex-col p-5">
      <div class="flex flex-wrap items-center gap-2">
        <h3 class="text-lg font-semibold text-[var(--color-ink)]">{{ project.title }}</h3>
        <span
          v-for="badge in badges"
          :key="badge.label"
          class="inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[0.55rem] font-semibold"
          :class="badge.badgeClass"
        >
          <Icon :name="badge.icon" class="h-2 w-2" />
          {{ badge.label }}
        </span>
      </div>
      <p class="mt-2 flex-1 text-sm text-[var(--color-ink-muted)]">{{ project.description }}</p>
      <p class="mt-4 font-mono text-xs uppercase tracking-wide text-[var(--color-brand-teal)]">{{ project.tools }}</p>
    </div>
  </component>
</template>
