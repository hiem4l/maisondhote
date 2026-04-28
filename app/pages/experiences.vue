<template>
  <div>
    <!-- Hero -->
    <section class="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=2000&q=80')" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone via-stone/50 to-stone/20" />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
        <p class="section-subtitle text-gold mb-4">Activités & Découvertes</p>
        <h1 class="section-title text-cream">Vos expériences<br/><em class="italic">en Provence</em></h1>
      </div>
    </section>

    <!-- Experiences grid -->
    <section class="py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div
            v-for="(exp, i) in experiences"
            :key="exp.title"
            class="group reveal"
            :data-delay="i * 100"
          >
            <div class="relative overflow-hidden aspect-[16/10] mb-6">
              <div
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                :style="`background-image: url('${exp.image}')`"
              />
              <div class="absolute inset-0 bg-stone/20 group-hover:bg-stone/10 transition-colors duration-500" />
              <div class="absolute top-4 left-4 bg-gold/90 px-3 py-1.5">
                <span class="text-xl">{{ exp.icon }}</span>
              </div>
            </div>
            <h3 class="font-display text-2xl text-stone font-light mb-3">{{ exp.title }}</h3>
            <p class="font-body font-light text-stone/60 leading-relaxed">{{ exp.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map section -->
    <section class="bg-stone py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-left">
            <p class="section-subtitle mb-4">À proximité</p>
            <div class="gold-line mb-8" />
            <h2 class="section-title text-cream mb-8">Les trésors<br/><em class="italic text-gold">des environs</em></h2>
            <ul class="space-y-5">
              <li v-for="place in nearbyPlaces" :key="place.name" class="flex items-start gap-4">
                <span class="text-gold text-xl mt-0.5">{{ place.icon }}</span>
                <div>
                  <p class="font-body text-sm text-cream font-medium">{{ place.name }}</p>
                  <p class="font-body text-xs text-cream/50 font-light">{{ place.dist }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="relative aspect-square bg-stone-mid reveal-right border border-white/10 flex items-center justify-center overflow-hidden">
            <div
              class="absolute inset-0 bg-cover bg-center opacity-40"
              style="background-image: url('https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=1000&q=80')"
            />
            <div class="relative z-10 text-center">
              <p class="font-display text-5xl text-gold mb-2">Les Alpilles</p>
              <p class="font-body text-xs tracking-[0.3em] uppercase text-cream/60">Provence · France</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'Expériences — La Bastide des Oliviers',
  description: 'Piscine, spa, oenologie, randonnées... Vivez la Provence authentique depuis La Bastide des Oliviers.',
})

const { initReveal } = useScrollReveal()
onMounted(() => {
  const c = initReveal()
  onBeforeUnmount(() => c?.())
})

const experiences = [
  {
    icon: '🏊',
    title: 'Piscine à débordement',
    desc: 'Notre piscine de 15 mètres, chauffée et orientée plein sud, surplombe les oliveraies et offre une vue spectaculaire sur les Alpilles. Transats, parasols et service en bord de piscine.',
    image: 'https://images.unsplash.com/photo-1568996234695-a8fd29fd1049?w=1000&q=80',
  },
  {
    icon: '🧖',
    title: 'Espace bien-être',
    desc: 'Hammam traditionnel, sauna finlandais et cabine de soins pour des massages aux huiles essentielles de lavande. Détente absolue dans un écrin de pierres centenaires.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1000&q=80',
  },
  {
    icon: '🍷',
    title: 'Oenologie & Gastronomie',
    desc: 'Visitez les domaines viticoles voisins, participez à des dégustations privées des Baux-de-Provence. Le soir, notre table d\'hôtes propose une cuisine du marché sublimée par les vins locaux.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1000&q=80',
  },
  {
    icon: '🚵',
    title: 'Randonnées & Vélo',
    desc: 'Cinq vélos électriques à disposition pour explorer les crêtes des Alpilles, les villages perchés de Maussane et les paysages de Van Gogh à Saint-Rémy-de-Provence.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80',
  },
  {
    icon: '🎨',
    title: 'Art & Culture',
    desc: 'Les Baux-de-Provence et la Carrières de Lumières à 10 minutes. Arles, cité d\'art, à 30 km. Un territoire exceptionnel inscrit à l\'histoire de l\'art mondial.',
    image: 'https://images.unsplash.com/photo-1531925470851-1b5896b67fe4?w=1000&q=80',
  },
  {
    icon: '🌅',
    title: 'Yoga & Méditation',
    desc: 'Séances de yoga en plein air au lever du soleil sur la terrasse panoramique. Un instructeur peut vous accompagner sur demande pour une pratique personnalisée.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80',
  },
]

const nearbyPlaces = [
  { icon: '🏰', name: 'Les Baux-de-Provence', dist: '10 min · Village perché classé' },
  { icon: '🎨', name: 'Carrières de Lumières', dist: '12 min · Art numérique immersif' },
  { icon: '🌻', name: 'Saint-Rémy-de-Provence', dist: '20 min · Marché provençal' },
  { icon: '🏛️', name: 'Arles, patrimoine UNESCO', dist: '35 min · Arènes romaines' },
  { icon: '✈️', name: 'Aéroport Marseille-Provence', dist: '45 min' },
  { icon: '🚉', name: 'Gare TGV Avignon Centre', dist: '40 min' },
]
</script>
