<script setup lang="ts">
defineProps<{
  variant: 'rings' | 'ladder' | 'sun' | 'chevron' | 'river' | 'dots-a' | 'dots-b' | 'dots-c' | 'dots-d' | 'spiral-a' | 'spiral-b'
}>()
</script>

<template>
  <span class="motif" :class="`motif-${variant}`" aria-hidden="true">
    <svg v-if="variant === 'rings'" viewBox="0 0 108 108">
      <circle cx="54" cy="54" r="10" stroke="currentColor" stroke-width="3" fill="none" />
      <circle cx="54" cy="54" r="26" stroke="currentColor" stroke-width="3" fill="none" />
      <circle cx="54" cy="54" r="42" stroke="currentColor" stroke-width="3" fill="none" />
      <circle cx="54" cy="54" r="3" fill="currentColor" />
    </svg>

    <svg v-else-if="variant === 'ladder'" viewBox="0 0 34 128" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none">
      <line x1="17" y1="8" x2="17" y2="120" />
      <line x1="6" y1="26" x2="28" y2="26" />
      <line x1="6" y1="50" x2="28" y2="50" />
      <line x1="6" y1="74" x2="28" y2="74" />
      <line x1="6" y1="98" x2="28" y2="98" />
    </svg>

    <svg v-else-if="variant === 'sun'" viewBox="0 0 40 40" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none">
      <circle cx="20" cy="20" r="6" />
      <line x1="20" y1="2" x2="20" y2="10" />
      <line x1="20" y1="30" x2="20" y2="38" />
      <line x1="2" y1="20" x2="10" y2="20" />
      <line x1="30" y1="20" x2="38" y2="20" />
    </svg>

    <svg v-else-if="variant === 'chevron'" viewBox="0 0 150 46" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <polyline points="6,40 34,8 62,40 90,8 118,40 144,18" />
    </svg>

    <svg v-else-if="variant === 'river'" viewBox="0 0 128 20" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none">
      <path d="M4 12 Q 20 2, 36 12 T 68 12 T 100 12 T 124 12" />
    </svg>

    <svg v-else-if="variant === 'dots-a'" viewBox="0 0 38 28">
      <circle cx="6" cy="20" r="3" fill="currentColor" />
      <circle cx="19" cy="8" r="3" fill="currentColor" />
      <circle cx="32" cy="21" r="3" fill="currentColor" />
    </svg>

    <svg v-else-if="variant === 'dots-b'" viewBox="0 0 26 20">
      <circle cx="5" cy="15" r="2.6" fill="currentColor" />
      <circle cx="14" cy="5" r="2.6" fill="currentColor" />
      <circle cx="22" cy="16" r="2.6" fill="currentColor" />
    </svg>

    <svg v-else-if="variant === 'dots-c'" viewBox="0 0 26 20">
      <circle cx="5" cy="6" r="2.6" fill="currentColor" />
      <circle cx="14" cy="16" r="2.6" fill="currentColor" />
      <circle cx="22" cy="5" r="2.6" fill="currentColor" />
    </svg>

    <svg v-else-if="variant === 'dots-d'" viewBox="0 0 26 20">
      <circle cx="4" cy="8" r="2.6" fill="currentColor" />
      <circle cx="13" cy="17" r="2.6" fill="currentColor" />
      <circle cx="21" cy="6" r="2.6" fill="currentColor" />
    </svg>

    <svg v-else-if="variant === 'spiral-a'" viewBox="0 0 40 30" stroke="currentColor" stroke-width="2.4" fill="none">
      <path d="M8 15 a3 3 0 0 1 6 0 a6 6 0 0 0 -12 0 a9 9 0 0 1 18 0" />
    </svg>

    <svg v-else-if="variant === 'spiral-b'" viewBox="0 0 50 34" stroke="currentColor" stroke-width="2.6" fill="none">
      <path d="M10 17 a2.5 2.5 0 0 0 5 0 a5.5 5.5 0 0 1 -11 0 a8.5 8.5 0 0 0 17 0" />
    </svg>
  </span>
</template>
