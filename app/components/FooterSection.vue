<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-[var(--color-line)] bg-[var(--color-bg)] py-8 text-center text-[var(--color-ink-muted)]">
    <div class="mx-auto max-w-6xl px-6 sm:px-10">
      <p class="font-mono text-xs tracking-wide text-[var(--color-ink-muted)]">© {{ year }} Petra Kohler</p>
    </div>
  </footer>
</template>
