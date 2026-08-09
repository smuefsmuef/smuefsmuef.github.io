<script setup lang="ts">
useSeoMeta({
  title: 'About — Petra Kohler',
  description: 'Petra Kohler — Product Owner and software developer based in Zurich.',
})
</script>

<template>
  <div class="mx-auto max-w-4xl px-6 py-16 sm:px-10">
    <h1 class="text-3xl font-bold text-brand-teal sm:text-4xl">About Me</h1>

    <div class="mt-6 space-y-4 text-gray-600">
      <p>
        I'm Petra, a Product Owner and developer based in Zurich. I like being close to both the
        people who decide what to build and the code that builds it — leading projects end to end,
        from requirements and stakeholder alignment to shipped features.
      </p>
      <p>
        I hold a Bachelor's degree in Computer Science from FHNW, with a focus on Design and
        Management.
      </p>
    </div>

    <div class="mt-12">
      <AboutSection />
    </div>
  </div>
</template>
