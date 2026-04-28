import { defineComponent, reactive, computed, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-MT0gct8H.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reservation",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Réservation — La Bastide des Oliviers",
      description: "Réservez votre séjour à La Bastide des Oliviers en Provence."
    });
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const form = reactive({
      checkin: "",
      checkout: "",
      guests: "",
      room: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      notes: ""
    });
    const rooms = [
      { name: "Suite Lavande", size: "45 m² · Vue jardins", price: 280 },
      { name: "Chambre Oliviers", size: "32 m² · Vue oliveraie", price: 180 },
      { name: "Suite Garrigue", size: "60 m² · Vue Alpilles", price: 350 },
      { name: "Chambre Mistral", size: "28 m² · Cour intérieure", price: 160 },
      { name: "Chambre Cigale", size: "35 m² · Vue panoramique", price: 210 }
    ];
    const selectedRoom = computed(() => rooms.find((r) => r.name === form.room));
    const nights = computed(() => {
      if (!form.checkin || !form.checkout) return 0;
      const a = new Date(form.checkin);
      const b = new Date(form.checkout);
      const diff = Math.round((b.getTime() - a.getTime()) / 864e5);
      return diff > 0 ? diff : 0;
    });
    const submitting = ref(false);
    const submitted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-64be4b23><section class="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden" data-v-64be4b23><div class="absolute inset-0" data-v-64be4b23><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1568996234695-a8fd29fd1049?w=2000&q=80')" })}" data-v-64be4b23></div><div class="absolute inset-0 bg-gradient-to-t from-stone via-stone/50 to-stone/20" data-v-64be4b23></div></div><div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full" data-v-64be4b23><p class="section-subtitle text-gold mb-4" data-v-64be4b23>Réservation</p><h1 class="section-title text-cream" data-v-64be4b23>Préparez votre<br data-v-64be4b23><em class="italic" data-v-64be4b23>séjour</em></h1></div></section><section class="py-28" data-v-64be4b23><div class="max-w-5xl mx-auto px-6 lg:px-12" data-v-64be4b23><div class="text-center mb-16 reveal" data-v-64be4b23><p class="font-body font-light text-stone/60 max-w-xl mx-auto leading-relaxed" data-v-64be4b23> Remplissez le formulaire ci-dessous pour vérifier la disponibilité de votre chambre et recevoir une confirmation sous 24h. </p></div><div class="bg-cream-dark p-10 lg:p-16 reveal" data-v-64be4b23><form class="space-y-8" data-v-64be4b23><div data-v-64be4b23><h3 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-6" data-v-64be4b23>1 — Dates &amp; occupants</h3><div class="grid md:grid-cols-3 gap-6" data-v-64be4b23><div data-v-64be4b23><label class="form-label" data-v-64be4b23>Arrivée</label><input${ssrRenderAttr("value", unref(form).checkin)} type="date"${ssrRenderAttr("min", unref(today))} required class="form-input" data-v-64be4b23></div><div data-v-64be4b23><label class="form-label" data-v-64be4b23>Départ</label><input${ssrRenderAttr("value", unref(form).checkout)} type="date"${ssrRenderAttr("min", unref(form).checkin || unref(today))} required class="form-input" data-v-64be4b23></div><div data-v-64be4b23><label class="form-label" data-v-64be4b23>Voyageurs</label><select required class="form-input bg-cream-dark" data-v-64be4b23><option value="" data-v-64be4b23${ssrIncludeBooleanAttr(Array.isArray(unref(form).guests) ? ssrLooseContain(unref(form).guests, "") : ssrLooseEqual(unref(form).guests, "")) ? " selected" : ""}>Nb de personnes</option><!--[-->`);
      ssrRenderList(4, (n) => {
        _push(`<option${ssrRenderAttr("value", n)} data-v-64be4b23${ssrIncludeBooleanAttr(Array.isArray(unref(form).guests) ? ssrLooseContain(unref(form).guests, n) : ssrLooseEqual(unref(form).guests, n)) ? " selected" : ""}>${ssrInterpolate(n)} personne${ssrInterpolate(n > 1 ? "s" : "")}</option>`);
      });
      _push(`<!--]--></select></div></div></div><div class="h-px bg-stone/10" data-v-64be4b23></div><div data-v-64be4b23><h3 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-6" data-v-64be4b23>2 — Choix de la chambre</h3><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4" data-v-64be4b23><!--[-->`);
      ssrRenderList(rooms, (room) => {
        _push(`<label class="${ssrRenderClass([
          "relative cursor-pointer border p-5 transition-all duration-300",
          unref(form).room === room.name ? "border-gold bg-gold/5" : "border-stone/15 hover:border-gold/50"
        ])}" data-v-64be4b23><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).room, room.name)) ? " checked" : ""}${ssrRenderAttr("value", room.name)} class="sr-only" data-v-64be4b23><div class="flex justify-between items-start mb-2" data-v-64be4b23><span class="font-display text-lg text-stone font-light" data-v-64be4b23>${ssrInterpolate(room.name)}</span>`);
        if (unref(form).room === room.name) {
          _push(`<span class="text-gold text-lg" data-v-64be4b23>✦</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="font-body text-xs text-stone/50 font-light mb-2" data-v-64be4b23>${ssrInterpolate(room.size)}</p><p class="font-display text-xl text-gold" data-v-64be4b23>${ssrInterpolate(room.price)}€<span class="font-body text-xs text-stone/40 font-light" data-v-64be4b23>/nuit</span></p></label>`);
      });
      _push(`<!--]--></div></div><div class="h-px bg-stone/10" data-v-64be4b23></div><div data-v-64be4b23><h3 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-6" data-v-64be4b23>3 — Vos coordonnées</h3><div class="grid md:grid-cols-2 gap-6" data-v-64be4b23><div data-v-64be4b23><label class="form-label" data-v-64be4b23>Prénom</label><input${ssrRenderAttr("value", unref(form).firstname)} type="text" required placeholder="Votre prénom" class="form-input" data-v-64be4b23></div><div data-v-64be4b23><label class="form-label" data-v-64be4b23>Nom</label><input${ssrRenderAttr("value", unref(form).lastname)} type="text" required placeholder="Votre nom" class="form-input" data-v-64be4b23></div><div data-v-64be4b23><label class="form-label" data-v-64be4b23>Email</label><input${ssrRenderAttr("value", unref(form).email)} type="email" required placeholder="votre@email.com" class="form-input" data-v-64be4b23></div><div data-v-64be4b23><label class="form-label" data-v-64be4b23>Téléphone</label><input${ssrRenderAttr("value", unref(form).phone)} type="tel" placeholder="+33 6 00 00 00 00" class="form-input" data-v-64be4b23></div></div><div class="mt-6" data-v-64be4b23><label class="form-label" data-v-64be4b23>Demandes spéciales</label><textarea rows="3" placeholder="Allergies, anniversaire, heure d&#39;arrivée..." class="form-input resize-none" data-v-64be4b23>${ssrInterpolate(unref(form).notes)}</textarea></div></div>`);
      if (unref(nights) > 0 && unref(form).room) {
        _push(`<div class="bg-stone text-cream p-8" data-v-64be4b23><div class="flex justify-between items-center mb-4" data-v-64be4b23><span class="font-body text-sm font-light text-cream/70" data-v-64be4b23>${ssrInterpolate(unref(selectedRoom)?.price)}€ × ${ssrInterpolate(unref(nights))} nuit${ssrInterpolate(unref(nights) > 1 ? "s" : "")}</span><span class="font-body text-sm font-light text-cream/70" data-v-64be4b23>${ssrInterpolate((unref(selectedRoom)?.price || 0) * unref(nights))}€</span></div><div class="flex justify-between items-center pt-4 border-t border-white/10" data-v-64be4b23><span class="font-body text-xs tracking-[0.25em] uppercase text-gold font-light" data-v-64be4b23>Total estimé</span><span class="font-display text-3xl text-gold" data-v-64be4b23>${ssrInterpolate((unref(selectedRoom)?.price || 0) * unref(nights))}€</span></div><p class="font-body text-xs text-cream/40 font-light mt-3" data-v-64be4b23>Hors taxes. Confirmation sous 24h. Aucun paiement requis maintenant.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(submitted)) {
        _push(`<div class="bg-gold/10 border border-gold p-5 text-center" data-v-64be4b23><p class="font-body text-sm text-stone font-light" data-v-64be4b23>✦   Demande reçue ! Nous vous confirmons la disponibilité sous 24h.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="btn-primary w-full justify-center"${ssrIncludeBooleanAttr(unref(submitting)) ? " disabled" : ""} data-v-64be4b23>`);
      if (!unref(submitting)) {
        _push(`<span data-v-64be4b23>Envoyer ma demande</span>`);
      } else {
        _push(`<span data-v-64be4b23>Envoi en cours...</span>`);
      }
      _push(`</button></form></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reservation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reservation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-64be4b23"]]);

export { reservation as default };
//# sourceMappingURL=reservation-BsW1LXbx.mjs.map
