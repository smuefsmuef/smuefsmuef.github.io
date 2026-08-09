<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'solid' | 'outline' | 'brand'
  }>(),
  { variant: 'solid' }
)

const variantClasses = {
  solid: 'bg-[var(--color-surface)] text-brand-teal hover:bg-[var(--color-tag)]',
  outline: 'border border-[var(--color-line-strong)] text-[var(--color-ink)] hover:border-brand-teal hover:text-brand-teal',
  brand: 'bg-brand-teal text-white hover:bg-brand-teal/90',
}
</script>

<template>
  <a
    href="/CV.pdf"
    download
    class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
    :class="variantClasses[variant]"
  >
    <Icon name="fa6-solid:file-arrow-down" class="h-4 w-4" />
    Download CV
  </a>
</template>
