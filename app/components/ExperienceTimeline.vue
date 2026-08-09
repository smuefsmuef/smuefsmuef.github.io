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
    ? (allExperience.value ?? []).filter((item) => item.category === props.category)
    : (allExperience.value ?? [])
  return props.limit ? filtered.slice(0, props.limit) : filtered
})
</script>

<template>
  <ol class="relative space-y-8 sm:border-l sm:border-[var(--color-line)]">
    <ExperienceItem v-for="item in items" :key="item.id" :item="item" />
  </ol>
</template>
