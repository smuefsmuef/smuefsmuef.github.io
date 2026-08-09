<script setup lang="ts">
const { data: publications } = await useAsyncData('publications', () => queryCollection('publications').order('id', 'ASC').all())

const typeLabel = { publication: 'Publication', blogpost: 'Blog Post' }
</script>

<template>
  <ul class="space-y-4">
    <li
      v-for="pub in publications"
      :key="pub.id"
      class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-dashed border-[var(--color-line)] pb-4 last:border-none"
    >
      <div class="min-w-0">
        <div class="flex flex-wrap items-center gap-2">
          <span class="rounded-full bg-[var(--color-tag)] px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-[var(--color-tag-ink)]">
            {{ typeLabel[pub.type] }}
          </span>
        </div>
        <p class="mt-1 text-sm font-semibold text-[var(--color-ink)]">
          <a v-if="pub.link" :href="pub.link" target="_blank" class="underline decoration-brand-teal/40 underline-offset-2 hover:decoration-brand-teal">{{ pub.title }}</a>
          <span v-else>{{ pub.title }}</span>
        </p>
        <p class="text-xs text-[var(--color-ink-muted)]">{{ pub.venue }}</p>
        <p v-if="pub.description" class="mt-1.5 max-w-2xl text-sm text-[var(--color-ink-muted)]">{{ pub.description }}</p>
      </div>
      <span class="whitespace-nowrap font-mono text-xs text-[var(--color-ink-muted)]">{{ pub.date }}</span>
    </li>
  </ul>
</template>
