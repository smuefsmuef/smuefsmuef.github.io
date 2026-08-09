<script setup lang="ts">
useSeoMeta({
  title: 'Petra Kohler — Product Owner & Software Developer',
  description: 'Petra Kohler leads and builds software projects in Zurich — Product Ownership, Project Leadership, Development and Design.',
})
</script>

<template>
  <div>
    <h1 class="sr-only">Petra Kohler — Product Owner &amp; Software Developer</h1>

    <section class="bg-white py-16">
      <div class="mx-auto max-w-6xl px-6 sm:px-10">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <h2 class="text-2xl font-semibold text-brand-teal">Leadership &amp; Product Ownership</h2>
          <NuxtLink to="/experience" class="text-sm font-medium text-brand-teal hover:underline">
            See full experience →
          </NuxtLink>
        </div>
        <div class="mt-8">
          <ExperienceTimeline category="pm" :limit="3" />
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-16">
      <div class="mx-auto max-w-6xl px-6 sm:px-10">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <h2 class="text-2xl font-semibold text-brand-teal">Featured Development Work</h2>
          <NuxtLink to="/projects" class="text-sm font-medium text-brand-teal hover:underline">
            See all projects →
          </NuxtLink>
        </div>
        <div class="mt-8">
          <FeaturedProjects category="dev" :limit="4" />
        </div>
      </div>
    </section>

    <section class="bg-white py-16">
      <div class="mx-auto max-w-6xl px-6 sm:px-10">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <h2 class="text-2xl font-semibold text-brand-teal">About Me</h2>
          <NuxtLink to="/about" class="text-sm font-medium text-brand-teal hover:underline">
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
