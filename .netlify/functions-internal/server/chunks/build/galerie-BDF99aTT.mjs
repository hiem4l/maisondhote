import { defineComponent, ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderTeleport } from 'vue/server-renderer';
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
  __name: "galerie",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Galerie — La Bastide des Oliviers",
      description: "Découvrez La Bastide des Oliviers en images : chambres, piscine, jardins, Provence."
    });
    const categories = ["Tout", "Chambres", "Extérieur", "Gastronomie", "Paysages"];
    const activeCategory = ref("Tout");
    const images = [
      { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80", alt: "Suite Lavande", category: "Chambres" },
      { src: "https://images.unsplash.com/photo-1568996234695-a8fd29fd1049?w=600&q=80", alt: "Piscine à débordement", category: "Extérieur" },
      { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80", alt: "Chambre Oliviers", category: "Chambres" },
      { src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&q=80", alt: "Vue panoramique Alpilles", category: "Paysages" },
      { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80", alt: "Dégustation vins", category: "Gastronomie" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6f349824?w=600&q=80", alt: "Espace bien-être", category: "Extérieur" },
      { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", alt: "Suite Garrigue", category: "Chambres" },
      { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", alt: "Salon de la bastide", category: "Extérieur" },
      { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80", alt: "Petit-déjeuner provençal", category: "Gastronomie" },
      { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", alt: "Crêtes des Alpilles", category: "Paysages" },
      { src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80", alt: "Chambre Mistral", category: "Chambres" },
      { src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80", alt: "Spa hammam", category: "Extérieur" },
      { src: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&q=80", alt: "Salle à manger", category: "Gastronomie" },
      { src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80", alt: "Chambre Cigale", category: "Chambres" },
      { src: "https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=600&q=80", alt: "Oliviers provençaux", category: "Paysages" }
    ];
    const filteredImages = computed(
      () => activeCategory.value === "Tout" ? images : images.filter((img) => img.category === activeCategory.value)
    );
    const lightboxImage = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-365b913e><section class="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden" data-v-365b913e><div class="absolute inset-0" data-v-365b913e><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=80')" })}" data-v-365b913e></div><div class="absolute inset-0 bg-gradient-to-t from-stone via-stone/50 to-stone/20" data-v-365b913e></div></div><div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full" data-v-365b913e><p class="section-subtitle text-gold mb-4" data-v-365b913e>Photos</p><h1 class="section-title text-cream" data-v-365b913e>La Bastide<br data-v-365b913e><em class="italic" data-v-365b913e>en images</em></h1></div></section><section class="py-10 bg-cream-dark" data-v-365b913e><div class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap gap-2 justify-center" data-v-365b913e><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<button class="${ssrRenderClass([
          "px-6 py-2.5 font-body text-xs tracking-[0.2em] uppercase font-light transition-all duration-300",
          unref(activeCategory) === cat ? "bg-gold text-stone" : "border border-stone/20 text-stone/60 hover:border-gold hover:text-gold"
        ])}" data-v-365b913e>${ssrInterpolate(cat)}</button>`);
      });
      _push(`<!--]--></div></section><section class="py-16 bg-cream-dark" data-v-365b913e><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-365b913e><div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4" data-v-365b913e><!--[-->`);
      ssrRenderList(unref(filteredImages), (img, i) => {
        _push(`<div class="break-inside-avoid group cursor-pointer relative overflow-hidden reveal"${ssrRenderAttr("data-delay", i * 50)} data-v-365b913e><img${ssrRenderAttr("src", img.src)}${ssrRenderAttr("alt", img.alt)} class="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" data-v-365b913e><div class="absolute inset-0 bg-stone/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center" data-v-365b913e><div class="text-center" data-v-365b913e><span class="text-cream text-3xl" data-v-365b913e>⊕</span><p class="font-body text-xs text-cream/80 tracking-widest mt-2 uppercase" data-v-365b913e>${ssrInterpolate(img.alt)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(lightboxImage)) {
          _push2(`<div class="fixed inset-0 z-[200] bg-stone/95 flex items-center justify-center p-4" data-v-365b913e><button class="absolute top-6 right-6 text-cream/60 hover:text-gold transition-colors duration-300 text-3xl w-12 h-12 flex items-center justify-center" data-v-365b913e> × </button><img${ssrRenderAttr("src", unref(lightboxImage).src.replace("w=600", "w=1600"))}${ssrRenderAttr("alt", unref(lightboxImage).alt)} class="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl" data-v-365b913e><p class="absolute bottom-8 left-1/2 -translate-x-1/2 font-body text-xs tracking-[0.3em] uppercase text-cream/50" data-v-365b913e>${ssrInterpolate(unref(lightboxImage).alt)}</p></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/galerie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const galerie = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-365b913e"]]);

export { galerie as default };
//# sourceMappingURL=galerie-BDF99aTT.mjs.map
