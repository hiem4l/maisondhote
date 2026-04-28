<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      <!-- Background image -->
      <div class="absolute inset-0 bg-stone">
        <div
          ref="parallaxBg"
          class="absolute inset-[-10%] bg-cover bg-center will-change-transform"
          style="background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=80')"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-stone via-stone/40 to-stone/20" />
      </div>

      <!-- Decorative lines -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <!-- Scrolling indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span class="font-body text-[10px] tracking-[0.4em] uppercase text-cream/50 font-light">Découvrir</span>
        <div class="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
      </div>

      <!-- Hero content -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
        <div class="max-w-3xl">
          <p class="section-subtitle mb-6 opacity-0 animate-fade-in-up" style="animation-delay: 0.3s; animation-fill-mode: forwards;">
            ✦ &nbsp; Provence · France
          </p>
          <h1 class="font-display font-light text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.9] tracking-wide opacity-0 animate-fade-in-up" style="animation-delay: 0.5s; animation-fill-mode: forwards;">
            La Bastide<br/>
            <em class="italic text-gold">des Oliviers</em>
          </h1>
          <p class="mt-8 font-body font-light text-lg text-cream/70 max-w-lg leading-relaxed opacity-0 animate-fade-in-up" style="animation-delay: 0.8s; animation-fill-mode: forwards;">
            Un refuge d'exception niché au cœur des Alpilles. Cinq chambres de caractère, une piscine à débordement et les saveurs authentiques de la Provence.
          </p>
          <div class="flex flex-wrap gap-4 mt-10 opacity-0 animate-fade-in-up" style="animation-delay: 1s; animation-fill-mode: forwards;">
            <NuxtLink to="/chambres" class="btn-primary">
              Nos chambres
            </NuxtLink>
            <NuxtLink to="/reservation" class="inline-flex items-center gap-3 text-cream/80 text-sm tracking-[0.2em] uppercase font-body font-light hover:text-gold transition-colors duration-400">
              Réserver maintenant →
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Awards strip -->
      <div class="absolute bottom-0 right-0 hidden lg:flex items-center gap-8 pr-12 pb-8 opacity-0 animate-fade-in" style="animation-delay: 1.3s; animation-fill-mode: forwards;">
        <div class="flex flex-col items-center gap-1">
          <span class="font-display text-gold text-2xl">★★★★★</span>
          <span class="font-body text-[9px] tracking-[0.3em] text-cream/40 uppercase">5 étoiles</span>
        </div>
        <div class="w-px h-8 bg-white/20" />
        <div class="flex flex-col items-center gap-1">
          <span class="font-body text-cream/60 text-xs tracking-widest">Trip</span>
          <span class="font-body text-gold text-xs tracking-widest">Advisor</span>
        </div>
      </div>
    </section>

    <!-- Intro strip -->
    <section class="py-6 bg-gold">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
        <div v-for="item in strips" :key="item.label" class="flex items-center gap-3">
          <span class="text-stone/60 text-lg">{{ item.icon }}</span>
          <span class="font-body text-xs tracking-[0.25em] uppercase text-stone font-light">{{ item.label }}</span>
        </div>
      </div>
    </section>

    <!-- Story section -->
    <section class="py-28 lg:py-40">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <!-- Image -->
          <div class="relative reveal-left">
            <div class="aspect-[4/5] bg-cover bg-center rounded-none overflow-hidden"
              style="background-image: url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80')">
            </div>
            <div class="absolute -bottom-8 -right-8 w-48 h-48 bg-cover bg-center border-4 border-cream shadow-2xl hidden lg:block"
              style="background-image: url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80')">
            </div>
            <!-- Decoration -->
            <div class="absolute -top-6 -left-6 w-24 h-24 border border-gold/30 hidden lg:block" />
          </div>

          <!-- Text -->
          <div class="reveal-right">
            <p class="section-subtitle mb-4">Notre histoire</p>
            <div class="gold-line mb-8" />
            <h2 class="section-title mb-8">
              L'art de recevoir<br/>
              <em class="italic text-warm">avec passion</em>
            </h2>
            <p class="font-body font-light text-stone/70 leading-relaxed mb-6">
              Installés depuis 2008 dans cette bastide du XVIIIe siècle, Sophie et Pierre Marchand ont fait de leur demeure familiale un lieu où l'élégance et l'authenticité se conjuguent naturellement.
            </p>
            <p class="font-body font-light text-stone/70 leading-relaxed mb-10">
              Chaque détail a été pensé pour vous offrir une immersion totale dans la douceur provençale — du petit-déjeuner servi sous la treille aux balades dans les oliveraies au coucher du soleil.
            </p>
            <NuxtLink to="/a-propos" class="btn-primary">
              Découvrir l'histoire
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Rooms teaser -->
    <section class="py-28 bg-cream-dark">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-16 reveal">
          <p class="section-subtitle mb-4">Hébergement</p>
          <div class="gold-line mx-auto mb-8" />
          <h2 class="section-title">Nos chambres</h2>
          <p class="mt-6 font-body font-light text-stone/60 max-w-lg mx-auto leading-relaxed">
            Cinq chambres uniques, décorées avec soin, entre élégance provençale et confort contemporain.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(room, i) in rooms"
            :key="room.name"
            class="reveal group cursor-pointer"
            :data-delay="i * 100"
          >
            <div class="relative overflow-hidden aspect-[4/5]">
              <div
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                :style="`background-image: url('${room.image}')`"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-stone/80 via-stone/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <!-- Badge -->
              <div class="absolute top-4 left-4 bg-gold/90 px-3 py-1">
                <span class="font-body text-[10px] tracking-[0.25em] uppercase text-stone font-light">{{ room.tag }}</span>
              </div>
              <!-- Content -->
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <p class="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-light mb-1">{{ room.size }}</p>
                <h3 class="font-display text-2xl text-cream font-light leading-tight mb-2">{{ room.name }}</h3>
                <div class="flex items-center justify-between">
                  <p class="font-body text-sm text-cream/60 font-light">À partir de <span class="text-gold font-normal">{{ room.price }}€</span>/nuit</p>
                  <span class="w-8 h-px bg-gold transition-all duration-300 group-hover:w-12" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12 reveal" data-delay="300">
          <NuxtLink to="/chambres" class="btn-primary">
            Voir toutes les chambres
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Experiences -->
    <section class="py-28 lg:py-40 relative overflow-hidden">
      <div class="absolute inset-0 bg-stone" />
      <div
        class="absolute inset-0 bg-cover bg-center opacity-20"
        style="background-image: url('https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1800&q=80')"
      />
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-16 reveal">
          <p class="section-subtitle text-gold mb-4">Bien-être & Nature</p>
          <div class="gold-line mx-auto mb-8" />
          <h2 class="section-title text-cream">Vos expériences</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(exp, i) in experiences"
            :key="exp.title"
            class="reveal border border-white/10 p-8 hover:border-gold/50 transition-all duration-500 group"
            :data-delay="i * 120"
          >
            <div class="text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{{ exp.icon }}</div>
            <h3 class="font-display text-xl text-cream font-light mb-3">{{ exp.title }}</h3>
            <p class="font-body text-sm text-cream/50 font-light leading-relaxed">{{ exp.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-16 reveal">
          <p class="section-subtitle mb-4">Témoignages</p>
          <div class="gold-line mx-auto mb-8" />
          <h2 class="section-title">Ce qu'ils disent</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(t, i) in testimonials"
            :key="t.author"
            class="reveal bg-cream-dark p-10 border-t-2 border-gold"
            :data-delay="i * 150"
          >
            <div class="flex gap-1 mb-6">
              <span v-for="s in 5" :key="s" class="text-gold text-sm">★</span>
            </div>
            <p class="font-display text-xl text-stone/80 italic font-light leading-relaxed mb-8">« {{ t.text }} »</p>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span class="font-display text-gold font-medium">{{ t.author[0] }}</span>
              </div>
              <div>
                <p class="font-body text-sm text-stone font-medium">{{ t.author }}</p>
                <p class="font-body text-xs text-stone/50 font-light">{{ t.origin }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery strip -->
    <section class="grid grid-cols-2 md:grid-cols-4">
      <div
        v-for="img in galleryStrip"
        :key="img"
        class="relative aspect-square group overflow-hidden cursor-pointer"
      >
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          :style="`background-image: url('${img}')`"
        />
        <div class="absolute inset-0 bg-stone/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span class="text-cream text-2xl">+</span>
        </div>
      </div>
    </section>

    <!-- CTA section -->
    <section class="py-28 bg-stone relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, #c9a96e 0px, #c9a96e 1px, transparent 0px, transparent 50%); background-size: 30px 30px;" />
      </div>
      <div class="relative z-10 max-w-3xl mx-auto px-6 text-center reveal">
        <p class="section-subtitle mb-4">Séjour d'exception</p>
        <div class="gold-line mx-auto mb-8" />
        <h2 class="section-title text-cream mb-8">
          Prêt pour une escapade<br/>
          <em class="italic text-gold">provençale ?</em>
        </h2>
        <p class="font-body font-light text-cream/60 leading-relaxed mb-12 text-lg">
          Réservez votre séjour dès maintenant et laissez-nous vous offrir une parenthèse de douceur et d'authenticité.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/reservation" class="btn-primary">
            Réserver mon séjour
          </NuxtLink>
          <NuxtLink to="/contact" class="inline-flex items-center gap-3 text-cream/70 text-sm tracking-[0.2em] uppercase font-body font-light hover:text-gold transition-colors duration-400">
            Nous contacter
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

const { initReveal } = useScrollReveal()

onMounted(() => {
  const cleanup = initReveal()
  onBeforeUnmount(() => cleanup?.())
})

const strips = [
  { icon: '🌿', label: 'Piscine à débordement' },
  { icon: '🍳', label: 'Petit-déjeuner maison' },
  { icon: '🌄', label: 'Vue panoramique' },
  { icon: '🧖', label: 'Espace bien-être' },
  { icon: '🚲', label: 'Vélos à disposition' },
]

const rooms = [
  {
    name: 'Suite Lavande',
    tag: 'Suite',
    size: '45 m²',
    price: 280,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
  },
  {
    name: 'Chambre Oliviers',
    tag: 'Chambre',
    size: '32 m²',
    price: 180,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
  },
  {
    name: 'Suite Garrigue',
    tag: 'Suite Prestige',
    size: '60 m²',
    price: 350,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
  },
  {
    name: 'Chambre Mistral',
    tag: 'Chambre',
    size: '28 m²',
    price: 160,
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
  },
  {
    name: 'Chambre Cigale',
    tag: 'Chambre Vue',
    size: '35 m²',
    price: 210,
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
  },
]

const experiences = [
  {
    icon: '🏊',
    title: 'Piscine & Soleil',
    desc: 'Profitez de notre piscine à débordement avec vue sur les Alpilles, ouverte d\'avril à octobre.',
  },
  {
    icon: '🌿',
    title: 'Spa & Détente',
    desc: 'Un espace bien-être avec hammam, sauna et soins sur rendez-vous pour une relaxation totale.',
  },
  {
    icon: '🍷',
    title: 'Oenologie',
    desc: 'Découvrez les vignobles des Baux-de-Provence lors de visites guidées et dégustations privées.',
  },
  {
    icon: '🚵',
    title: 'Randonnées',
    desc: 'Des sentiers balisés au départ de la bastide pour explorer les paysages sauvages des Alpilles.',
  },
]

const testimonials = [
  {
    text: 'Un séjour absolument magique. L\'accueil de Sophie et Pierre est d\'une chaleur et d\'une attention rare. Nous reviendrons sans hésiter.',
    author: 'Marie-Claire D.',
    origin: 'Paris, France',
  },
  {
    text: 'La chambre Lavande est un vrai bijou. Vue extraordinaire, calme parfait. La Provence à son meilleur.',
    author: 'James & Helen T.',
    origin: 'Londres, Royaume-Uni',
  },
  {
    text: 'Le petit-déjeuner sous la treille restera dans nos mémoires. Des produits locaux exceptionnels et un cadre idyllique.',
    author: 'Alessandro B.',
    origin: 'Milan, Italie',
  },
]

const galleryStrip = [
  'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&q=80',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6f349824?w=600&q=80',
  'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&q=80',
]
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in-up {
  animation: fade-in-up 0.9s ease forwards;
}

.animate-fade-in {
  animation: fade-in 1s ease forwards;
}

.bg-cream-dark {
  background-color: #f2ede3;
}
</style>
