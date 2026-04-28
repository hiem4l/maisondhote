<template>
  <div>
    <!-- Hero -->
    <section class="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=2000&q=80')" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone via-stone/50 to-stone/20" />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
        <p class="section-subtitle text-gold mb-4">Nous joindre</p>
        <h1 class="section-title text-cream">Contact &<br/><em class="italic">informations</em></h1>
      </div>
    </section>

    <!-- Contact content -->
    <section class="py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <!-- Info -->
          <div class="reveal-left">
            <p class="section-subtitle mb-4">Nous trouver</p>
            <div class="gold-line mb-8" />
            <h2 class="section-title mb-10">Toujours à<br/><em class="italic text-warm">votre écoute</em></h2>

            <ul class="space-y-8 mb-12">
              <li v-for="info in contactInfos" :key="info.label" class="flex gap-5">
                <div class="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span class="text-gold text-xl">{{ info.icon }}</span>
                </div>
                <div>
                  <p class="font-body text-xs tracking-[0.25em] uppercase text-gold font-light mb-1">{{ info.label }}</p>
                  <div class="font-body text-sm text-stone/70 font-light leading-relaxed" v-html="info.value" />
                </div>
              </li>
            </ul>

            <!-- Hours -->
            <div class="border border-stone/10 p-8">
              <h3 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-6">Horaires d'accueil</h3>
              <div class="space-y-3">
                <div v-for="h in hours" :key="h.day" class="flex justify-between">
                  <span class="font-body text-sm text-stone/60 font-light">{{ h.day }}</span>
                  <span class="font-body text-sm text-stone font-light">{{ h.time }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class="reveal-right">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div v-for="field in formFields.slice(0, 2)" :key="field.name">
                  <label :for="field.name" class="font-body text-xs tracking-[0.25em] uppercase text-stone/60 font-light mb-2 block">
                    {{ field.label }}
                  </label>
                  <input
                    :id="field.name"
                    v-model="form[field.name as keyof typeof form]"
                    :type="field.type"
                    :placeholder="field.placeholder"
                    required
                    class="w-full border border-stone/20 bg-transparent px-5 py-4 font-body text-sm text-stone placeholder-stone/40 focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
              </div>
              <div v-for="field in formFields.slice(2)" :key="field.name">
                <label :for="field.name" class="font-body text-xs tracking-[0.25em] uppercase text-stone/60 font-light mb-2 block">
                  {{ field.label }}
                </label>
                <textarea
                  v-if="field.type === 'textarea'"
                  :id="field.name"
                  v-model="form.message"
                  :placeholder="field.placeholder"
                  rows="6"
                  class="w-full border border-stone/20 bg-transparent px-5 py-4 font-body text-sm text-stone placeholder-stone/40 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                />
                <input
                  v-else
                  :id="field.name"
                  v-model="form[field.name as keyof typeof form]"
                  :type="field.type"
                  :placeholder="field.placeholder"
                  class="w-full border border-stone/20 bg-transparent px-5 py-4 font-body text-sm text-stone placeholder-stone/40 focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>

              <div>
                <label class="font-body text-xs tracking-[0.25em] uppercase text-stone/60 font-light mb-2 block">Objet</label>
                <select v-model="form.subject" class="w-full border border-stone/20 bg-cream px-5 py-4 font-body text-sm text-stone focus:outline-none focus:border-gold transition-colors duration-300">
                  <option value="">Sélectionnez un objet</option>
                  <option>Demande de réservation</option>
                  <option>Information tarifaire</option>
                  <option>Événement privé</option>
                  <option>Autre</option>
                </select>
              </div>

              <Transition name="success">
                <div v-if="submitted" class="bg-gold/10 border border-gold p-5 text-center">
                  <p class="font-body text-sm text-stone font-light">✦ &nbsp; Votre message a bien été envoyé. Nous vous répondrons dans les 24h.</p>
                </div>
              </Transition>

              <button type="submit" class="btn-primary w-full justify-center" :disabled="submitting">
                <span v-if="!submitting">Envoyer le message</span>
                <span v-else>Envoi en cours...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'Contact — La Bastide des Oliviers',
  description: 'Contactez La Bastide des Oliviers pour toute question ou demande de réservation.',
})

const { initReveal } = useScrollReveal()
onMounted(() => {
  const c = initReveal()
  onBeforeUnmount(() => c?.())
})

const form = reactive({
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  message: '',
  subject: '',
})

const submitting = ref(false)
const submitted = ref(false)

const submitForm = async () => {
  submitting.value = true
  await new Promise(r => setTimeout(r, 1200))
  submitting.value = false
  submitted.value = true
  Object.keys(form).forEach(k => (form as Record<string, string>)[k] = '')
  setTimeout(() => { submitted.value = false }, 5000)
}

const formFields = [
  { name: 'firstname', label: 'Prénom', type: 'text', placeholder: 'Votre prénom' },
  { name: 'lastname', label: 'Nom', type: 'text', placeholder: 'Votre nom' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.com' },
  { name: 'phone', label: 'Téléphone', type: 'tel', placeholder: '+33 6 00 00 00 00' },
  { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Comment pouvons-nous vous aider ?' },
]

const contactInfos = [
  {
    icon: '📍',
    label: 'Adresse',
    value: 'Route des Alpilles<br/>13520 Les Baux-de-Provence, France',
  },
  {
    icon: '📞',
    label: 'Téléphone',
    value: '<a href="tel:+33490000000" class="hover:text-gold transition-colors">+33 (0)4 90 00 00 00</a>',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: '<a href="mailto:contact@labastide.fr" class="hover:text-gold transition-colors">contact@labastide.fr</a>',
  },
]

const hours = [
  { day: 'Lundi — Vendredi', time: '9h — 20h' },
  { day: 'Samedi', time: '9h — 18h' },
  { day: 'Dimanche', time: '10h — 17h' },
]
</script>

<style scoped>
.success-enter-active, .success-leave-active { transition: opacity 0.5s ease, transform 0.5s ease; }
.success-enter-from, .success-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
