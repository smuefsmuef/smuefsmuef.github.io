<script setup lang="ts">
useSeoMeta({
  title: 'Petra Kohler — Product Owner & Software Developer',
  description: 'Petra Kohler leads and builds software projects in Zurich — Product Ownership, Project Leadership, Development and Design.',
})
</script>

<template>
  <div>
    <h1 class="sr-only">Petra Kohler — Product Owner &amp; Software Developer</h1>

    <section class="relative bg-[var(--color-surface)] py-16">
      <SectionGlow corner="tr" />
      <PetroglyphMotif variant="dots-a" />
      <div class="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="eyebrow mb-2">Leadership</p>
            <h2 class="gradient-heading text-2xl sm:text-3xl">Product Ownership</h2>
          </div>
          <NuxtLink to="/experience" class="underline-fade text-sm font-medium text-[var(--color-ink-muted)] hover:text-brand-teal">
            See full experience →
          </NuxtLink>
        </div>
        <div class="mt-8">
          <ExperienceTimeline category="pm" :limit="3" />
        </div>
      </div>
    </section>

    <section class="relative bg-[var(--color-bg)] py-16">
      <SectionGlow corner="bl" />
      <PetroglyphMotif variant="spiral-a" />
      <PetroglyphMotif variant="dots-b" />
      <div class="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="eyebrow mb-2">Building</p>
            <h2 class="gradient-heading text-2xl sm:text-3xl">Featured Development Work</h2>
          </div>
          <NuxtLink to="/projects" class="underline-fade text-sm font-medium text-[var(--color-ink-muted)] hover:text-brand-teal">
            See all projects →
          </NuxtLink>
        </div>
        <div class="mt-8">
          <FeaturedProjects category="dev" :limit="4" />
        </div>
      </div>
    </section>

    <section class="relative bg-[var(--color-surface)] py-16">
      <SectionGlow corner="tl" />
      <PetroglyphMotif variant="sun" />
      <div class="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="eyebrow mb-2">Who I am</p>
            <h2 class="gradient-heading text-2xl sm:text-3xl">About Me</h2>
          </div>
          <NuxtLink to="/about" class="underline-fade text-sm font-medium text-[var(--color-ink-muted)] hover:text-brand-teal">
            More about me →
          </NuxtLink>
        </div>
        <div class="mt-8">
          <AboutSection />
        </div>
      </div>
    </section>
  </div>
</template>
