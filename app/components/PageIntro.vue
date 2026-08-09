<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
}>()
</script>

<template>
  <div class="relative">
    <SectionGlow corner="tl" />
    <PetroglyphMotif variant="dots-a" />
    <div class="relative z-10 max-w-2xl">
      <p class="eyebrow mb-3">{{ eyebrow }}</p>
      <h1 class="gradient-heading text-4xl sm:text-5xl lg:text-6xl">{{ title }}</h1>
      <p class="mt-5 text-lg text-[var(--color-ink-muted)]">
        <slot />
      </p>
    </div>
  </div>
</template>
