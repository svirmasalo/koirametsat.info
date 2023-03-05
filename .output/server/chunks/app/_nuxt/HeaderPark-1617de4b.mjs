import _sfc_main$1 from './ContentSlot-a1d100b5.mjs';
import { a as _export_sfc, _ as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, openBlock, createBlock, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './utils-f9828228.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HeaderPark",
  __ssrInlineRender: true,
  props: {
    image: { type: String, default: "" },
    notificationText: { type: String, default: "" },
    notificationLink: { type: String, default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentSlot = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "pt-16 pb-0 px-4 text-center" }, _attrs))} data-v-210a6a95><div class="rounded-full border-2 border-secondary overflow-hidden mb-6 w-44 h-44 mx-auto" data-v-210a6a95><img${ssrRenderAttr("src", __props.image)} class="object-cover object-center h-full" data-v-210a6a95></div>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.default
      }, null, _parent));
      _push(`<div class="py-4 mt-12 bg-accent text-white text-xs -mx-4 flex justify-between items-center px-4 lg:justify-center" data-v-210a6a95><p class="flex items-center" data-v-210a6a95><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-4" data-v-210a6a95><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" data-v-210a6a95></path></svg><span class="text-left text-xs" data-v-210a6a95>${ssrInterpolate(__props.notificationText)}</span></p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center -my-4 px-4 py-4 -mr-4",
        rel: "noreferrer nofollow",
        to: __props.notificationLink
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" data-v-210a6a95${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" data-v-210a6a95${_scopeId}></path></svg>`);
          } else {
            return [
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
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/HeaderPark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderPark = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-210a6a95"]]);

export { HeaderPark as default };
//# sourceMappingURL=HeaderPark-1617de4b.mjs.map
