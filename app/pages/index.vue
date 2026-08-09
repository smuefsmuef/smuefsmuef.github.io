<script setup lang="ts">
useSeoMeta({
  title: 'Petra Kohler — Product Owner',
  description: 'Petra Kohler leads and builds software projects in Zurich — Product Ownership, Project Leadership, Development and Design.',
})
</script>

<template>
  <div>
    <h1 class="sr-only">Petra Kohler — Product Owner</h1>

    <section class="relative bg-[var(--color-surface)] py-16">
      <PetroglyphMotif variant="dots-c" />
      <div class="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        <PageIntro eyebrow="About me" title="" level="h2">
          I'm Petra, a Product Owner and Project Manager based in Zurich. I like being close to both the
          people who decide what to build and the code that builds it. Leading projects end to end,
          from requirements and stakeholder alignment to shipped features.
        </PageIntro>

        <div class="mt-14">
          <AboutSection />
        </div>
      </div>
    </section>

    <section class="relative bg-[var(--color-bg)] py-16">
      <SectionGlow corner="tr" />
      <PetroglyphMotif variant="dots-a" />
      <div class="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="eyebrow mb-2">Experience</p>
            <h2 class="gradient-heading text-2xl sm:text-3xl"></h2>
          </div>
          <NuxtLink to="/experience" class="underline-fade text-sm font-medium text-[var(--color-ink-muted)] hover:text-brand-teal">
            See full experience →
          </NuxtLink>
        </div>
        <div class="mt-8">
          <ExperienceTimeline category="pm" :limit="2" />
        </div>
      </div>
    </section>

    <section class="relative bg-[var(--color-surface)] py-16">
      <SectionGlow corner="bl" />
      <PetroglyphMotif variant="spiral-a" />
      <PetroglyphMotif variant="dots-b" />
      <div class="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="eyebrow mb-2">Featured projects</p>
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

    <section class="relative bg-[var(--color-bg)] py-16">
      <SectionGlow corner="br" />
      <PetroglyphMotif variant="river" />
      <PetroglyphMotif variant="dots-d" />
      <div class="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        <p class="eyebrow mb-2">Get in touch</p>
        <h2 class="gradient-heading text-2xl sm:text-3xl">Find Me</h2>
        <div class="mt-6">
          <SocialLinks />
        </div>
      </div>
    </section>
  </div>
</template>
