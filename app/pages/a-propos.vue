<template>
  <div>
    <!-- Hero -->
    <section class="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=2000&q=80')" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone via-stone/50 to-stone/20" />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
        <p class="section-subtitle text-gold mb-4">Notre maison</p>
        <h1 class="section-title text-cream">L'histoire de<br/><em class="italic">La Bastide</em></h1>
      </div>
    </section>

    <!-- Story -->
    <section class="py-28 lg:py-40">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          <div class="reveal-left">
            <p class="section-subtitle mb-4">Depuis 2008</p>
            <div class="gold-line mb-8" />
            <h2 class="section-title mb-10">Une bastide<br/><em class="italic text-warm">du XVIIIe siècle</em></h2>
            <p class="font-body font-light text-stone/70 leading-relaxed mb-6">
              Construite en 1742, La Bastide des Oliviers a traversé les siècles avec grâce. Cette demeure en pierres de taille, entourée de 3 hectares d'oliviers centenaires, a été acquise et entièrement restaurée par Sophie et Pierre Marchand en 2006.
            </p>
            <p class="font-body font-light text-stone/70 leading-relaxed mb-6">
              Deux années de travaux ont été nécessaires pour allier la noblesse de l'architecture d'origine aux exigences du confort contemporain. Chaque pierre a été préservée, chaque poutre apparente a été traitée, chaque espace a été pensé pour inviter à la douceur.
            </p>
            <p class="font-body font-light text-stone/70 leading-relaxed">
              Depuis l'ouverture en 2008, la bastide accueille des voyageurs du monde entier en quête d'authenticité, de silence et des saveurs provençales.
            </p>
          </div>

          <div class="space-y-8 reveal-right">
            <div class="aspect-[4/3] bg-cover bg-center overflow-hidden"
              style="background-image: url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80')" />
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gold p-6">
                <p class="font-display text-5xl text-stone font-light">18</p>
                <p class="font-body text-xs tracking-[0.25em] uppercase text-stone/70 font-light">Années d'accueil</p>
              </div>
              <div class="bg-cream-dark p-6 border border-stone/10">
                <p class="font-display text-5xl text-gold font-light">3ha</p>
                <p class="font-body text-xs tracking-[0.25em] uppercase text-stone/50 font-light">D'oliviers & jardins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-28 bg-cream-dark">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-16 reveal">
          <p class="section-subtitle mb-4">La famille Marchand</p>
          <div class="gold-line mx-auto mb-8" />
          <h2 class="section-title">Vos hôtes</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div v-for="(person, i) in team" :key="person.name" class="text-center reveal" :data-delay="i * 150">
            <div class="w-32 h-32 rounded-full bg-cover bg-center mx-auto mb-6 border-4 border-gold/30"
              :style="`background-image: url('${person.image}')`" />
            <h3 class="font-display text-2xl text-stone font-light mb-1">{{ person.name }}</h3>
            <p class="font-body text-xs tracking-[0.25em] uppercase text-gold font-light mb-4">{{ person.role }}</p>
            <p class="font-body font-light text-stone/60 text-sm leading-relaxed">{{ person.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-16 reveal">
          <p class="section-subtitle mb-4">Nos engagements</p>
          <div class="gold-line mx-auto mb-8" />
          <h2 class="section-title">Ce qui nous guide</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(val, i) in values" :key="val.title" class="reveal border-t-2 border-gold pt-8" :data-delay="i * 100">
            <div class="text-3xl mb-4">{{ val.icon }}</div>
            <h3 class="font-display text-xl text-stone font-light mb-3">{{ val.title }}</h3>
            <p class="font-body text-sm text-stone/60 font-light leading-relaxed">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'À propos — La Bastide des Oliviers',
  description: 'Découvrez l\'histoire de La Bastide des Oliviers, maison d\'hôtes de charme en Provence depuis 2008.',
})

const { initReveal } = useScrollReveal()
onMounted(() => {
  const c = initReveal()
  onBeforeUnmount(() => c?.())
})

const team = [
  {
    name: 'Sophie Marchand',
    role: 'Maîtresse de maison',
    bio: 'Ancienne décoratrice d\'intérieur, Sophie a mis toute sa sensibilité artistique au service des espaces de la bastide. C\'est elle qui cuisine les confitures du matin et cueille les fleurs pour les chambres.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    name: 'Pierre Marchand',
    role: 'Maître de maison',
    bio: 'Passionné d\'oenologie et de randonnée, Pierre connaît chaque sentier des Alpilles et chaque vigneron des environs. Il sera votre guide idéal pour découvrir les trésors cachés de la Provence.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
]

const values = [
  {
    icon: '🌿',
    title: 'Authenticité',
    desc: 'Nous ne faisons rien pour faire comme. Chaque choix, de la décoration aux produits du petit-déjeuner, reflète notre amour sincère de la Provence.',
  },
  {
    icon: '♻️',
    title: 'Éco-responsabilité',
    desc: 'Panneau solaires, potager biologique, récupération des eaux de pluie, produits ménagers naturels. Nous prenons soin de la terre qui nous accueille.',
  },
  {
    icon: '💛',
    title: 'Attention aux détails',
    desc: 'Le peignoir moelleux, la carafe d\'eau à votre chevet, les fleurs fraîches cueillies le matin... C\'est dans les petits gestes que réside la vraie hospitalité.',
  },
]
</script>

<style scoped>
.bg-cream-dark { background-color: #f2ede3; }
</style>
