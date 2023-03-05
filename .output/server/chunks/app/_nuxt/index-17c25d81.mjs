import { d as useRoute, a as _export_sfc, _ as __nuxt_component_0$1 } from '../server.mjs';
import { withAsyncContext, unref, useSSRContext, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock } from 'vue';
import { ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import _sfc_main$3 from './ContentDoc-bc14d1e5.mjs';
import { q as queryContent } from './query-75b7ded4.mjs';
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
import './composables-583e67d3.mjs';
import './ContentRenderer-1183ed2a.mjs';
import './ContentRendererMarkdown-29deaf43.mjs';
import 'property-information';
import './ContentQuery-478aea45.mjs';
import './asyncData-b7b62de5.mjs';
import 'cookie-es';
import './utils-f9828228.mjs';

const _sfc_main$2 = {
  props: {
    title: {
      type: String,
      required: true
    },
    substring: {
      type: String,
      required: false
    },
    to: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    class: "flex flex-row justify-between items-center",
    to: $props.to
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class=""${_scopeId}><p class="text-lg font-bold"${_scopeId}>${ssrInterpolate($props.title)}</p><p class="text-sm leading-relaxed"${_scopeId}>${ssrInterpolate($props.substring)}</p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"${_scopeId}></path></svg>`);
      } else {
        return [
          createVNode("div", { class: "" }, [
            createVNode("p", { class: "text-lg font-bold" }, toDisplayString($props.title), 1),
            createVNode("p", { class: "text-sm leading-relaxed" }, toDisplayString($props.substring), 1)
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
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ListItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<p${ssrRenderAttrs(_attrs)}>Palvelustamme ei viel\xE4 l\xF6ydy tietoja t\xE4m\xE4n kaupungin koirametsist\xE4.</p>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NoContentForCity.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const parkQuery = ([__temp, __restore] = withAsyncContext(() => queryContent({
      where: {
        _path: { $contains: route.path }
      }
    }).find()), __temp = await __temp, __restore(), __temp);
    const cityQuery = ([__temp, __restore] = withAsyncContext(() => queryContent({
      where: {
        _path: { $eq: route.path }
      }
    }).findOne()), __temp = await __temp, __restore(), __temp);
    const nonCities = [route.path];
    let parkList = parkQuery.filter((item) => {
      return !nonCities.includes(item._path) && item._path.split("/").length === 3;
    });
    parkList = parkList.map((park) => {
      park.dogForests = parkQuery.filter((item) => {
        return item._path.includes(park._path) && item._path.split("/").length === 3;
      }).length;
      return park;
    });
    parkList = parkList.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListItem = __nuxt_component_0;
      const _component_NoContentForCity = __nuxt_component_1;
      const _component_ContentDoc = _sfc_main$3;
      _push(`<!--[--><header><header class="pt-16 pb-12 text-center"><h1 class="text-4xl font-bold text-secondary leading-tight">${ssrInterpolate(unref(cityQuery).title)}</h1><p class="text-sm leading-relaxed">${ssrInterpolate(unref(cityQuery).titleIn)} on yhteens\xE4 <span>${ssrInterpolate(unref(parkList).length)}</span> koiramets\xE4\xE4.</p></header></header><main class="bg-secondary flex flex-col justify-start pb-12 min-h-screen"><div class="container pt-10">`);
      if (unref(parkList).length > 0) {
        _push(`<div class="w-full max-w-lg mx-auto"><ul class="flex flex-col gap-4 justify-center"><!--[-->`);
        ssrRenderList(unref(parkList), (park) => {
          _push(`<li class="bg-white shadow text-primary rounded p-5 hover:shadow-md transition-shadow">`);
          _push(ssrRenderComponent(_component_ListItem, {
            to: park._path,
            title: park.title,
            substring: park.address
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<div class="prose text-center">`);
        _push(ssrRenderComponent(_component_NoContentForCity, null, null, _parent));
        _push(`</div>`);
      }
      _push(ssrRenderComponent(_component_ContentDoc, {
        path: _ctx.$route.path
      }, null, _parent));
      _push(`</div></main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[city]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-17c25d81.mjs.map
