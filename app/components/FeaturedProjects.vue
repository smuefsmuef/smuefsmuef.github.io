<script setup lang="ts">
const { data: projects } = await useAsyncData('featured-home-projects', () => queryCollection('projects').order('id', 'ASC').all())
const { data: publications } = await useAsyncData('featured-home-publications', () => queryCollection('publications').order('id', 'ASC').all())

const featuredTitles = [
  'Polybau gestaltet die Zukunft mit KI',
  'yappi — What do you think, dear developer?',
  'Who is the biggest beast?',
]

const items = computed(() => {
  const projectItems = (projects.value ?? []).map((p) => ({ ...p, categories: [p.category] }))

  const writingItems = (publications.value ?? []).map((pub) => ({
    id: pub.id,
    title: pub.title,
    image: pub.image,
    description: pub.description ?? pub.venue,
    tools: pub.type === 'blogpost' ? 'Blog Post' : 'Publication',
    categories: ['writing' as const, ...(pub.extraCategories ?? [])],
    link: pub.link,
  }))

  const all = [...writingItems, ...projectItems]

  return featuredTitles.map((title) => all.find((item) => item.title === title)).filter(Boolean)
})
</script>

<template>
  <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <ProjectCard v-for="project in items" :key="project.id" :project="project" />
  </div>
</template>
