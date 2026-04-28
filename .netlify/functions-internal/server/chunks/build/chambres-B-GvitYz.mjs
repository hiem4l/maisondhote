import { _ as __nuxt_component_0 } from './nuxt-link-B9bNs2CV.mjs';
import { defineComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-MT0gct8H.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chambres",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Chambres & Suites — La Bastide des Oliviers",
      description: "Cinq chambres et suites de charme en Provence. Décoration provençale, vue sur les Alpilles, confort contemporain."
    });
    const rooms = [
      {
        name: "Suite Lavande",
        tag: "Suite",
        size: "45 m²",
        view: "Vue jardins",
        price: 280,
        desc: "Un espace baigné de lumière dorée, aux tons lavande et blanc cassé. La suite dispose d'un salon privé, d'une terrasse couverte et d'une salle de bain en marbre blanc avec baignoire îlot.",
        amenities: ["Terrasse privée", "Baignoire îlot", "Salon séjour", "Climatisation", "Literie 5 étoiles", "Coffre-fort"],
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80"
      },
      {
        name: "Chambre Oliviers",
        tag: "Chambre",
        size: "32 m²",
        view: "Vue oliveraie",
        price: 180,
        desc: "Surplombant l'oliveraie centenaire, cette chambre mêle mobilier chiné et textiles provençaux. Sa fenêtre en alcôve offre un panorama apaisant sur les oliviers argentés.",
        amenities: ["Vue oliveraie", "Douche à l'italienne", "Bureau", "Mini-bar", "Wifi premium", "Nespresso"],
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80"
      },
      {
        name: "Suite Garrigue",
        tag: "Suite Prestige",
        size: "60 m²",
        view: "Vue Alpilles",
        price: 350,
        desc: "Notre suite la plus spacieuse. Un espace de vie exceptionnel avec double exposition, jacuzzi privatif sur terrasse et accès direct à la piscine. L'expérience ultime de la Bastide.",
        amenities: ["Jacuzzi terrasse", "Accès piscine direct", "Dressing", "Double vasque", "Enceinte Sonos", "Service chambre"],
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80"
      },
      {
        name: "Chambre Mistral",
        tag: "Chambre",
        size: "28 m²",
        view: "Vue cour intérieure",
        price: 160,
        desc: "Nichée au cœur de la bastide, la chambre Mistral évoque la fraîcheur et la sérénité. Ses volets bleus et ses carreaux de ciment authentiques racontent l'histoire provençale.",
        amenities: ["Charme authentique", "Douche vintage", "Parquet massif", "Climatisation", "Peignoirs & chaussons", "Télévision 4K"],
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&q=80"
      },
      {
        name: "Chambre Cigale",
        tag: "Chambre Vue",
        size: "35 m²",
        view: "Vue panoramique",
        price: 210,
        desc: "En position dominante, cette chambre jouit d'une vue à 180° sur les collines des Alpilles. Le chant des cigales au réveil, le mistral dans les pins le soir — la Provence pure.",
        amenities: ["Vue panoramique", "Balcon filant", "Baignoire balnéo", "Peignoirs", "Wifi premium", "Minibar garni"],
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80"
      }
    ];
    const infos = [
      { value: "5", label: "Chambres & suites" },
      { value: "2", label: "Nuits minimum" },
      { value: "15h", label: "Check-in" },
      { value: "11h", label: "Check-out" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d84ddf6d><section class="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden" data-v-d84ddf6d><div class="absolute inset-0" data-v-d84ddf6d><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=2000&q=80')" })}" data-v-d84ddf6d></div><div class="absolute inset-0 bg-gradient-to-t from-stone via-stone/50 to-stone/30" data-v-d84ddf6d></div></div><div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full" data-v-d84ddf6d><p class="section-subtitle text-gold mb-4" data-v-d84ddf6d>Hébergement</p><h1 class="section-title text-cream" data-v-d84ddf6d>Nos chambres<br data-v-d84ddf6d><em class="italic" data-v-d84ddf6d>&amp; suites</em></h1></div></section><section class="py-20" data-v-d84ddf6d><div class="max-w-3xl mx-auto px-6 text-center reveal" data-v-d84ddf6d><p class="font-display text-2xl md:text-3xl text-stone/70 italic font-light leading-relaxed" data-v-d84ddf6d> « Chaque chambre est une invitation au voyage immobile, un espace pensé pour vous reconnecter à l&#39;essentiel. » </p><div class="gold-line mx-auto mt-8" data-v-d84ddf6d></div></div></section><section class="pb-32" data-v-d84ddf6d><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-d84ddf6d><!--[-->`);
      ssrRenderList(rooms, (room, i) => {
        _push(`<div class="mb-20" data-v-d84ddf6d><div class="${ssrRenderClass([
          "grid lg:grid-cols-2 gap-0 items-stretch",
          i % 2 === 1 ? "lg:grid-flow-dense" : ""
        ])}" data-v-d84ddf6d><div class="${ssrRenderClass(["relative overflow-hidden aspect-[4/3] reveal-" + (i % 2 === 0 ? "left" : "right")])}" data-v-d84ddf6d><div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style="${ssrRenderStyle(`background-image: url('${room.image}')`)}" data-v-d84ddf6d></div><div class="absolute inset-0 bg-gradient-to-t from-stone/40 to-transparent" data-v-d84ddf6d></div><div class="absolute top-6 left-6 bg-gold px-4 py-2" data-v-d84ddf6d><span class="font-body text-[10px] tracking-[0.3em] uppercase text-stone font-light" data-v-d84ddf6d>${ssrInterpolate(room.tag)}</span></div></div><div class="${ssrRenderClass(["bg-cream-dark p-10 lg:p-16 flex flex-col justify-center reveal-" + (i % 2 === 0 ? "right" : "left"), i % 2 === 1 ? "lg:col-start-1" : ""])}" data-v-d84ddf6d><p class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-2" data-v-d84ddf6d>${ssrInterpolate(room.size)} · ${ssrInterpolate(room.view)}</p><h2 class="font-display text-4xl text-stone font-light mb-6" data-v-d84ddf6d>${ssrInterpolate(room.name)}</h2><p class="font-body font-light text-stone/60 leading-relaxed mb-8" data-v-d84ddf6d>${ssrInterpolate(room.desc)}</p><div class="grid grid-cols-2 gap-3 mb-10" data-v-d84ddf6d><!--[-->`);
        ssrRenderList(room.amenities, (a) => {
          _push(`<div class="flex items-center gap-2" data-v-d84ddf6d><span class="text-gold text-xs" data-v-d84ddf6d>✦</span><span class="font-body text-xs text-stone/60 font-light" data-v-d84ddf6d>${ssrInterpolate(a)}</span></div>`);
        });
        _push(`<!--]--></div><div class="flex items-center justify-between pt-6 border-t border-stone/10" data-v-d84ddf6d><div data-v-d84ddf6d><span class="font-body text-xs text-stone/40 font-light uppercase tracking-widest" data-v-d84ddf6d>À partir de</span><p class="font-display text-3xl text-gold" data-v-d84ddf6d>${ssrInterpolate(room.price)}€ <span class="text-sm text-stone/50 font-body font-light" data-v-d84ddf6d>/nuit</span></p></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/reservation",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Réserver `);
            } else {
              return [
                createTextVNode(" Réserver ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div></section><section class="bg-stone py-16" data-v-d84ddf6d><div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-v-d84ddf6d><!--[-->`);
      ssrRenderList(infos, (info) => {
        _push(`<div class="reveal" data-v-d84ddf6d><p class="font-display text-4xl text-gold mb-2" data-v-d84ddf6d>${ssrInterpolate(info.value)}</p><p class="font-body text-xs tracking-[0.25em] uppercase text-cream/50 font-light" data-v-d84ddf6d>${ssrInterpolate(info.label)}</p></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chambres.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chambres = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d84ddf6d"]]);

export { chambres as default };
//# sourceMappingURL=chambres-B-GvitYz.mjs.map
