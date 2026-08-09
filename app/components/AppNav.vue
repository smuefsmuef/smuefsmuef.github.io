<script setup lang="ts">
const open = ref(false)
const toggleRef = useTemplateRef('toggleRef')
const firstMobileLinkRef = useTemplateRef('firstMobileLinkRef')

const links = [
  { label: 'Home', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
]

function close() {
  open.value = false
}

function toggle() {
  open.value = !open.value
  if (open.value) {
    nextTick(() => firstMobileLinkRef.value?.$el?.focus())
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) {
    open.value = false
    toggleRef.value?.focus()
  }
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <nav class="relative bg-brand-teal">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
      <NuxtLink to="/" class="text-lg font-semibold text-white" @click="close">Petra Kohler</NuxtLink>

      <button
        ref="toggleRef"
        class="text-white sm:hidden"
        type="button"
        aria-label="Toggle navigation"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        @click="toggle"
      >
        <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <ul class="hidden items-center gap-8 sm:flex">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-white transition hover:text-white/70 hover:underline"
            active-class="underline underline-offset-4"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
        <li>
          <CvDownloadButton variant="outline" />
        </li>
      </ul>
    </div>

    <ul
      v-if="open"
      id="mobile-menu"
      class="flex flex-col gap-4 bg-brand-teal px-6 pb-6 sm:hidden"
    >
      <li v-for="(link, index) in links" :key="link.to">
        <NuxtLink
          :ref="index === 0 ? 'firstMobileLinkRef' : undefined"
          :to="link.to"
          class="text-white"
          active-class="underline underline-offset-4"
          @click="close"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
      <li>
        <CvDownloadButton variant="outline" />
      </li>
    </ul>
  </nav>
</template>
