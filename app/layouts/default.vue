<template>
  <!-- Custom cursor -->
  <div ref="cursorEl" class="custom-cursor hidden lg:block fixed top-0 left-0 w-10 h-10 rounded-full border border-gold pointer-events-none z-[9999] transition-[width,height,border-color,background-color] duration-300 mix-blend-difference" />
  <div ref="cursorDotEl" class="custom-cursor-dot hidden lg:block fixed top-0 left-0 w-2 h-2 rounded-full bg-gold pointer-events-none z-[9999]" />

  <!-- Navigation -->
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
      scrolled ? 'bg-stone/95 backdrop-blur-sm shadow-2xl py-4' : 'bg-transparent py-6'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex flex-col items-start group">
        <span class="font-display text-xl lg:text-2xl text-cream tracking-widest leading-none transition-all duration-300 group-hover:text-gold">La Bastide</span>
        <span class="font-body text-[10px] tracking-[0.35em] text-gold uppercase font-light leading-none mt-0.5">des Oliviers</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <ul class="hidden lg:flex items-center gap-10">
        <li v-for="link in navLinks" :key="link.path">
          <NuxtLink
            :to="link.path"
            class="relative font-body text-xs tracking-[0.25em] uppercase text-cream/80 hover:text-gold transition-colors duration-300 group font-light"
          >
            {{ link.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-400" />
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA -->
      <NuxtLink to="/reservation" class="hidden lg:flex items-center gap-2 border border-gold/60 text-gold px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-body font-light hover:bg-gold hover:text-stone transition-all duration-400">
        Réserver
      </NuxtLink>

      <!-- Mobile menu btn -->
      <button
        class="lg:hidden flex flex-col gap-1.5 p-2"
        @click="mobileOpen = !mobileOpen"
        aria-label="Menu"
      >
        <span :class="['block w-6 h-px bg-cream transition-all duration-300', mobileOpen ? 'rotate-45 translate-y-2' : '']" />
        <span :class="['block w-6 h-px bg-cream transition-all duration-300', mobileOpen ? 'opacity-0' : '']" />
        <span :class="['block w-6 h-px bg-cream transition-all duration-300', mobileOpen ? '-rotate-45 -translate-y-2.5' : '']" />
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="lg:hidden absolute top-full left-0 right-0 bg-stone/98 backdrop-blur-sm border-t border-gold/20 py-8">
        <ul class="flex flex-col items-center gap-6">
          <li v-for="link in navLinks" :key="link.path">
            <NuxtLink
              :to="link.path"
              class="font-body text-sm tracking-[0.25em] uppercase text-cream/80 hover:text-gold transition-colors duration-300 font-light"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/reservation" class="mt-2 border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body font-light hover:bg-gold hover:text-stone transition-all duration-400" @click="mobileOpen = false">
              Réserver
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>

  <!-- Page content -->
  <main>
    <slot />
  </main>

  <!-- Footer -->
  <AppFooter />
</template>

<script setup lang="ts">
import { useCursor } from '~/composables/useCursor'

const scrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 60
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
})

const mobileOpen = ref(false)

const navLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Chambres', path: '/chambres' },
  { label: 'Expériences', path: '/experiences' },
  { label: 'Galerie', path: '/galerie' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Contact', path: '/contact' },
]

const cursorEl = ref<HTMLElement | null>(null)
const cursorDotEl = ref<HTMLElement | null>(null)
const { initCursor } = useCursor()

onMounted(() => {
  if (cursorEl.value && cursorDotEl.value) {
    initCursor(cursorEl.value, cursorDotEl.value)
  }
})

// Close mobile menu on route change
const route = useRoute()
watch(() => route.path, () => {
  mobileOpen.value = false
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
