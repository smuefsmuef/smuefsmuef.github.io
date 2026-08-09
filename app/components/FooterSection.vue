<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-[var(--color-line)] bg-[var(--color-bg)] py-8 text-center text-[var(--color-ink-muted)]">
    <div class="mx-auto max-w-6xl px-6 sm:px-10">
      <p class="font-mono text-xs tracking-wide text-[var(--color-ink-muted)]">© {{ year }} Petra Kohler</p>
      <p class="mt-2 text-xs text-[var(--color-ink-muted)]/80">
        Icons made by
        <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp" class="underline hover:text-brand-teal">Eucalyp</a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon" class="underline hover:text-brand-teal">www.flaticon.com</a>
        is licensed by
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" class="underline hover:text-brand-teal">CC 3.0 BY</a>
      </p>
    </div>
  </footer>
</template>
