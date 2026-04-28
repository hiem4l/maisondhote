<template>
  <div class="min-h-screen bg-parchment pt-32 pb-24">
    <div class="max-w-3xl mx-auto px-6 lg:px-12">
      <h1 class="font-display text-4xl text-stone tracking-widest mb-12">Mentions légales</h1>

      <div class="space-y-10 font-body font-light text-stone/70 leading-relaxed text-sm">
        <section>
          <h2 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-4">Éditeur du site</h2>
          <p>La Bastide des Oliviers<br />
          Route des Alpilles, 13520 Les Baux-de-Provence<br />
          Tél. : +33 (0)4 90 00 00 00<br />
          Email : contact@labastide.fr</p>
        </section>

        <section>
          <h2 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-4">Hébergement</h2>
          <p>Ce site est hébergé par Netlify, Inc.<br />
          44 Montgomery Street, Suite 300<br />
          San Francisco, CA 94104, États-Unis</p>
        </section>

        <section>
          <h2 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-4">Propriété intellectuelle</h2>
          <p>L'ensemble des contenus présents sur ce site (textes, images, graphismes) sont la propriété exclusive de La Bastide des Oliviers, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, est strictement interdite sans autorisation préalable.</p>
        </section>

        <section>
          <h2 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-4">Responsabilité</h2>
          <p>La Bastide des Oliviers s'efforce d'assurer l'exactitude des informations diffusées sur ce site. Toutefois, elle ne saurait être tenue responsable des erreurs, omissions ou indisponibilités des informations et services.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Mentions légales — La Bastide des Oliviers',
})
</script>
