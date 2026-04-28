<template>
  <div>
    <!-- Hero -->
    <section class="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=80')" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone via-stone/50 to-stone/20" />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
        <p class="section-subtitle text-gold mb-4">Photos</p>
        <h1 class="section-title text-cream">La Bastide<br/><em class="italic">en images</em></h1>
      </div>
    </section>

    <!-- Filter tabs -->
    <section class="py-10 bg-cream-dark">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap gap-2 justify-center">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="[
            'px-6 py-2.5 font-body text-xs tracking-[0.2em] uppercase font-light transition-all duration-300',
            activeCategory === cat
              ? 'bg-gold text-stone'
              : 'border border-stone/20 text-stone/60 hover:border-gold hover:text-gold'
          ]"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </section>

    <!-- Gallery masonry -->
    <section class="py-16 bg-cream-dark">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <div
            v-for="(img, i) in filteredImages"
            :key="img.src + i"
            class="break-inside-avoid group cursor-pointer relative overflow-hidden reveal"
            :data-delay="i * 50"
            @click="openLightbox(img)"
          >
            <img
              :src="img.src"
              :alt="img.alt"
              class="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-stone/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
              <div class="text-center">
                <span class="text-cream text-3xl">⊕</span>
                <p class="font-body text-xs text-cream/80 tracking-widest mt-2 uppercase">{{ img.alt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="lightboxImage"
          class="fixed inset-0 z-[200] bg-stone/95 flex items-center justify-center p-4"
          @click.self="closeLightbox"
        >
          <button
            class="absolute top-6 right-6 text-cream/60 hover:text-gold transition-colors duration-300 text-3xl w-12 h-12 flex items-center justify-center"
            @click="closeLightbox"
          >
            ×
          </button>
          <img
            :src="lightboxImage.src.replace('w=600', 'w=1600')"
            :alt="lightboxImage.alt"
            class="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
          />
          <p class="absolute bottom-8 left-1/2 -translate-x-1/2 font-body text-xs tracking-[0.3em] uppercase text-cream/50">
            {{ lightboxImage.alt }}
          </p>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'Galerie — La Bastide des Oliviers',
  description: 'Découvrez La Bastide des Oliviers en images : chambres, piscine, jardins, Provence.',
})

const { initReveal } = useScrollReveal()
onMounted(() => {
  const c = initReveal()
  onBeforeUnmount(() => c?.())
})

interface GalleryImage { src: string; alt: string; category: string }

const categories = ['Tout', 'Chambres', 'Extérieur', 'Gastronomie', 'Paysages']
const activeCategory = ref('Tout')

const images: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', alt: 'Suite Lavande', category: 'Chambres' },
  { src: 'https://images.unsplash.com/photo-1568996234695-a8fd29fd1049?w=600&q=80', alt: 'Piscine à débordement', category: 'Extérieur' },
  { src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80', alt: 'Chambre Oliviers', category: 'Chambres' },
  { src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&q=80', alt: 'Vue panoramique Alpilles', category: 'Paysages' },
  { src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80', alt: 'Dégustation vins', category: 'Gastronomie' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6f349824?w=600&q=80', alt: 'Espace bien-être', category: 'Extérieur' },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80', alt: 'Suite Garrigue', category: 'Chambres' },
  { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', alt: 'Salon de la bastide', category: 'Extérieur' },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80', alt: 'Petit-déjeuner provençal', category: 'Gastronomie' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', alt: 'Crêtes des Alpilles', category: 'Paysages' },
  { src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80', alt: 'Chambre Mistral', category: 'Chambres' },
  { src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80', alt: 'Spa hammam', category: 'Extérieur' },
  { src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&q=80', alt: 'Salle à manger', category: 'Gastronomie' },
  { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80', alt: 'Chambre Cigale', category: 'Chambres' },
  { src: 'https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=600&q=80', alt: 'Oliviers provençaux', category: 'Paysages' },
]

const filteredImages = computed(() =>
  activeCategory.value === 'Tout'
    ? images
    : images.filter(img => img.category === activeCategory.value)
)

const lightboxImage = ref<GalleryImage | null>(null)
const openLightbox = (img: GalleryImage) => { lightboxImage.value = img }
const closeLightbox = () => { lightboxImage.value = null }

// Close on Escape
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox()
  })
})
</script>

<style scoped>
.bg-cream-dark { background-color: #f2ede3; }

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
