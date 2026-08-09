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
  <a
    v-if="project.link"
    :href="project.link"
    target="_blank"
    class="flex flex-col overflow-hidden rounded-lg bg-white shadow transition hover:-translate-y-1 hover:shadow-lg"
  >
    <img :src="project.image" :alt="project.title" class="h-48 w-full object-cover" />
    <div class="flex flex-1 flex-col p-5">
      <h3 class="text-lg font-semibold text-brand-teal">{{ project.title }}</h3>
      <p class="mt-2 flex-1 text-sm text-gray-600">{{ project.description }}</p>
      <p class="mt-4 text-xs font-medium uppercase tracking-wide text-brand-teal">{{ project.tools }}</p>
    </div>
  </a>
  <div v-else class="flex flex-col overflow-hidden rounded-lg bg-white shadow">
    <img :src="project.image" :alt="project.title" class="h-48 w-full object-cover" />
    <div class="flex flex-1 flex-col p-5">
      <h3 class="text-lg font-semibold text-brand-teal">{{ project.title }}</h3>
      <p class="mt-2 flex-1 text-sm text-gray-600">{{ project.description }}</p>
      <p class="mt-4 text-xs font-medium uppercase tracking-wide text-brand-teal">{{ project.tools }}</p>
    </div>
  </div>
</template>
