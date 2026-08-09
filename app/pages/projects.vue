<script setup lang="ts">
useSeoMeta({
  title: 'Projects — Petra Kohler',
  description: 'Development and design projects by Petra Kohler — apps, prototypes and case studies.',
})
</script>

<template>
  <div class="mx-auto max-w-6xl px-6 py-16 sm:px-10">
    <h1 class="text-3xl font-bold text-brand-teal sm:text-4xl">Projects</h1>
    <p class="mt-4 max-w-2xl text-gray-600">
      A selection of development and design work, from client projects to personal experiments.
    </p>

    <div class="mt-12">
      <ProjectsSection />
    </div>
  </div>
</template>
