<script setup lang="ts">
useSeoMeta({
  title: 'About — Petra Kohler',
  description: 'Petra Kohler — Product Owner and software developer based in Zurich.',
})
</script>

<template>
  <div class="mx-auto max-w-4xl px-6 py-14 sm:px-10">
    <PageIntro eyebrow="Who I am" title="About Me">
      I'm Petra, a Product Owner and developer based in Zurich. I like being close to both the
      people who decide what to build and the code that builds it — leading projects end to end,
      from requirements and stakeholder alignment to shipped features.
    </PageIntro>

    <p class="mt-4 max-w-2xl text-[var(--color-ink-muted)]">
      I hold a Bachelor's degree in Computer Science from FHNW, with a focus on Design and
      Management.
    </p>

    <div class="mt-12">
      <AboutSection />
    </div>
  </div>
</template>
