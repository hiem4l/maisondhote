<template>
  <div>
    <!-- Page hero -->
    <section class="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=2000&q=80')" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone via-stone/50 to-stone/30" />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
        <p class="section-subtitle text-gold mb-4">Hébergement</p>
        <h1 class="section-title text-cream">Nos chambres<br/><em class="italic">& suites</em></h1>
      </div>
    </section>

    <!-- Intro -->
    <section class="py-20">
      <div class="max-w-3xl mx-auto px-6 text-center reveal">
        <p class="font-display text-2xl md:text-3xl text-stone/70 italic font-light leading-relaxed">
          « Chaque chambre est une invitation au voyage immobile, un espace pensé pour vous reconnecter à l'essentiel. »
        </p>
        <div class="gold-line mx-auto mt-8" />
      </div>
    </section>

    <!-- Rooms list -->
    <section class="pb-32">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div v-for="(room, i) in rooms" :key="room.name" class="mb-20">
          <div
            :class="[
              'grid lg:grid-cols-2 gap-0 items-stretch',
              i % 2 === 1 ? 'lg:grid-flow-dense' : ''
            ]"
          >
            <!-- Image -->
            <div :class="['relative overflow-hidden aspect-[4/3] reveal-' + (i % 2 === 0 ? 'left' : 'right')]">
              <div
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                :style="`background-image: url('${room.image}')`"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-stone/40 to-transparent" />
              <div class="absolute top-6 left-6 bg-gold px-4 py-2">
                <span class="font-body text-[10px] tracking-[0.3em] uppercase text-stone font-light">{{ room.tag }}</span>
              </div>
            </div>

            <!-- Content -->
            <div :class="['bg-cream-dark p-10 lg:p-16 flex flex-col justify-center reveal-' + (i % 2 === 0 ? 'right' : 'left'), i % 2 === 1 ? 'lg:col-start-1' : '']">
              <p class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-2">{{ room.size }} · {{ room.view }}</p>
              <h2 class="font-display text-4xl text-stone font-light mb-6">{{ room.name }}</h2>
              <p class="font-body font-light text-stone/60 leading-relaxed mb-8">{{ room.desc }}</p>

              <!-- Amenities -->
              <div class="grid grid-cols-2 gap-3 mb-10">
                <div v-for="a in room.amenities" :key="a" class="flex items-center gap-2">
                  <span class="text-gold text-xs">✦</span>
                  <span class="font-body text-xs text-stone/60 font-light">{{ a }}</span>
                </div>
              </div>

              <div class="flex items-center justify-between pt-6 border-t border-stone/10">
                <div>
                  <span class="font-body text-xs text-stone/40 font-light uppercase tracking-widest">À partir de</span>
                  <p class="font-display text-3xl text-gold">{{ room.price }}€ <span class="text-sm text-stone/50 font-body font-light">/nuit</span></p>
                </div>
                <NuxtLink to="/reservation" class="btn-primary">
                  Réserver
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Info strip -->
    <section class="bg-stone py-16">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="info in infos" :key="info.label" class="reveal">
          <p class="font-display text-4xl text-gold mb-2">{{ info.value }}</p>
          <p class="font-body text-xs tracking-[0.25em] uppercase text-cream/50 font-light">{{ info.label }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'Chambres & Suites — La Bastide des Oliviers',
  description: 'Cinq chambres et suites de charme en Provence. Décoration provençale, vue sur les Alpilles, confort contemporain.',
})

const { initReveal } = useScrollReveal()
onMounted(() => {
  const c = initReveal()
  onBeforeUnmount(() => c?.())
})

const rooms = [
  {
    name: 'Suite Lavande',
    tag: 'Suite',
    size: '45 m²',
    view: 'Vue jardins',
    price: 280,
    desc: 'Un espace baigné de lumière dorée, aux tons lavande et blanc cassé. La suite dispose d\'un salon privé, d\'une terrasse couverte et d\'une salle de bain en marbre blanc avec baignoire îlot.',
    amenities: ['Terrasse privée', 'Baignoire îlot', 'Salon séjour', 'Climatisation', 'Literie 5 étoiles', 'Coffre-fort'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
  },
  {
    name: 'Chambre Oliviers',
    tag: 'Chambre',
    size: '32 m²',
    view: 'Vue oliveraie',
    price: 180,
    desc: 'Surplombant l\'oliveraie centenaire, cette chambre mêle mobilier chiné et textiles provençaux. Sa fenêtre en alcôve offre un panorama apaisant sur les oliviers argentés.',
    amenities: ['Vue oliveraie', 'Douche à l\'italienne', 'Bureau', 'Mini-bar', 'Wifi premium', 'Nespresso'],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80',
  },
  {
    name: 'Suite Garrigue',
    tag: 'Suite Prestige',
    size: '60 m²',
    view: 'Vue Alpilles',
    price: 350,
    desc: 'Notre suite la plus spacieuse. Un espace de vie exceptionnel avec double exposition, jacuzzi privatif sur terrasse et accès direct à la piscine. L\'expérience ultime de la Bastide.',
    amenities: ['Jacuzzi terrasse', 'Accès piscine direct', 'Dressing', 'Double vasque', 'Enceinte Sonos', 'Service chambre'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
  },
  {
    name: 'Chambre Mistral',
    tag: 'Chambre',
    size: '28 m²',
    view: 'Vue cour intérieure',
    price: 160,
    desc: 'Nichée au cœur de la bastide, la chambre Mistral évoque la fraîcheur et la sérénité. Ses volets bleus et ses carreaux de ciment authentiques racontent l\'histoire provençale.',
    amenities: ['Charme authentique', 'Douche vintage', 'Parquet massif', 'Climatisation', 'Peignoirs & chaussons', 'Télévision 4K'],
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&q=80',
  },
  {
    name: 'Chambre Cigale',
    tag: 'Chambre Vue',
    size: '35 m²',
    view: 'Vue panoramique',
    price: 210,
    desc: 'En position dominante, cette chambre jouit d\'une vue à 180° sur les collines des Alpilles. Le chant des cigales au réveil, le mistral dans les pins le soir — la Provence pure.',
    amenities: ['Vue panoramique', 'Balcon filant', 'Baignoire balnéo', 'Peignoirs', 'Wifi premium', 'Minibar garni'],
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80',
  },
]

const infos = [
  { value: '5', label: 'Chambres & suites' },
  { value: '2', label: 'Nuits minimum' },
  { value: '15h', label: 'Check-in' },
  { value: '11h', label: 'Check-out' },
]
</script>

<style scoped>
.bg-cream-dark { background-color: #f2ede3; }
</style>
