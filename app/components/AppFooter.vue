<template>
  <footer class="bg-stone text-cream/70 pt-20 pb-8">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Top grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <NuxtLink to="/" class="flex flex-col items-start mb-6">
            <span class="font-display text-3xl text-cream tracking-widest">La Bastide</span>
            <span class="font-body text-[10px] tracking-[0.35em] text-gold uppercase font-light">des Oliviers</span>
          </NuxtLink>
          <p class="font-body font-light text-sm leading-relaxed text-cream/60 max-w-sm mb-8">
            Une maison d'hôtes de caractère nichée au cœur de la Provence. Profitez d'un cadre d'exception, d'une hospitalité sincère et de paysages époustouflants.
          </p>
          <div class="flex gap-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              class="w-10 h-10 border border-white/20 flex items-center justify-center text-cream/50 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <span class="text-xs font-body tracking-widest">{{ social.abbr }}</span>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-6">Navigation</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks" :key="link.path">
              <NuxtLink :to="link.path" class="font-body text-sm font-light text-cream/60 hover:text-gold transition-colors duration-300">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-6">Contact</h4>
          <ul class="space-y-4 text-sm font-light font-body">
            <li class="flex items-start gap-3 text-cream/60">
              <span class="text-gold mt-0.5">✦</span>
              <span>Route des Alpilles<br/>13520 Les Baux-de-Provence</span>
            </li>
            <li class="flex items-center gap-3 text-cream/60">
              <span class="text-gold">✦</span>
              <a href="tel:+33490000000" class="hover:text-gold transition-colors duration-300">+33 (0)4 90 00 00 00</a>
            </li>
            <li class="flex items-center gap-3 text-cream/60">
              <span class="text-gold">✦</span>
              <a href="mailto:contact@labastide.fr" class="hover:text-gold transition-colors duration-300">contact@labastide.fr</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="font-body text-xs tracking-widest text-cream/40 font-light">
          © {{ new Date().getFullYear() }} La Bastide des Oliviers. Tous droits réservés.
        </p>
        <div class="flex gap-6">
          <NuxtLink to="/mentions-legales" class="font-body text-xs text-cream/40 hover:text-gold transition-colors duration-300 font-light">Mentions légales</NuxtLink>
          <NuxtLink to="/confidentialite" class="font-body text-xs text-cream/40 hover:text-gold transition-colors duration-300 font-light">Confidentialité</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  { name: 'Instagram', href: '#', abbr: 'Ig' },
  { name: 'Facebook', href: '#', abbr: 'Fb' },
  { name: 'Pinterest', href: '#', abbr: 'Pt' },
]

const footerLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Nos chambres', path: '/chambres' },
  { label: 'Expériences', path: '/experiences' },
  { label: 'Galerie photo', path: '/galerie' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Contact', path: '/contact' },
  { label: 'Réservation', path: '/reservation' },
]
</script>
