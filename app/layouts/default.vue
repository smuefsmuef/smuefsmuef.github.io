<template>
  <div class="flex min-h-screen flex-col">
    <AppNav />
    <main class="flex-1">
      <slot />
    </main>
    <SocialLinks />
    <FooterSection />
  </div>
</template>
