import { _ as __nuxt_component_0 } from './nuxt-link-B9bNs2CV.mjs';
import { defineComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const strips = [
      { icon: "🌿", label: "Piscine à débordement" },
      { icon: "🍳", label: "Petit-déjeuner maison" },
      { icon: "🌄", label: "Vue panoramique" },
      { icon: "🧖", label: "Espace bien-être" },
      { icon: "🚲", label: "Vélos à disposition" }
    ];
    const rooms = [
      {
        name: "Suite Lavande",
        tag: "Suite",
        size: "45 m²",
        price: 280,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
      },
      {
        name: "Chambre Oliviers",
        tag: "Chambre",
        size: "32 m²",
        price: 180,
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80"
      },
      {
        name: "Suite Garrigue",
        tag: "Suite Prestige",
        size: "60 m²",
        price: 350,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
      },
      {
        name: "Chambre Mistral",
        tag: "Chambre",
        size: "28 m²",
        price: 160,
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80"
      },
      {
        name: "Chambre Cigale",
        tag: "Chambre Vue",
        size: "35 m²",
        price: 210,
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80"
      }
    ];
    const experiences = [
      {
        icon: "🏊",
        title: "Piscine & Soleil",
        desc: "Profitez de notre piscine à débordement avec vue sur les Alpilles, ouverte d'avril à octobre."
      },
      {
        icon: "🌿",
        title: "Spa & Détente",
        desc: "Un espace bien-être avec hammam, sauna et soins sur rendez-vous pour une relaxation totale."
      },
      {
        icon: "🍷",
        title: "Oenologie",
        desc: "Découvrez les vignobles des Baux-de-Provence lors de visites guidées et dégustations privées."
      },
      {
        icon: "🚵",
        title: "Randonnées",
        desc: "Des sentiers balisés au départ de la bastide pour explorer les paysages sauvages des Alpilles."
      }
    ];
    const testimonials = [
      {
        text: "Un séjour absolument magique. L'accueil de Sophie et Pierre est d'une chaleur et d'une attention rare. Nous reviendrons sans hésiter.",
        author: "Marie-Claire D.",
        origin: "Paris, France"
      },
      {
        text: "La chambre Lavande est un vrai bijou. Vue extraordinaire, calme parfait. La Provence à son meilleur.",
        author: "James & Helen T.",
        origin: "Londres, Royaume-Uni"
      },
      {
        text: "Le petit-déjeuner sous la treille restera dans nos mémoires. Des produits locaux exceptionnels et un cadre idyllique.",
        author: "Alessandro B.",
        origin: "Milan, Italie"
      }
    ];
    const galleryStrip = [
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6f349824?w=600&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&q=80"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a162c171><section class="relative h-screen min-h-[700px] flex items-end overflow-hidden" data-v-a162c171><div class="absolute inset-0 bg-stone" data-v-a162c171><div class="absolute inset-[-10%] bg-cover bg-center will-change-transform" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=80')" })}" data-v-a162c171></div><div class="absolute inset-0 bg-gradient-to-t from-stone via-stone/40 to-stone/20" data-v-a162c171></div></div><div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" data-v-a162c171></div><div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10" data-v-a162c171><span class="font-body text-[10px] tracking-[0.4em] uppercase text-cream/50 font-light" data-v-a162c171>Découvrir</span><div class="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" data-v-a162c171></div></div><div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full" data-v-a162c171><div class="max-w-3xl" data-v-a162c171><p class="section-subtitle mb-6 opacity-0 animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.3s", "animation-fill-mode": "forwards" })}" data-v-a162c171> ✦   Provence · France </p><h1 class="font-display font-light text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.9] tracking-wide opacity-0 animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.5s", "animation-fill-mode": "forwards" })}" data-v-a162c171> La Bastide<br data-v-a162c171><em class="italic text-gold" data-v-a162c171>des Oliviers</em></h1><p class="mt-8 font-body font-light text-lg text-cream/70 max-w-lg leading-relaxed opacity-0 animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.8s", "animation-fill-mode": "forwards" })}" data-v-a162c171> Un refuge d&#39;exception niché au cœur des Alpilles. Cinq chambres de caractère, une piscine à débordement et les saveurs authentiques de la Provence. </p><div class="flex flex-wrap gap-4 mt-10 opacity-0 animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "1s", "animation-fill-mode": "forwards" })}" data-v-a162c171>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/chambres",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nos chambres `);
          } else {
            return [
              createTextVNode(" Nos chambres ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/reservation",
        class: "inline-flex items-center gap-3 text-cream/80 text-sm tracking-[0.2em] uppercase font-body font-light hover:text-gold transition-colors duration-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Réserver maintenant → `);
          } else {
            return [
              createTextVNode(" Réserver maintenant → ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="absolute bottom-0 right-0 hidden lg:flex items-center gap-8 pr-12 pb-8 opacity-0 animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "1.3s", "animation-fill-mode": "forwards" })}" data-v-a162c171><div class="flex flex-col items-center gap-1" data-v-a162c171><span class="font-display text-gold text-2xl" data-v-a162c171>★★★★★</span><span class="font-body text-[9px] tracking-[0.3em] text-cream/40 uppercase" data-v-a162c171>5 étoiles</span></div><div class="w-px h-8 bg-white/20" data-v-a162c171></div><div class="flex flex-col items-center gap-1" data-v-a162c171><span class="font-body text-cream/60 text-xs tracking-widest" data-v-a162c171>Trip</span><span class="font-body text-gold text-xs tracking-widest" data-v-a162c171>Advisor</span></div></div></section><section class="py-6 bg-gold" data-v-a162c171><div class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-center gap-8 lg:gap-16" data-v-a162c171><!--[-->`);
      ssrRenderList(strips, (item) => {
        _push(`<div class="flex items-center gap-3" data-v-a162c171><span class="text-stone/60 text-lg" data-v-a162c171>${ssrInterpolate(item.icon)}</span><span class="font-body text-xs tracking-[0.25em] uppercase text-stone font-light" data-v-a162c171>${ssrInterpolate(item.label)}</span></div>`);
      });
      _push(`<!--]--></div></section><section class="py-28 lg:py-40" data-v-a162c171><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-a162c171><div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center" data-v-a162c171><div class="relative reveal-left" data-v-a162c171><div class="aspect-[4/5] bg-cover bg-center rounded-none overflow-hidden" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80')" })}" data-v-a162c171></div><div class="absolute -bottom-8 -right-8 w-48 h-48 bg-cover bg-center border-4 border-cream shadow-2xl hidden lg:block" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80')" })}" data-v-a162c171></div><div class="absolute -top-6 -left-6 w-24 h-24 border border-gold/30 hidden lg:block" data-v-a162c171></div></div><div class="reveal-right" data-v-a162c171><p class="section-subtitle mb-4" data-v-a162c171>Notre histoire</p><div class="gold-line mb-8" data-v-a162c171></div><h2 class="section-title mb-8" data-v-a162c171> L&#39;art de recevoir<br data-v-a162c171><em class="italic text-warm" data-v-a162c171>avec passion</em></h2><p class="font-body font-light text-stone/70 leading-relaxed mb-6" data-v-a162c171> Installés depuis 2008 dans cette bastide du XVIIIe siècle, Sophie et Pierre Marchand ont fait de leur demeure familiale un lieu où l&#39;élégance et l&#39;authenticité se conjuguent naturellement. </p><p class="font-body font-light text-stone/70 leading-relaxed mb-10" data-v-a162c171> Chaque détail a été pensé pour vous offrir une immersion totale dans la douceur provençale — du petit-déjeuner servi sous la treille aux balades dans les oliveraies au coucher du soleil. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/a-propos",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Découvrir l&#39;histoire `);
          } else {
            return [
              createTextVNode(" Découvrir l'histoire ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="py-28 bg-cream-dark" data-v-a162c171><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-a162c171><div class="text-center mb-16 reveal" data-v-a162c171><p class="section-subtitle mb-4" data-v-a162c171>Hébergement</p><div class="gold-line mx-auto mb-8" data-v-a162c171></div><h2 class="section-title" data-v-a162c171>Nos chambres</h2><p class="mt-6 font-body font-light text-stone/60 max-w-lg mx-auto leading-relaxed" data-v-a162c171> Cinq chambres uniques, décorées avec soin, entre élégance provençale et confort contemporain. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-a162c171><!--[-->`);
      ssrRenderList(rooms, (room, i) => {
        _push(`<div class="reveal group cursor-pointer"${ssrRenderAttr("data-delay", i * 100)} data-v-a162c171><div class="relative overflow-hidden aspect-[4/5]" data-v-a162c171><div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="${ssrRenderStyle(`background-image: url('${room.image}')`)}" data-v-a162c171></div><div class="absolute inset-0 bg-gradient-to-t from-stone/80 via-stone/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" data-v-a162c171></div><div class="absolute top-4 left-4 bg-gold/90 px-3 py-1" data-v-a162c171><span class="font-body text-[10px] tracking-[0.25em] uppercase text-stone font-light" data-v-a162c171>${ssrInterpolate(room.tag)}</span></div><div class="absolute bottom-0 left-0 right-0 p-6" data-v-a162c171><p class="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-light mb-1" data-v-a162c171>${ssrInterpolate(room.size)}</p><h3 class="font-display text-2xl text-cream font-light leading-tight mb-2" data-v-a162c171>${ssrInterpolate(room.name)}</h3><div class="flex items-center justify-between" data-v-a162c171><p class="font-body text-sm text-cream/60 font-light" data-v-a162c171>À partir de <span class="text-gold font-normal" data-v-a162c171>${ssrInterpolate(room.price)}€</span>/nuit</p><span class="w-8 h-px bg-gold transition-all duration-300 group-hover:w-12" data-v-a162c171></span></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-12 reveal" data-delay="300" data-v-a162c171>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/chambres",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Voir toutes les chambres `);
          } else {
            return [
              createTextVNode(" Voir toutes les chambres ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="py-28 lg:py-40 relative overflow-hidden" data-v-a162c171><div class="absolute inset-0 bg-stone" data-v-a162c171></div><div class="absolute inset-0 bg-cover bg-center opacity-20" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1800&q=80')" })}" data-v-a162c171></div><div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12" data-v-a162c171><div class="text-center mb-16 reveal" data-v-a162c171><p class="section-subtitle text-gold mb-4" data-v-a162c171>Bien-être &amp; Nature</p><div class="gold-line mx-auto mb-8" data-v-a162c171></div><h2 class="section-title text-cream" data-v-a162c171>Vos expériences</h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-v-a162c171><!--[-->`);
      ssrRenderList(experiences, (exp, i) => {
        _push(`<div class="reveal border border-white/10 p-8 hover:border-gold/50 transition-all duration-500 group"${ssrRenderAttr("data-delay", i * 120)} data-v-a162c171><div class="text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block" data-v-a162c171>${ssrInterpolate(exp.icon)}</div><h3 class="font-display text-xl text-cream font-light mb-3" data-v-a162c171>${ssrInterpolate(exp.title)}</h3><p class="font-body text-sm text-cream/50 font-light leading-relaxed" data-v-a162c171>${ssrInterpolate(exp.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-28" data-v-a162c171><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-a162c171><div class="text-center mb-16 reveal" data-v-a162c171><p class="section-subtitle mb-4" data-v-a162c171>Témoignages</p><div class="gold-line mx-auto mb-8" data-v-a162c171></div><h2 class="section-title" data-v-a162c171>Ce qu&#39;ils disent</h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-a162c171><!--[-->`);
      ssrRenderList(testimonials, (t, i) => {
        _push(`<div class="reveal bg-cream-dark p-10 border-t-2 border-gold"${ssrRenderAttr("data-delay", i * 150)} data-v-a162c171><div class="flex gap-1 mb-6" data-v-a162c171><!--[-->`);
        ssrRenderList(5, (s) => {
          _push(`<span class="text-gold text-sm" data-v-a162c171>★</span>`);
        });
        _push(`<!--]--></div><p class="font-display text-xl text-stone/80 italic font-light leading-relaxed mb-8" data-v-a162c171>« ${ssrInterpolate(t.text)} »</p><div class="flex items-center gap-4" data-v-a162c171><div class="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center" data-v-a162c171><span class="font-display text-gold font-medium" data-v-a162c171>${ssrInterpolate(t.author[0])}</span></div><div data-v-a162c171><p class="font-body text-sm text-stone font-medium" data-v-a162c171>${ssrInterpolate(t.author)}</p><p class="font-body text-xs text-stone/50 font-light" data-v-a162c171>${ssrInterpolate(t.origin)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="grid grid-cols-2 md:grid-cols-4" data-v-a162c171><!--[-->`);
      ssrRenderList(galleryStrip, (img) => {
        _push(`<div class="relative aspect-square group overflow-hidden cursor-pointer" data-v-a162c171><div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="${ssrRenderStyle(`background-image: url('${img}')`)}" data-v-a162c171></div><div class="absolute inset-0 bg-stone/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center" data-v-a162c171><span class="text-cream text-2xl" data-v-a162c171>+</span></div></div>`);
      });
      _push(`<!--]--></section><section class="py-28 bg-stone relative overflow-hidden" data-v-a162c171><div class="absolute inset-0 opacity-5" data-v-a162c171><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "repeating-linear-gradient(45deg, #c9a96e 0px, #c9a96e 1px, transparent 0px, transparent 50%)", "background-size": "30px 30px" })}" data-v-a162c171></div></div><div class="relative z-10 max-w-3xl mx-auto px-6 text-center reveal" data-v-a162c171><p class="section-subtitle mb-4" data-v-a162c171>Séjour d&#39;exception</p><div class="gold-line mx-auto mb-8" data-v-a162c171></div><h2 class="section-title text-cream mb-8" data-v-a162c171> Prêt pour une escapade<br data-v-a162c171><em class="italic text-gold" data-v-a162c171>provençale ?</em></h2><p class="font-body font-light text-cream/60 leading-relaxed mb-12 text-lg" data-v-a162c171> Réservez votre séjour dès maintenant et laissez-nous vous offrir une parenthèse de douceur et d&#39;authenticité. </p><div class="flex flex-wrap gap-4 justify-center" data-v-a162c171>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/reservation",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Réserver mon séjour `);
          } else {
            return [
              createTextVNode(" Réserver mon séjour ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center gap-3 text-cream/70 text-sm tracking-[0.2em] uppercase font-body font-light hover:text-gold transition-colors duration-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nous contacter `);
          } else {
            return [
              createTextVNode(" Nous contacter ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a162c171"]]);

export { index as default };
//# sourceMappingURL=index-0xfp-udb.mjs.map
