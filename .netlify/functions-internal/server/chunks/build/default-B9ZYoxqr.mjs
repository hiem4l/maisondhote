import { _ as __nuxt_component_0 } from './nuxt-link-B9bNs2CV.mjs';
import { defineComponent, ref, watch, unref, withCtx, createVNode, createTextVNode, toDisplayString, mergeProps, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as useRoute } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const socials = [
      { name: "Instagram", href: "#", abbr: "Ig" },
      { name: "Facebook", href: "#", abbr: "Fb" },
      { name: "Pinterest", href: "#", abbr: "Pt" }
    ];
    const footerLinks = [
      { label: "Accueil", path: "/" },
      { label: "Nos chambres", path: "/chambres" },
      { label: "Expériences", path: "/experiences" },
      { label: "Galerie photo", path: "/galerie" },
      { label: "À propos", path: "/a-propos" },
      { label: "Contact", path: "/contact" },
      { label: "Réservation", path: "/reservation" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-stone text-cream/70 pt-20 pb-8" }, _attrs))}><div class="max-w-7xl mx-auto px-6 lg:px-12"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10"><div class="lg:col-span-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex flex-col items-start mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-display text-3xl text-cream tracking-widest"${_scopeId}>La Bastide</span><span class="font-body text-[10px] tracking-[0.35em] text-gold uppercase font-light"${_scopeId}>des Oliviers</span>`);
          } else {
            return [
              createVNode("span", { class: "font-display text-3xl text-cream tracking-widest" }, "La Bastide"),
              createVNode("span", { class: "font-body text-[10px] tracking-[0.35em] text-gold uppercase font-light" }, "des Oliviers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="font-body font-light text-sm leading-relaxed text-cream/60 max-w-sm mb-8"> Une maison d&#39;hôtes de caractère nichée au cœur de la Provence. Profitez d&#39;un cadre d&#39;exception, d&#39;une hospitalité sincère et de paysages époustouflants. </p><div class="flex gap-4"><!--[-->`);
      ssrRenderList(socials, (social) => {
        _push(`<a${ssrRenderAttr("href", social.href)}${ssrRenderAttr("aria-label", social.name)} class="w-10 h-10 border border-white/20 flex items-center justify-center text-cream/50 hover:border-gold hover:text-gold transition-all duration-300"><span class="text-xs font-body tracking-widest">${ssrInterpolate(social.abbr)}</span></a>`);
      });
      _push(`<!--]--></div></div><div><h4 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-6">Navigation</h4><ul class="space-y-3"><!--[-->`);
      ssrRenderList(footerLinks, (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.path,
          class: "font-body text-sm font-light text-cream/60 hover:text-gold transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div><h4 class="font-body text-xs tracking-[0.3em] uppercase text-gold font-light mb-6">Contact</h4><ul class="space-y-4 text-sm font-light font-body"><li class="flex items-start gap-3 text-cream/60"><span class="text-gold mt-0.5">✦</span><span>Route des Alpilles<br>13520 Les Baux-de-Provence</span></li><li class="flex items-center gap-3 text-cream/60"><span class="text-gold">✦</span><a href="tel:+33490000000" class="hover:text-gold transition-colors duration-300">+33 (0)4 90 00 00 00</a></li><li class="flex items-center gap-3 text-cream/60"><span class="text-gold">✦</span><a href="mailto:contact@labastide.fr" class="hover:text-gold transition-colors duration-300">contact@labastide.fr</a></li></ul></div></div><div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"><p class="font-body text-xs tracking-widest text-cream/40 font-light"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} La Bastide des Oliviers. Tous droits réservés. </p><div class="flex gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/mentions-legales",
        class: "font-body text-xs text-cream/40 hover:text-gold transition-colors duration-300 font-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Mentions légales`);
          } else {
            return [
              createTextVNode("Mentions légales")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/confidentialite",
        class: "font-body text-xs text-cream/40 hover:text-gold transition-colors duration-300 font-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Confidentialité`);
          } else {
            return [
              createTextVNode("Confidentialité")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "AppFooter" });
const useCursor = () => {
  const cursor = ref(null);
  const cursorDot = ref(null);
  const mouseX = ref(0);
  const mouseY = ref(0);
  const cursorX = ref(0);
  const cursorY = ref(0);
  let animFrame;
  const initCursor = (cursorEl, dotEl) => {
    cursor.value = cursorEl;
    cursorDot.value = dotEl;
    const move = (e) => {
      mouseX.value = e.clientX;
      mouseY.value = e.clientY;
      if (dotEl) {
        dotEl.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };
    (void 0).addEventListener("mousemove", move);
    const animate = () => {
      cursorX.value += (mouseX.value - cursorX.value) * 0.08;
      cursorY.value += (mouseY.value - cursorY.value) * 0.08;
      if (cursorEl) {
        cursorEl.style.transform = `translate(${cursorX.value - 20}px, ${cursorY.value - 20}px)`;
      }
      animFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      (void 0).removeEventListener("mousemove", move);
      cancelAnimationFrame(animFrame);
    };
  };
  return { initCursor };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const scrolled = ref(false);
    const mobileOpen = ref(false);
    const navLinks = [
      { label: "Accueil", path: "/" },
      { label: "Chambres", path: "/chambres" },
      { label: "Expériences", path: "/experiences" },
      { label: "Galerie", path: "/galerie" },
      { label: "À propos", path: "/a-propos" },
      { label: "Contact", path: "/contact" }
    ];
    ref(null);
    ref(null);
    useCursor();
    const route = useRoute();
    watch(() => route.path, () => {
      mobileOpen.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AppFooter = __nuxt_component_1;
      _push(`<!--[--><div class="custom-cursor hidden lg:block fixed top-0 left-0 w-10 h-10 rounded-full border border-gold pointer-events-none z-[9999] transition-[width,height,border-color,background-color] duration-300 mix-blend-difference" data-v-030f863f></div><div class="custom-cursor-dot hidden lg:block fixed top-0 left-0 w-2 h-2 rounded-full bg-gold pointer-events-none z-[9999]" data-v-030f863f></div><header class="${ssrRenderClass([
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        unref(scrolled) ? "bg-stone/95 backdrop-blur-sm shadow-2xl py-4" : "bg-transparent py-6"
      ])}" data-v-030f863f><nav class="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between" data-v-030f863f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex flex-col items-start group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-display text-xl lg:text-2xl text-cream tracking-widest leading-none transition-all duration-300 group-hover:text-gold" data-v-030f863f${_scopeId}>La Bastide</span><span class="font-body text-[10px] tracking-[0.35em] text-gold uppercase font-light leading-none mt-0.5" data-v-030f863f${_scopeId}>des Oliviers</span>`);
          } else {
            return [
              createVNode("span", { class: "font-display text-xl lg:text-2xl text-cream tracking-widest leading-none transition-all duration-300 group-hover:text-gold" }, "La Bastide"),
              createVNode("span", { class: "font-body text-[10px] tracking-[0.35em] text-gold uppercase font-light leading-none mt-0.5" }, "des Oliviers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="hidden lg:flex items-center gap-10" data-v-030f863f><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(`<li data-v-030f863f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.path,
          class: "relative font-body text-xs tracking-[0.25em] uppercase text-cream/80 hover:text-gold transition-colors duration-300 group font-light"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)} <span class="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-400" data-v-030f863f${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label) + " ", 1),
                createVNode("span", { class: "absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-400" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/reservation",
        class: "hidden lg:flex items-center gap-2 border border-gold/60 text-gold px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-body font-light hover:bg-gold hover:text-stone transition-all duration-400"
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
        _: 1
      }, _parent));
      _push(`<button class="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Menu" data-v-030f863f><span class="${ssrRenderClass(["block w-6 h-px bg-cream transition-all duration-300", unref(mobileOpen) ? "rotate-45 translate-y-2" : ""])}" data-v-030f863f></span><span class="${ssrRenderClass(["block w-6 h-px bg-cream transition-all duration-300", unref(mobileOpen) ? "opacity-0" : ""])}" data-v-030f863f></span><span class="${ssrRenderClass(["block w-6 h-px bg-cream transition-all duration-300", unref(mobileOpen) ? "-rotate-45 -translate-y-2.5" : ""])}" data-v-030f863f></span></button></nav>`);
      if (unref(mobileOpen)) {
        _push(`<div class="lg:hidden absolute top-full left-0 right-0 bg-stone/98 backdrop-blur-sm border-t border-gold/20 py-8" data-v-030f863f><ul class="flex flex-col items-center gap-6" data-v-030f863f><!--[-->`);
        ssrRenderList(navLinks, (link) => {
          _push(`<li data-v-030f863f>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: link.path,
            class: "font-body text-sm tracking-[0.25em] uppercase text-cream/80 hover:text-gold transition-colors duration-300 font-light",
            onClick: ($event) => mobileOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--><li data-v-030f863f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/reservation",
          class: "mt-2 border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body font-light hover:bg-gold hover:text-stone transition-all duration-400",
          onClick: ($event) => mobileOpen.value = false
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
          _: 1
        }, _parent));
        _push(`</li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><main data-v-030f863f>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-030f863f"]]);

export { _default as default };
//# sourceMappingURL=default-B9ZYoxqr.mjs.map
