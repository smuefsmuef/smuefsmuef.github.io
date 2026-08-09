<script setup lang="ts">
withDefaults(
  defineProps<{
    corner?: 'tl' | 'tr' | 'bl' | 'br'
  }>(),
  { corner: 'tr' }
)
</script>

<template>
  <span class="glow-blob" :class="`glow-${corner}`" aria-hidden="true" />
</template>
