<script setup lang="ts">
import { categoryMeta } from '~/utils/categoryMeta'

const props = defineProps<{
  project: {
    title: string
    image?: string
    description: string
    tools: string
    category: 'dev' | 'design' | 'pm' | 'writing'
    link?: string
  }
}>()

const tags = computed(() => props.project.tools.split(',').map((tool) => tool.trim()).filter(Boolean))
const visibleTags = computed(() => tags.value.slice(0, 3))
const extraCount = computed(() => Math.max(0, tags.value.length - 3))
const meta = computed(() => categoryMeta[props.project.category])
</script>

<template>
  <li>
    <component
      :is="project.link ? 'a' : 'div'"
      :href="project.link"
      :target="project.link ? '_blank' : undefined"
      :rel="project.link ? 'noopener noreferrer' : undefined"
      class="group -mx-2 flex items-center gap-5 rounded-lg px-2 py-3 transition hover:bg-[var(--color-brand-teal)]/[0.06]"
    >
      <span class="flex h-[76px] w-[76px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[var(--color-tag)] shadow-[0_1px_2px_var(--shadow)] transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_20px_-4px_color-mix(in_srgb,var(--color-grad-b)_45%,var(--shadow))]">
        <img v-if="project.image" :src="project.image" :alt="`${project.title} screenshot`" loading="lazy" class="h-full w-full object-cover" />
        <Icon v-else :name="meta.icon" class="h-7 w-7 text-[var(--color-tag-ink)]" aria-hidden="true" />
      </span>

      <span class="min-w-0 flex-shrink">
        <span class="flex flex-wrap items-center gap-2">
          <h3 class="text-base font-semibold text-[var(--color-ink)] transition group-hover:text-[var(--color-brand-teal)]">
            {{ project.title }}
          </h3>
          <span
            class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.65rem] font-semibold"
            :class="meta.badgeClass"
          >
            <Icon :name="meta.icon" class="h-2.5 w-2.5" />
            {{ meta.label }}
          </span>
        </span>
        <p class="mt-0.5 line-clamp-2 text-sm text-[var(--color-ink-muted)]">{{ project.description }}</p>
        <span class="mt-2 flex flex-wrap gap-1.5">
          <span
            v-for="tag in visibleTags"
            :key="tag"
            class="rounded bg-[var(--color-tag)] px-1.5 py-0.5 font-mono text-[0.68rem] text-[var(--color-tag-ink)]"
          >{{ tag }}</span>
          <span v-if="extraCount > 0" class="rounded bg-[var(--color-tag)] px-1.5 py-0.5 font-mono text-[0.68rem] text-[var(--color-tag-ink)]">+{{ extraCount }}</span>
        </span>
      </span>

      <span class="min-w-6 flex-1 border-b border-dashed border-[var(--color-line)] transition group-hover:border-[var(--color-line-strong)] max-sm:hidden" />

      <svg v-if="project.link" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" class="h-4 w-4 flex-shrink-0 text-[var(--color-ink-muted)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-brand-teal)] max-sm:hidden">
        <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </component>
  </li>
</template>
