import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "a-propos",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "À propos — La Bastide des Oliviers",
      description: "Découvrez l'histoire de La Bastide des Oliviers, maison d'hôtes de charme en Provence depuis 2008."
    });
    const team = [
      {
        name: "Sophie Marchand",
        role: "Maîtresse de maison",
        bio: "Ancienne décoratrice d'intérieur, Sophie a mis toute sa sensibilité artistique au service des espaces de la bastide. C'est elle qui cuisine les confitures du matin et cueille les fleurs pour les chambres.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
      },
      {
        name: "Pierre Marchand",
        role: "Maître de maison",
        bio: "Passionné d'oenologie et de randonnée, Pierre connaît chaque sentier des Alpilles et chaque vigneron des environs. Il sera votre guide idéal pour découvrir les trésors cachés de la Provence.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
      }
    ];
    const values = [
      {
        icon: "🌿",
        title: "Authenticité",
        desc: "Nous ne faisons rien pour faire comme. Chaque choix, de la décoration aux produits du petit-déjeuner, reflète notre amour sincère de la Provence."
      },
      {
        icon: "♻️",
        title: "Éco-responsabilité",
        desc: "Panneau solaires, potager biologique, récupération des eaux de pluie, produits ménagers naturels. Nous prenons soin de la terre qui nous accueille."
      },
      {
        icon: "💛",
        title: "Attention aux détails",
        desc: "Le peignoir moelleux, la carafe d'eau à votre chevet, les fleurs fraîches cueillies le matin... C'est dans les petits gestes que réside la vraie hospitalité."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c0b1e381><section class="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden" data-v-c0b1e381><div class="absolute inset-0" data-v-c0b1e381><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=2000&q=80')" })}" data-v-c0b1e381></div><div class="absolute inset-0 bg-gradient-to-t from-stone via-stone/50 to-stone/20" data-v-c0b1e381></div></div><div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full" data-v-c0b1e381><p class="section-subtitle text-gold mb-4" data-v-c0b1e381>Notre maison</p><h1 class="section-title text-cream" data-v-c0b1e381>L&#39;histoire de<br data-v-c0b1e381><em class="italic" data-v-c0b1e381>La Bastide</em></h1></div></section><section class="py-28 lg:py-40" data-v-c0b1e381><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-c0b1e381><div class="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start" data-v-c0b1e381><div class="reveal-left" data-v-c0b1e381><p class="section-subtitle mb-4" data-v-c0b1e381>Depuis 2008</p><div class="gold-line mb-8" data-v-c0b1e381></div><h2 class="section-title mb-10" data-v-c0b1e381>Une bastide<br data-v-c0b1e381><em class="italic text-warm" data-v-c0b1e381>du XVIIIe siècle</em></h2><p class="font-body font-light text-stone/70 leading-relaxed mb-6" data-v-c0b1e381> Construite en 1742, La Bastide des Oliviers a traversé les siècles avec grâce. Cette demeure en pierres de taille, entourée de 3 hectares d&#39;oliviers centenaires, a été acquise et entièrement restaurée par Sophie et Pierre Marchand en 2006. </p><p class="font-body font-light text-stone/70 leading-relaxed mb-6" data-v-c0b1e381> Deux années de travaux ont été nécessaires pour allier la noblesse de l&#39;architecture d&#39;origine aux exigences du confort contemporain. Chaque pierre a été préservée, chaque poutre apparente a été traitée, chaque espace a été pensé pour inviter à la douceur. </p><p class="font-body font-light text-stone/70 leading-relaxed" data-v-c0b1e381> Depuis l&#39;ouverture en 2008, la bastide accueille des voyageurs du monde entier en quête d&#39;authenticité, de silence et des saveurs provençales. </p></div><div class="space-y-8 reveal-right" data-v-c0b1e381><div class="aspect-[4/3] bg-cover bg-center overflow-hidden" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80')" })}" data-v-c0b1e381></div><div class="grid grid-cols-2 gap-4" data-v-c0b1e381><div class="bg-gold p-6" data-v-c0b1e381><p class="font-display text-5xl text-stone font-light" data-v-c0b1e381>18</p><p class="font-body text-xs tracking-[0.25em] uppercase text-stone/70 font-light" data-v-c0b1e381>Années d&#39;accueil</p></div><div class="bg-cream-dark p-6 border border-stone/10" data-v-c0b1e381><p class="font-display text-5xl text-gold font-light" data-v-c0b1e381>3ha</p><p class="font-body text-xs tracking-[0.25em] uppercase text-stone/50 font-light" data-v-c0b1e381>D&#39;oliviers &amp; jardins</p></div></div></div></div></div></section><section class="py-28 bg-cream-dark" data-v-c0b1e381><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-c0b1e381><div class="text-center mb-16 reveal" data-v-c0b1e381><p class="section-subtitle mb-4" data-v-c0b1e381>La famille Marchand</p><div class="gold-line mx-auto mb-8" data-v-c0b1e381></div><h2 class="section-title" data-v-c0b1e381>Vos hôtes</h2></div><div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto" data-v-c0b1e381><!--[-->`);
      ssrRenderList(team, (person, i) => {
        _push(`<div class="text-center reveal"${ssrRenderAttr("data-delay", i * 150)} data-v-c0b1e381><div class="w-32 h-32 rounded-full bg-cover bg-center mx-auto mb-6 border-4 border-gold/30" style="${ssrRenderStyle(`background-image: url('${person.image}')`)}" data-v-c0b1e381></div><h3 class="font-display text-2xl text-stone font-light mb-1" data-v-c0b1e381>${ssrInterpolate(person.name)}</h3><p class="font-body text-xs tracking-[0.25em] uppercase text-gold font-light mb-4" data-v-c0b1e381>${ssrInterpolate(person.role)}</p><p class="font-body font-light text-stone/60 text-sm leading-relaxed" data-v-c0b1e381>${ssrInterpolate(person.bio)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-28" data-v-c0b1e381><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-c0b1e381><div class="text-center mb-16 reveal" data-v-c0b1e381><p class="section-subtitle mb-4" data-v-c0b1e381>Nos engagements</p><div class="gold-line mx-auto mb-8" data-v-c0b1e381></div><h2 class="section-title" data-v-c0b1e381>Ce qui nous guide</h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-c0b1e381><!--[-->`);
      ssrRenderList(values, (val, i) => {
        _push(`<div class="reveal border-t-2 border-gold pt-8"${ssrRenderAttr("data-delay", i * 100)} data-v-c0b1e381><div class="text-3xl mb-4" data-v-c0b1e381>${ssrInterpolate(val.icon)}</div><h3 class="font-display text-xl text-stone font-light mb-3" data-v-c0b1e381>${ssrInterpolate(val.title)}</h3><p class="font-body text-sm text-stone/60 font-light leading-relaxed" data-v-c0b1e381>${ssrInterpolate(val.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/a-propos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aPropos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c0b1e381"]]);

export { aPropos as default };
//# sourceMappingURL=a-propos-w_AgnjIr.mjs.map
