<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    category?: 'pm' | 'dev' | 'design'
    limit?: number
  }>(),
  { category: undefined, limit: undefined }
)

const { data: allExperience } = await useAsyncData(
  `experience-${props.category ?? 'all'}`,
  () => queryCollection('experience').order('dateStart', 'DESC').all()
)

const items = computed(() => {
  const filtered = props.category
    ? (allExperience.value ?? []).filter((item) => item.categories.includes(props.category))
    : (allExperience.value ?? [])
  return props.limit ? filtered.slice(0, props.limit) : filtered
})

const showContinuation = computed(() => !props.category && !props.limit)
</script>

<template>
  <ol class="relative space-y-8 sm:border-l sm:border-[var(--color-line)]">
    <ExperienceItem v-for="item in items" :key="item.id" :item="item" />

    <li v-if="showContinuation" class="relative pl-8 sm:pl-10">
      <span class="absolute left-0 top-1 hidden -translate-x-1/2 flex-col items-center gap-1.5 sm:flex" aria-hidden="true">
        <span class="h-1.5 w-1.5 rounded-full bg-[var(--color-line-strong)]" />
        <span class="h-1.5 w-1.5 rounded-full bg-[var(--color-line-strong)]" />
        <span class="h-1.5 w-1.5 rounded-full bg-[var(--color-line-strong)]" />
      </span>
      <p class="text-sm italic text-[var(--color-ink-muted)]">
        …and several earlier roles, starting with a commercial apprenticeship (Kaufmännische Lehre) at an architecture office, 2001–2004.
      </p>
    </li>
  </ol>
</template>
