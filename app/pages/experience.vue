<script setup lang="ts">
useSeoMeta({
  title: 'Experience — Petra Kohler',
  description: 'Product Ownership, Project Leadership and Development roles — Petra Kohler\'s full work experience timeline.',
})
</script>

<template>
  <div class="mx-auto max-w-4xl px-6 py-14 sm:px-10">
    <PageIntro eyebrow="Track record" title="Experience">
      A track record of leading and building software projects — from product ownership and
      Scrum leadership to hands-on development.
    </PageIntro>

    <div class="relative z-10 mt-6">
      <CvDownloadButton variant="brand" />
    </div>

    <div class="relative mt-12 py-2">
      <SectionGlow corner="br" />
      <PetroglyphMotif variant="sun" />
      <PetroglyphMotif variant="dots-c" />
      <div class="relative z-10">
        <ExperienceTimeline />
      </div>
    </div>
  </div>
</template>
