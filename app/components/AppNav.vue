<script setup lang="ts">
const open = ref(false)

const links = [
  { label: 'Contact', href: '#footer' },
  { label: 'About Me', href: '#about' },
  { label: 'Artefacts', href: '#artefact' },
]
</script>

<template>
  <nav class="relative flex items-center justify-end px-6 py-4 sm:px-10">
    <button
      class="text-white sm:hidden"
      type="button"
      aria-label="Toggle navigation"
      @click="open = !open"
    >
      <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <ul class="hidden gap-8 sm:flex">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" class="text-white transition hover:text-white/70 hover:underline">
          {{ link.label }}
        </a>
      </li>
    </ul>

    <ul v-if="open" class="absolute right-6 top-full z-10 mt-2 flex flex-col gap-3 rounded-lg bg-brand-teal p-4 shadow-lg sm:hidden">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" class="text-white" @click="open = false">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>
