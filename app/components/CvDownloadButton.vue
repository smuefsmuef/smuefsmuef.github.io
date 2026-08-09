<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'solid' | 'outline' | 'brand'
  }>(),
  { variant: 'solid' }
)

const variantClasses = {
  solid: 'bg-white text-brand-teal hover:bg-white/90',
  outline: 'border border-white text-white hover:bg-white/10',
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
