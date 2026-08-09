<template>
  <section class="bg-brand-teal">
    <div class="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-8 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div>
        <h1 class="text-4xl font-bold text-white sm:text-5xl">Hoi, I'm Petra.</h1>
        <h2 class="mt-4 text-xl text-white/90 sm:text-2xl">
          I lead software projects and build them —
          <br class="hidden sm:block" />
          product ownership, development and design, end to end.
        </h2>

        <div class="mt-8 flex flex-wrap gap-4">
          <CvDownloadButton />
          <NuxtLink
            to="/experience"
            class="inline-flex items-center gap-2 rounded-md border border-white px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            See my experience
            <Icon name="fa6-solid:arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
      <div class="flex justify-center lg:justify-end">
        <img src="/images/bronze.png" alt="A hand-carved stone tool" class="w-40 rotate-[10deg] sm:w-56" />
      </div>
    </div>
  </section>
</template>
