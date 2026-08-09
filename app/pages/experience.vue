<script setup lang="ts">
useSeoMeta({
  title: 'Experience — Petra Kohler',
  description: 'Product Ownership, Project Leadership and Development roles — Petra Kohler\'s full work experience timeline.',
})
</script>

<template>
  <div class="mx-auto max-w-4xl px-6 py-16 sm:px-10">
    <h1 class="text-3xl font-bold text-brand-teal sm:text-4xl">Experience</h1>
    <p class="mt-4 max-w-2xl text-gray-600">
      A track record of leading and building software projects — from product ownership and
      Scrum leadership to hands-on development.
    </p>

    <div class="mt-6">
      <CvDownloadButton variant="brand" />
    </div>

    <div class="mt-12">
      <ExperienceTimeline />
    </div>
  </div>
</template>
