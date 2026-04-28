<template>
  <div>
    <!-- Hero -->
    <section class="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1568996234695-a8fd29fd1049?w=2000&q=80')" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone via-stone/50 to-stone/20" />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
        <p class="section-subtitle text-gold mb-4">Réservation</p>
        <h1 class="section-title text-cream">Préparez votre<br/><em class="italic">séjour</em></h1>
      </div>
    </section>

    <!-- Reservation form -->
    <section class="py-28">
      <div class="max-w-5xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-16 reveal">
          <p class="font-body font-light text-stone/60 max-w-xl mx-auto leading-relaxed">
            Remplissez le formulaire ci-dessous pour vérifier la disponibilité de votre chambre et recevoir une confirmation sous 24h.
          </p>
        </div>

        <div class="bg-cream-dark p-10 lg:p-16 reveal">
          <form @submit.prevent="submitReservation" class="space-y-8">
            <!-- Step 1: Dates & guests -->
            <div>
              <h3 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-6">1 — Dates & occupants</h3>
              <div class="grid md:grid-cols-3 gap-6">
                <div>
                  <label class="form-label">Arrivée</label>
                  <input v-model="form.checkin" type="date" :min="today" required class="form-input" />
                </div>
                <div>
                  <label class="form-label">Départ</label>
                  <input v-model="form.checkout" type="date" :min="form.checkin || today" required class="form-input" />
                </div>
                <div>
                  <label class="form-label">Voyageurs</label>
                  <select v-model="form.guests" required class="form-input bg-cream-dark">
                    <option value="">Nb de personnes</option>
                    <option v-for="n in 4" :key="n" :value="n">{{ n }} personne{{ n > 1 ? 's' : '' }}</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="h-px bg-stone/10" />

            <!-- Step 2: Room -->
            <div>
              <h3 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-6">2 — Choix de la chambre</h3>
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <label
                  v-for="room in rooms"
                  :key="room.name"
                  :class="[
                    'relative cursor-pointer border p-5 transition-all duration-300',
                    form.room === room.name
                      ? 'border-gold bg-gold/5'
                      : 'border-stone/15 hover:border-gold/50'
                  ]"
                >
                  <input type="radio" v-model="form.room" :value="room.name" class="sr-only" />
                  <div class="flex justify-between items-start mb-2">
                    <span class="font-display text-lg text-stone font-light">{{ room.name }}</span>
                    <span v-if="form.room === room.name" class="text-gold text-lg">✦</span>
                  </div>
                  <p class="font-body text-xs text-stone/50 font-light mb-2">{{ room.size }}</p>
                  <p class="font-display text-xl text-gold">{{ room.price }}€<span class="font-body text-xs text-stone/40 font-light">/nuit</span></p>
                </label>
              </div>
            </div>

            <div class="h-px bg-stone/10" />

            <!-- Step 3: Identity -->
            <div>
              <h3 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-6">3 — Vos coordonnées</h3>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="form-label">Prénom</label>
                  <input v-model="form.firstname" type="text" required placeholder="Votre prénom" class="form-input" />
                </div>
                <div>
                  <label class="form-label">Nom</label>
                  <input v-model="form.lastname" type="text" required placeholder="Votre nom" class="form-input" />
                </div>
                <div>
                  <label class="form-label">Email</label>
                  <input v-model="form.email" type="email" required placeholder="votre@email.com" class="form-input" />
                </div>
                <div>
                  <label class="form-label">Téléphone</label>
                  <input v-model="form.phone" type="tel" placeholder="+33 6 00 00 00 00" class="form-input" />
                </div>
              </div>
              <div class="mt-6">
                <label class="form-label">Demandes spéciales</label>
                <textarea v-model="form.notes" rows="3" placeholder="Allergies, anniversaire, heure d'arrivée..." class="form-input resize-none" />
              </div>
            </div>

            <!-- Price estimate -->
            <div v-if="nights > 0 && form.room" class="bg-stone text-cream p-8">
              <div class="flex justify-between items-center mb-4">
                <span class="font-body text-sm font-light text-cream/70">{{ selectedRoom?.price }}€ × {{ nights }} nuit{{ nights > 1 ? 's' : '' }}</span>
                <span class="font-body text-sm font-light text-cream/70">{{ (selectedRoom?.price || 0) * nights }}€</span>
              </div>
              <div class="flex justify-between items-center pt-4 border-t border-white/10">
                <span class="font-body text-xs tracking-[0.25em] uppercase text-gold font-light">Total estimé</span>
                <span class="font-display text-3xl text-gold">{{ (selectedRoom?.price || 0) * nights }}€</span>
              </div>
              <p class="font-body text-xs text-cream/40 font-light mt-3">Hors taxes. Confirmation sous 24h. Aucun paiement requis maintenant.</p>
            </div>

            <Transition name="success">
              <div v-if="submitted" class="bg-gold/10 border border-gold p-5 text-center">
                <p class="font-body text-sm text-stone font-light">✦ &nbsp; Demande reçue ! Nous vous confirmons la disponibilité sous 24h.</p>
              </div>
            </Transition>

            <button type="submit" class="btn-primary w-full justify-center" :disabled="submitting">
              <span v-if="!submitting">Envoyer ma demande</span>
              <span v-else>Envoi en cours...</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'Réservation — La Bastide des Oliviers',
  description: 'Réservez votre séjour à La Bastide des Oliviers en Provence.',
})

const { initReveal } = useScrollReveal()
onMounted(() => {
  const c = initReveal()
  onBeforeUnmount(() => c?.())
})

const today = new Date().toISOString().split('T')[0]

const form = reactive({
  checkin: '',
  checkout: '',
  guests: '',
  room: '',
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  notes: '',
})

const rooms = [
  { name: 'Suite Lavande', size: '45 m² · Vue jardins', price: 280 },
  { name: 'Chambre Oliviers', size: '32 m² · Vue oliveraie', price: 180 },
  { name: 'Suite Garrigue', size: '60 m² · Vue Alpilles', price: 350 },
  { name: 'Chambre Mistral', size: '28 m² · Cour intérieure', price: 160 },
  { name: 'Chambre Cigale', size: '35 m² · Vue panoramique', price: 210 },
]

const selectedRoom = computed(() => rooms.find(r => r.name === form.room))

const nights = computed(() => {
  if (!form.checkin || !form.checkout) return 0
  const a = new Date(form.checkin)
  const b = new Date(form.checkout)
  const diff = Math.round((b.getTime() - a.getTime()) / 86400000)
  return diff > 0 ? diff : 0
})

const submitting = ref(false)
const submitted = ref(false)

const submitReservation = async () => {
  submitting.value = true
  await new Promise(r => setTimeout(r, 1500))
  submitting.value = false
  submitted.value = true
  setTimeout(() => { submitted.value = false }, 6000)
}
</script>

<style scoped>
.bg-cream-dark { background-color: #f2ede3; }

.form-label {
  @apply font-body text-xs tracking-[0.25em] uppercase text-stone/60 font-light mb-2 block;
}

.form-input {
  @apply w-full border border-stone/20 bg-transparent px-5 py-4 font-body text-sm text-stone placeholder-stone/40 focus:outline-none focus:border-gold transition-colors duration-300;
}

.success-enter-active, .success-leave-active { transition: opacity 0.5s ease; }
.success-enter-from, .success-leave-to { opacity: 0; }
</style>
