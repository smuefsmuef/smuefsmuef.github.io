<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    category?: 'dev' | 'design'
    limit?: number
  }>(),
  { category: 'dev', limit: 4 }
)

const { data: projects } = await useAsyncData(`featured-projects-${props.category}`, () =>
  queryCollection('projects').order('id', 'ASC').all()
)

const items = computed(() => (projects.value ?? []).filter((p) => p.category === props.category).slice(0, props.limit))
</script>

<template>
  <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
    <ProjectCard v-for="project in items" :key="project.id" :project="project" />
  </div>
</template>
