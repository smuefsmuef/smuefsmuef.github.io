<script setup lang="ts">
const open = ref(false)
const toggleRef = useTemplateRef('toggleRef')
const firstMobileLinkRef = useTemplateRef('firstMobileLinkRef')

const links = [
  { label: 'Home', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
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
  <nav
    class="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-bg)]/85 backdrop-blur-md after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-[linear-gradient(90deg,transparent,var(--color-grad-a)_30%,var(--color-grad-b)_70%,transparent)] after:opacity-60"
  >
    <div class="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
      <NuxtLink to="/" class="font-mono text-sm tracking-wide text-[var(--color-ink)]" @click="close">petra kohler</NuxtLink>

      <div class="flex items-center gap-3 sm:hidden">
        <ThemeToggle />
        <button
          ref="toggleRef"
          class="text-[var(--color-ink)]"
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
      </div>

      <ul class="hidden items-center gap-8 sm:flex">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="underline-fade text-[var(--color-ink-muted)] transition hover:text-[var(--color-ink)]"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </div>

    <ul
      v-if="open"
      id="mobile-menu"
      class="flex flex-col gap-4 border-t border-[var(--color-line)] bg-[var(--color-bg)] px-6 pb-6 pt-4 sm:hidden"
    >
      <li v-for="(link, index) in links" :key="link.to">
        <NuxtLink
          :ref="index === 0 ? 'firstMobileLinkRef' : undefined"
          :to="link.to"
          class="text-[var(--color-ink)]"
          active-class="text-[var(--color-brand-teal)] underline underline-offset-4"
          @click="close"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
