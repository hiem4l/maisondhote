import { defineComponent, reactive, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderDynamicModel, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Contact — La Bastide des Oliviers",
      description: "Contactez La Bastide des Oliviers pour toute question ou demande de réservation."
    });
    const form = reactive({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
      subject: ""
    });
    const submitting = ref(false);
    const submitted = ref(false);
    const formFields = [
      { name: "firstname", label: "Prénom", type: "text", placeholder: "Votre prénom" },
      { name: "lastname", label: "Nom", type: "text", placeholder: "Votre nom" },
      { name: "email", label: "Email", type: "email", placeholder: "votre@email.com" },
      { name: "phone", label: "Téléphone", type: "tel", placeholder: "+33 6 00 00 00 00" },
      { name: "message", label: "Message", type: "textarea", placeholder: "Comment pouvons-nous vous aider ?" }
    ];
    const contactInfos = [
      {
        icon: "📍",
        label: "Adresse",
        value: "Route des Alpilles<br/>13520 Les Baux-de-Provence, France"
      },
      {
        icon: "📞",
        label: "Téléphone",
        value: '<a href="tel:+33490000000" class="hover:text-gold transition-colors">+33 (0)4 90 00 00 00</a>'
      },
      {
        icon: "✉️",
        label: "Email",
        value: '<a href="mailto:contact@labastide.fr" class="hover:text-gold transition-colors">contact@labastide.fr</a>'
      }
    ];
    const hours = [
      { day: "Lundi — Vendredi", time: "9h — 20h" },
      { day: "Samedi", time: "9h — 18h" },
      { day: "Dimanche", time: "10h — 17h" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4821955f><section class="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden" data-v-4821955f><div class="absolute inset-0" data-v-4821955f><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=2000&q=80')" })}" data-v-4821955f></div><div class="absolute inset-0 bg-gradient-to-t from-stone via-stone/50 to-stone/20" data-v-4821955f></div></div><div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full" data-v-4821955f><p class="section-subtitle text-gold mb-4" data-v-4821955f>Nous joindre</p><h1 class="section-title text-cream" data-v-4821955f>Contact &amp;<br data-v-4821955f><em class="italic" data-v-4821955f>informations</em></h1></div></section><section class="py-28" data-v-4821955f><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-4821955f><div class="grid lg:grid-cols-2 gap-16 lg:gap-24" data-v-4821955f><div class="reveal-left" data-v-4821955f><p class="section-subtitle mb-4" data-v-4821955f>Nous trouver</p><div class="gold-line mb-8" data-v-4821955f></div><h2 class="section-title mb-10" data-v-4821955f>Toujours à<br data-v-4821955f><em class="italic text-warm" data-v-4821955f>votre écoute</em></h2><ul class="space-y-8 mb-12" data-v-4821955f><!--[-->`);
      ssrRenderList(contactInfos, (info) => {
        _push(`<li class="flex gap-5" data-v-4821955f><div class="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0" data-v-4821955f><span class="text-gold text-xl" data-v-4821955f>${ssrInterpolate(info.icon)}</span></div><div data-v-4821955f><p class="font-body text-xs tracking-[0.25em] uppercase text-gold font-light mb-1" data-v-4821955f>${ssrInterpolate(info.label)}</p><div class="font-body text-sm text-stone/70 font-light leading-relaxed" data-v-4821955f>${info.value ?? ""}</div></div></li>`);
      });
      _push(`<!--]--></ul><div class="border border-stone/10 p-8" data-v-4821955f><h3 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-6" data-v-4821955f>Horaires d&#39;accueil</h3><div class="space-y-3" data-v-4821955f><!--[-->`);
      ssrRenderList(hours, (h) => {
        _push(`<div class="flex justify-between" data-v-4821955f><span class="font-body text-sm text-stone/60 font-light" data-v-4821955f>${ssrInterpolate(h.day)}</span><span class="font-body text-sm text-stone font-light" data-v-4821955f>${ssrInterpolate(h.time)}</span></div>`);
      });
      _push(`<!--]--></div></div></div><div class="reveal-right" data-v-4821955f><form class="space-y-6" data-v-4821955f><div class="grid md:grid-cols-2 gap-6" data-v-4821955f><!--[-->`);
      ssrRenderList(formFields.slice(0, 2), (field) => {
        _push(`<div data-v-4821955f><label${ssrRenderAttr("for", field.name)} class="font-body text-xs tracking-[0.25em] uppercase text-stone/60 font-light mb-2 block" data-v-4821955f>${ssrInterpolate(field.label)}</label><input${ssrRenderAttr("id", field.name)}${ssrRenderDynamicModel(field.type, unref(form)[field.name], null)}${ssrRenderAttr("type", field.type)}${ssrRenderAttr("placeholder", field.placeholder)} required class="w-full border border-stone/20 bg-transparent px-5 py-4 font-body text-sm text-stone placeholder-stone/40 focus:outline-none focus:border-gold transition-colors duration-300" data-v-4821955f></div>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(formFields.slice(2), (field) => {
        _push(`<div data-v-4821955f><label${ssrRenderAttr("for", field.name)} class="font-body text-xs tracking-[0.25em] uppercase text-stone/60 font-light mb-2 block" data-v-4821955f>${ssrInterpolate(field.label)}</label>`);
        if (field.type === "textarea") {
          _push(`<textarea${ssrRenderAttr("id", field.name)}${ssrRenderAttr("placeholder", field.placeholder)} rows="6" class="w-full border border-stone/20 bg-transparent px-5 py-4 font-body text-sm text-stone placeholder-stone/40 focus:outline-none focus:border-gold transition-colors duration-300 resize-none" data-v-4821955f>${ssrInterpolate(unref(form).message)}</textarea>`);
        } else {
          _push(`<input${ssrRenderAttr("id", field.name)}${ssrRenderDynamicModel(field.type, unref(form)[field.name], null)}${ssrRenderAttr("type", field.type)}${ssrRenderAttr("placeholder", field.placeholder)} class="w-full border border-stone/20 bg-transparent px-5 py-4 font-body text-sm text-stone placeholder-stone/40 focus:outline-none focus:border-gold transition-colors duration-300" data-v-4821955f>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><div data-v-4821955f><label class="font-body text-xs tracking-[0.25em] uppercase text-stone/60 font-light mb-2 block" data-v-4821955f>Objet</label><select class="w-full border border-stone/20 bg-cream px-5 py-4 font-body text-sm text-stone focus:outline-none focus:border-gold transition-colors duration-300" data-v-4821955f><option value="" data-v-4821955f${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "") : ssrLooseEqual(unref(form).subject, "")) ? " selected" : ""}>Sélectionnez un objet</option><option data-v-4821955f${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, null) : ssrLooseEqual(unref(form).subject, null)) ? " selected" : ""}>Demande de réservation</option><option data-v-4821955f${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, null) : ssrLooseEqual(unref(form).subject, null)) ? " selected" : ""}>Information tarifaire</option><option data-v-4821955f${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, null) : ssrLooseEqual(unref(form).subject, null)) ? " selected" : ""}>Événement privé</option><option data-v-4821955f${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, null) : ssrLooseEqual(unref(form).subject, null)) ? " selected" : ""}>Autre</option></select></div>`);
      if (unref(submitted)) {
        _push(`<div class="bg-gold/10 border border-gold p-5 text-center" data-v-4821955f><p class="font-body text-sm text-stone font-light" data-v-4821955f>✦   Votre message a bien été envoyé. Nous vous répondrons dans les 24h.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="btn-primary w-full justify-center"${ssrIncludeBooleanAttr(unref(submitting)) ? " disabled" : ""} data-v-4821955f>`);
      if (!unref(submitting)) {
        _push(`<span data-v-4821955f>Envoyer le message</span>`);
      } else {
        _push(`<span data-v-4821955f>Envoi en cours...</span>`);
      }
      _push(`</button></form></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4821955f"]]);

export { contact as default };
//# sourceMappingURL=contact-cbpWdDqW.mjs.map
