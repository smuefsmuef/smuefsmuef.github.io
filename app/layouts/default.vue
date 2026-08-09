<template>
  <div class="flex min-h-screen flex-col">
    <AppNav />
    <main class="flex-1 overflow-x-hidden">
      <slot />
    </main>
    <SocialLinks />
    <FooterSection />
  </div>
</template>
