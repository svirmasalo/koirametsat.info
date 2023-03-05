import { _ as __nuxt_component_0$1 } from '../server.mjs';
import { withAsyncContext, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { u as useHead } from './composables-583e67d3.mjs';
import { q as queryContent } from './query-75b7ded4.mjs';
import { ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'ufo';
import '@algolia/cache-in-memory';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'cookie-es';
import './utils-f9828228.mjs';

const _sfc_main = {
  __name: "kaupungit",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Kaupungit",
      description: "Koiramets\xE4t lajiteltuna kaupungeittain."
    });
    const cityQuery = ([__temp, __restore] = withAsyncContext(() => queryContent({
      where: {
        _path: { $contains: "/" }
      }
    }).find()), __temp = await __temp, __restore(), __temp);
    const nonCities = ["/haku", "/tietoa-palvelusta", "/kaupungit", "/"];
    let cityList = cityQuery.filter((item) => {
      return !nonCities.includes(item._path) && item._path.split("/").length === 2;
    });
    cityList = cityList.map((city) => {
      city.dogForests = cityQuery.filter((item) => {
        return item._path.includes(city._path) && item._path.split("/").length === 3;
      }).length;
      return city;
    });
    cityList = cityList.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<!--[--><header class="pt-16 pb-12 text-center"><h1 class="text-4xl font-bold text-secondary leading-tight">Kaupungit</h1><p class="text-sm leading-relaxed">Koirametsi\xE4 jo <span>${ssrInterpolate(unref(cityList).length)}</span> kaupungissa</p></header><main class="bg-secondary flex flex-col justify-start pb-12 min-h-screen"><div class="w-full max-w-lg mx-auto pt-10"><h2 class="text-primary mb-4 px-4 font-bold">Koiramets\xE4t kaupungeittain</h2><ul class="flex flex-col gap-4 justify-center px-4"><!--[-->`);
      ssrRenderList(unref(cityList), (city) => {
        _push(`<li class="bg-white shadow text-primary rounded p-5 hover:shadow-md transition-shadow">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "flex flex-row justify-between items-center",
          to: city._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class=""${_scopeId}><p class="text-lg font-bold"${_scopeId}>${ssrInterpolate(city.title)}</p><p class="text-sm"${_scopeId}>Koirametsi\xE4: <span${_scopeId}>${ssrInterpolate(city.dogForests)}</span></p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"${_scopeId}></path></svg>`);
            } else {
              return [
                createVNode("div", { class: "" }, [
                  createVNode("p", { class: "text-lg font-bold" }, toDisplayString(city.title), 1),
                  createVNode("p", { class: "text-sm" }, [
                    createTextVNode("Koirametsi\xE4: "),
                    createVNode("span", null, toDisplayString(city.dogForests), 1)
                  ])
                ]),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-4 h-4"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                  })
                ]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/kaupungit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=kaupungit-d70940d1.mjs.map
