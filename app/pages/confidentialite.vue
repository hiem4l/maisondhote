<template>
  <div class="min-h-screen bg-parchment pt-32 pb-24">
    <div class="max-w-3xl mx-auto px-6 lg:px-12">
      <h1 class="font-display text-4xl text-stone tracking-widest mb-12">Politique de confidentialité</h1>

      <div class="space-y-10 font-body font-light text-stone/70 leading-relaxed text-sm">
        <section>
          <h2 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-4">Données collectées</h2>
          <p>Dans le cadre de nos services de réservation et de contact, nous collectons uniquement les données nécessaires : nom, prénom, adresse e-mail, numéro de téléphone et dates de séjour.</p>
        </section>

        <section>
          <h2 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-4">Finalité du traitement</h2>
          <p>Les données collectées sont utilisées exclusivement pour traiter vos demandes de réservation, répondre à vos questions et améliorer nos services. Elles ne sont en aucun cas transmises à des tiers à des fins commerciales.</p>
        </section>

        <section>
          <h2 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-4">Conservation des données</h2>
          <p>Vos données personnelles sont conservées pendant la durée nécessaire à la gestion de votre séjour et au maximum trois ans à compter de votre dernier contact avec nous.</p>
        </section>

        <section>
          <h2 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-4">Vos droits</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@labastide.fr" class="text-gold hover:underline">contact@labastide.fr</a>.</p>
        </section>

        <section>
          <h2 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-4">Cookies</h2>
          <p>Ce site n'utilise pas de cookies de traçage publicitaire. Des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être déposés.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Politique de confidentialité — La Bastide des Oliviers',
})
</script>
