<script setup lang="ts">
useSeoMeta({
  title: 'Projects — Petra Kohler',
  description: 'Projects by Petra Kohler — apps, prototypes and case studies.',
})
</script>

<template>
  <div class="mx-auto max-w-3xl px-6 py-14 sm:px-10">
    <PageIntro eyebrow="Selected work" title="Projects">
      A selection of work, from university projects to personal experiments.
    </PageIntro>

    <div class="mt-14">
      <ProjectsSection />
    </div>

    <div class="mt-16 border-t border-[var(--color-line)] pt-12">
      <p class="eyebrow mb-6">Publications &amp; Blog Posts</p>
      <PublicationsSection />
    </div>
  </div>
</template>
