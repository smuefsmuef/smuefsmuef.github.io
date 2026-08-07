<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () => queryCollection('projects').order('id', 'ASC').all())
</script>

<template>
  <section id="artefact" class="bg-gray-50 py-16">
    <div class="mx-auto grid max-w-6xl gap-8 px-6 sm:px-10 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>
