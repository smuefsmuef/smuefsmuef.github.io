<script setup lang="ts">
import { categoryMeta } from '~/utils/categoryMeta'

const props = defineProps<{
  item: {
    role: string
    organization: string
    categories: Array<'pm' | 'dev' | 'design'>
    dateStart: string
    dateEnd?: string
    current?: boolean
    location?: string
    summary: string
    highlights?: string[]
    link?: string
  }
}>()

function formatDate(value: string) {
  const [year, month] = value.split('-').map(Number)
  return new Date(year, month - 1).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}

const badges = computed(() => props.item.categories.map((category) => categoryMeta[category]))
</script>

<template>
  <li class="relative pl-8 sm:pl-10">
    <span class="absolute left-0 top-1.5 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-brand-teal sm:block" aria-hidden="true" />
    <article>
      <div class="flex flex-wrap items-center gap-2">
        <span
          v-for="badge in badges"
          :key="badge.label"
          class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold"
          :class="badge.badgeClass"
        >
          <Icon :name="badge.icon" class="h-3 w-3" />
          {{ badge.label }}
        </span>
        <p class="text-sm text-[var(--color-ink-muted)]">
          <time :datetime="item.dateStart">{{ formatDate(item.dateStart) }}</time>
          –
          <time v-if="item.dateEnd" :datetime="item.dateEnd">{{ formatDate(item.dateEnd) }}</time>
          <span v-else>Present</span>
          <span v-if="item.location"> · {{ item.location }}</span>
        </p>
      </div>

      <h3 class="mt-2 text-lg font-semibold text-brand-teal">{{ item.role }}</h3>
      <p class="text-sm font-medium text-[var(--color-ink)]">
        <a v-if="item.link" :href="item.link" target="_blank" class="underline decoration-brand-teal/40 underline-offset-2 hover:decoration-brand-teal">{{ item.organization }}</a>
        <span v-else>{{ item.organization }}</span>
      </p>

      <p class="mt-2 text-sm text-[var(--color-ink-muted)]">{{ item.summary }}</p>

      <ul v-if="item.highlights?.length" class="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--color-ink-muted)]">
        <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
      </ul>
    </article>
  </li>
</template>
