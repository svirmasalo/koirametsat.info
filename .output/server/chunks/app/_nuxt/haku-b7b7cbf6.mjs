import { e as useNuxtApp, _ as __nuxt_component_0$1 } from '../server.mjs';
import { h, createVNode, createTextVNode, resolveComponent, openBlock, createBlock, Fragment, renderList, withModifiers, toDisplayString, createCommentVNode, resolveDynamicComponent, withCtx, renderSlot, version, createSlots, unref, useSSRContext } from 'vue';
import { u as useHead } from './composables-583e67d3.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { connectAutocomplete, connectBreadcrumb, connectClearRefinements, connectConfigure, EXPERIMENTAL_connectConfigureRelatedItems, connectCurrentRefinements, connectHierarchicalMenu, connectHitsWithInsights, connectHitsPerPage, connectInfiniteHitsWithInsights, connectMenu, connectNumericMenu, connectPagination, connectQueryRules, connectRange, connectRatingMenu, connectRefinementList, connectSearchBox, connectSortBy, connectStats, connectToggleRefinement, connectVoiceSearch, connectRelevantSort, connectDynamicWidgets } from 'instantsearch.js/es/connectors/index.js';
import t$4 from 'mitt';
import { getPropertyByPath } from 'instantsearch.js/es/lib/utils/index.js';
import r$6 from 'instantsearch.js/es/widgets/index/index.js';
import a$6 from 'instantsearch.js/es/index.js';
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

function s$1(r,e,o){if(!r)throw new Error("You need to provide `widgetName` in your data");var t=["ais-"+r];return e&&t.push("-"+e),o&&t.push("--"+o),t.join("")}

var t$3=function(t){var a=t.name;return {props:{classNames:{type:Object,default:void 0}},methods:{suit:function(t,e){var r=s$1(a,t,e),i=this.classNames&&this.classNames[r];return i?[r,i].join(" "):r}}}};

function e$b(e){for(var r=arguments,n=1;n<arguments.length;n++){var o=null!=r[n]?r[n]:{},c=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),c.forEach(function(r){t$2(e,r,o[r]);});}return e}function t$2(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}

var e$a=!1,o$1=!0;function n$4(r){function e(r,e,o){if("object"==typeof e&&(e.attrs||e.props)){var n=Object.assign({},e,e.attrs,e.props);return delete n.attrs,delete n.props,h(r,n,o)}return h(r,e,o)}return function(){return r.call(this,e)}}function p(t){return t.$slots.default&&t.$slots.default()}

var n$3=new Set;function a$5(a){n$3.has(a)||(n$3.add(a),console.warn(a));}

var n$2=function(n,i){var s;void 0===n&&(n={});var a=n.connector;return void 0===i&&(i={}),(s={inject:{instantSearchInstance:{from:"$_ais_instantSearchInstance",default:function(){var t=this.$options._componentTag;throw new TypeError('It looks like you forgot to wrap your Algolia search component "<'+t+'>" inside of an "<ais-instant-search>" component.')}},getParentIndex:{from:"$_ais_getParentIndex",default:function(){var t=this;return function(){return t.instantSearchInstance.mainIndex}}}},data:function(){return {state:null}},created:function(){if("function"==typeof a){if(this.factory=a(this.updateState,function(){}),this.widget=e$b(this.factory(this.widgetParams),i),this.getParentIndex().addWidgets([this.widget]),this.instantSearchInstance._initialResults&&!this.instantSearchInstance.started){if("function"!=typeof this.instantSearchInstance.__forceRender)throw new Error("You are using server side rendering with <ais-instant-search> instead of <ais-instant-search-ssr>.");this.instantSearchInstance.__forceRender(this.widget,this.getParentIndex());}}else !0!==a&&a$5("You are using the InstantSearch widget mixin, but didn't provide a connector.\nWhile this is technically possible, and will give you access to the Helper,\nit's not the recommended way of making custom components.\n\nIf you want to disable this message, pass { connector: true } to the mixin.\n\nRead more on using connectors: https://alg.li/vue-custom");}}).beforeUnmount=function(){this.widget&&this.getParentIndex().removeWidgets([this.widget]);},s.watch={widgetParams:{handler:function(e){this.state=null,this.getParentIndex().removeWidgets([this.widget]),this.widget=e$b(this.factory(e),i),this.getParentIndex().addWidgets([this.widget]);},deep:!0}},s.methods={updateState:function(t,e){void 0===t&&(t={}),e||(this.state=t);}},s};

({name:"AisAutocomplete",mixins:[n$2({connector:connectAutocomplete},{$$widgetType:"ais.autocomplete"}),t$3({name:"Autocomplete"})],props:{escapeHTML:{type:Boolean,required:!1,default:!0}},computed:{widgetParams:function(){return {escapeHTML:this.escapeHTML}}}});

createVNode("p",null," This widget doesn't render anything without a filled in default slot. ",-1);createVNode("p",null,"query, function to refine and results are provided.",-1);createVNode("pre",null,"refine: Function",-1);createVNode("summary",null,[createVNode("code",null,"indices"),createTextVNode(":")],-1);

var i$1=function(){var e;return (e={props:{emitter:{type:Object,required:!1,default:function(){return t$4()}}},provide:function(){var t;return (t={}).instantSearchPanelEmitter=this.emitter,t},data:function(){return {canRefine:!0}},created:function(){var t=this;this.emitter.on("PANEL_CHANGE_EVENT",function(e){t.updateCanRefine(e);});}}).beforeUnmount=function(){this.emitter.all.clear();},e.methods={updateCanRefine:function(t){this.canRefine=t;}},e},r$5=function(t){void 0===t&&(t={});var e=t.mapStateToCanRefine;return void 0===e&&(e=function(t){return Boolean(t.canRefine)}),{inject:{emitter:{from:"instantSearchPanelEmitter",default:function(){return {emit:function(){}}}}},data:function(){return {state:null,hasAlreadyEmitted:!1}},watch:{state:{immediate:!0,handler:function(t,n){if(t){var i=e(n||{}),r=e(t);this.hasAlreadyEmitted&&i===r||(this.emitter.emit("PANEL_CHANGE_EVENT",r),this.hasAlreadyEmitted=!0);}}}}}};

({name:"AisBreadcrumb",mixins:[n$2({connector:connectBreadcrumb},{$$widgetType:"ais.breadcrumb"}),r$5(),t$3({name:"Breadcrumb"})],props:{attributes:{type:Array,required:!0},separator:{type:String,default:void 0},rootPath:{type:String,default:void 0},transformItems:{type:Function,default:void 0}},computed:{widgetParams:function(){return {attributes:this.attributes,separator:this.separator,rootPath:this.rootPath,transformItems:this.transformItems}}},methods:{isLastItem:function(t){return this.state.items.length-1===t}}});

createTextVNode("Home");createTextVNode("Home");createTextVNode(">");

({name:"AisClearRefinements",mixins:[n$2({connector:connectClearRefinements},{$$widgetType:"ais.clearRefinements"}),r$5(),t$3({name:"ClearRefinements"})],props:{excludedAttributes:{type:Array,default:void 0},includedAttributes:{type:Array,default:void 0},transformItems:{type:Function,default:void 0}},computed:{widgetParams:function(){return {includedAttributes:this.includedAttributes,excludedAttributes:this.excludedAttributes,transformItems:this.transformItems}},canRefine:function(){return this.state.hasRefinements}}});

createTextVNode(" Clear refinements ");

({inheritAttrs:!1,name:"AisConfigure",mixins:[t$3({name:"Configure"}),n$2({connector:connectConfigure},{$$widgetType:"ais.configure"})],computed:{widgetParams:function(){return {searchParameters:this.$attrs}}},render:n$4(function(t){var e=this.$slots.default;return this.state&&e?t("div",{class:this.suit()},[e({refine:this.state.refine,searchParameters:this.state.widgetParams.searchParameters})]):null})});

({inheritAttrs:!1,name:"AisExperimentalConfigureRelatedItems",mixins:[n$2({connector:EXPERIMENTAL_connectConfigureRelatedItems},{$$widgetType:"ais.configureRelatedItems"})],props:{hit:{type:Object,required:!0},matchingPatterns:{type:Object,required:!0},transformSearchParameters:{type:Function,required:!1}},computed:{widgetParams:function(){return {hit:this.hit,matchingPatterns:this.matchingPatterns,transformSearchParameters:this.transformSearchParameters}}},render:function(){return null}});

({name:"AisCurrentRefinements",mixins:[t$3({name:"CurrentRefinements"}),n$2({connector:connectCurrentRefinements},{$$widgetType:"ais.currentRefinements"}),r$5()],props:{includedAttributes:{type:Array,default:void 0},excludedAttributes:{type:Array,default:void 0},transformItems:{type:Function,default:void 0}},computed:{noRefinement:function(){return this.state&&0===this.state.items.length},widgetParams:function(){return {includedAttributes:this.includedAttributes,excludedAttributes:this.excludedAttributes,transformItems:this.transformItems}}},methods:{createItemKey:function(t){var e=t.attribute,i=t.value;return [e,t.type,i,t.operator].join(":")},capitalize:function(t){return t?t.toString().charAt(0).toLocaleUpperCase()+t.toString().slice(1):""}}});

const e$9 = {name:"HierarchicalMenuList",props:{items:{type:Array,required:!0},level:{type:Number,required:!0},refine:{type:Function,required:!0},createURL:{type:Function,required:!0},suit:{type:Function,required:!0}}};

function c$1(c,f,v,m,o,d){var h=resolveComponent("hierarchical-menu-list",!0);return v.items.length>0?(openBlock(),createBlock("ul",{key:0,class:[v.suit("list"),v.level>0&&v.suit("list","child"),v.suit("list","lvl"+v.level)]},[(openBlock(!0),createBlock(Fragment,null,renderList(v.items,function(e){return openBlock(),createBlock("li",{key:e.value,class:[v.suit("item"),e.data&&e.data.length>0&&v.suit("item","parent"),e.isRefined&&v.suit("item","selected")]},[createVNode("a",{href:v.createURL(e.value),class:[v.suit("link"),e.isRefined&&v.suit("link","selected")],onClick:withModifiers(function(t){return v.refine(e.value)},["prevent"])},[createVNode("span",{class:v.suit("label")},toDisplayString(e.label),3),createVNode("span",{class:v.suit("count")},toDisplayString(e.count),3)],10,["href","onClick"]),e.data?(openBlock(),createBlock(h,{key:0,items:e.data,level:v.level+1,refine:v.refine,createURL:v.createURL,suit:v.suit},null,8,["items","level","refine","createURL","suit"])):createCommentVNode("",!0)],2)}),128))],2)):createCommentVNode("",!0)}

e$9.render=c$1;

({name:"AisHierarchicalMenu",mixins:[t$3({name:"HierarchicalMenu"}),n$2({connector:connectHierarchicalMenu},{$$widgetType:"ais.hierarchicalMenu"}),r$5()],components:{HierarchicalMenuList:e$9},props:{attributes:{type:Array,required:!0},limit:{type:Number,default:void 0},showMoreLimit:{type:Number,default:void 0},showMore:{type:Boolean,default:!1},sortBy:{type:[Array,Function],default:void 0},separator:{type:String,default:void 0},rootPath:{type:String,default:void 0},showParentLevel:{type:Boolean,default:void 0},transformItems:{type:Function,default:void 0}},computed:{widgetParams:function(){return {attributes:this.attributes,limit:this.limit,showMore:this.showMore,showMoreLimit:this.showMoreLimit,separator:this.separator,rootPath:this.rootPath,showParentLevel:this.showParentLevel,sortBy:this.sortBy,transformItems:this.transformItems}}}});

var t$1={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},e$8=/&(?:amp|lt|gt|quot|#39);/g,r$4=RegExp(e$8.source);function u$2(u){return u&&r$4.test(u)?u.replace(e$8,function(e){return t$1[e]}):u}

var t={highlightPreTag:"__ais-highlight__",highlightPostTag:"__/ais-highlight__"};function r$3(i){var h=i.preTag,t=i.postTag,r=i.highlightedValue;void 0===r&&(r="");var a=r.split(h),g=a.shift(),e=""===g?[]:[{value:g,isHighlighted:!1}];if(t===h){var s=!0;a.forEach(function(i){e.push({value:i,isHighlighted:s}),s=!s;});}else a.forEach(function(i){var h=i.split(t);e.push({value:h[0],isHighlighted:!0}),""!==h[1]&&e.push({value:" "===h[1]?"  ":h[1],isHighlighted:!1});});return e}function a$4(a){var g=a.preTag;void 0===g&&(g=t.highlightPreTag);var e=a.postTag;void 0===e&&(e=t.highlightPostTag);var s=a.highlightProperty,l=a.attribute,o=a.hit;if(!o)throw new Error("`hit`, the matching record, must be provided");var u=getPropertyByPath(o[s],l)||{};return Array.isArray(u)?u.map(function(i){return r$3({preTag:g,postTag:e,highlightedValue:u$2(i.value)})}):r$3({preTag:g,postTag:e,highlightedValue:u$2(u.value)})}

var e$6=function(t,e){return e.slots.default()};const e$7 = {name:"AisHighlighter",props:{hit:{type:Object,required:!0},attribute:{type:String,required:!0},highlightedTagName:{type:String,default:"mark"},suit:{type:Function,required:!0},highlightProperty:{type:String,required:!0},preTag:{type:String,required:!0},postTag:{type:String,required:!0}},data:function(){return {TextNode:e$6}},computed:{parsedHighlights:function(){return a$4({attribute:this.attribute,hit:this.hit,highlightProperty:this.highlightProperty,preTag:this.preTag,postTag:this.postTag})}}};

function a$3(a,h,g,o,c,d){return openBlock(),createBlock("span",{class:g.suit()},[(openBlock(!0),createBlock(Fragment,null,renderList(d.parsedHighlights,function(i,s){var a=i.value,h=i.isHighlighted;return openBlock(),createBlock(resolveDynamicComponent(h?g.highlightedTagName:c.TextNode),{class:[h&&g.suit("highlighted")],key:s},{default:withCtx(function(){return [createTextVNode(toDisplayString(a),1)]}),_:2},1032,["class"])}),128))],2)}

e$7.render=a$3;

const e$5 = {name:"AisHighlight",mixins:[t$3({name:"Highlight"})],components:{AisHighlighter:e$7},props:{hit:{type:Object,required:!0},attribute:{type:String,required:!0},highlightedTagName:{type:String,default:"mark"}}};

function g(g,e,a,r,u,l){var m=resolveComponent("ais-highlighter");return openBlock(),createBlock(m,{hit:a.hit,attribute:a.attribute,"highlighted-tag-name":a.highlightedTagName,suit:g.suit,"highlight-property":"_highlightResult","pre-tag":"<mark>","post-tag":"</mark>"},null,8,["hit","attribute","highlighted-tag-name","suit"])}

e$5.render=g;

const e$4 = {name:"AisHits",mixins:[n$2({connector:connectHitsWithInsights},{$$widgetType:"ais.hits"}),t$3({name:"Hits"})],props:{escapeHTML:{type:Boolean,default:!0},transformItems:{type:Function,default:void 0}},computed:{items:function(){return this.state.hits},widgetParams:function(){return {escapeHTML:this.escapeHTML,transformItems:this.transformItems}}}};

function c(c,a,m,d,f,g){return c.state?(openBlock(),createBlock("div",{key:0,class:c.suit()},[renderSlot(c.$slots,"default",{items:g.items,insights:c.state.insights,sendEvent:c.state.sendEvent},function(){return [createVNode("ol",{class:c.suit("list")},[(openBlock(!0),createBlock(Fragment,null,renderList(g.items,function(i,n){return openBlock(),createBlock("li",{key:i.objectID,class:c.suit("item")},[renderSlot(c.$slots,"item",{item:i,index:n,insights:c.state.insights},function(){return [createTextVNode(" objectID: "+toDisplayString(i.objectID)+", index: "+toDisplayString(n),1)]})],2)}),128))],2)]})],2)):createCommentVNode("",!0)}

e$4.render=c;

({name:"AisHitsPerPage",mixins:[t$3({name:"HitsPerPage"}),n$2({connector:connectHitsPerPage},{$$widgetType:"ais.hitsPerPage"}),r$5()],props:{items:{type:Array,required:!0},transformItems:{type:Function,default:void 0}},computed:{widgetParams:function(){return {items:this.items,transformItems:this.transformItems}}}});

({name:"AisIndex",mixins:[t$3({name:"Index"}),n$2({connector:function(){return r$6}},{$$widgetType:"ais.index"})],provide:function(){var e=this;return {$_ais_getParentIndex:function(){return e.widget}}},props:{indexName:{type:String,required:!0},indexId:{type:String,required:!1}},render:n$4(function(e){return e("div",{},p(this))}),computed:{widgetParams:function(){return {indexName:this.indexName,indexId:this.indexId}}}});

var r$2="4.8.5";

var i=function(i){var s;return e$b(((s={mixins:[t$3({name:"InstantSearch"})],provide:function(){return {$_ais_instantSearchInstance:this.instantSearchInstance}},watch:{searchClient:function(n){this.instantSearchInstance.helper.setClient(n).search();},indexName:function(n){this.instantSearchInstance.helper.setIndex(n).search();},stalledSearchDelay:function(n){this.instantSearchInstance._stalledSearchDelay=n;},routing:function(){throw new Error("routing configuration can not be changed dynamically at this point.\n\nPlease open a new issue: https://github.com/algolia/instantsearch.js/discussions/new?category=ideas&labels=triage%2cLibrary%3A+Vue+InstantSearch&title=Feature%20request%3A%20dynamic%20props")},onStateChange:function(){throw new Error("onStateChange configuration can not be changed dynamically at this point.\n\nPlease open a new issue: https://github.com/algolia/instantsearch.js/discussions/new?category=ideas&labels=triage%2cLibrary%3A+Vue+InstantSearch&title=Feature%20request%3A%20dynamic%20props")},searchFunction:function(n){this.instantSearchInstance._searchFunction=n;},middlewares:{immediate:!0,handler:function(n,t){var e=this;(t||[]).filter(function(t){return -1===(n||[]).indexOf(t)}).forEach(function(n){e.instantSearchInstance.unuse(n);}),(n||[]).filter(function(n){return -1===(t||[]).indexOf(n)}).forEach(function(n){e.instantSearchInstance.use(n);});}}},created:function(){var n=this.instantSearchInstance.client;"function"==typeof n.addAlgoliaAgent&&(n.addAlgoliaAgent("Vue ("+version+")"),n.addAlgoliaAgent("Vue InstantSearch ("+r$2+")"));},mounted:function(){var n=this;this.$nextTick(function(){n.instantSearchInstance.started||n.instantSearchInstance.start();});}}).beforeUnmount=function(){this.instantSearchInstance.started&&this.instantSearchInstance.dispose(),this.instantSearchInstance.__initialSearchResults=void 0;},s),i)};

var r$1="Vue InstantSearch: You used the prop api-key or app-id.\nThese have been replaced by search-client.\n\nSee more info here: https://www.algolia.com/doc/api-reference/widgets/instantsearch/vue/#widget-param-search-client";const AisInstantSearch = i({name:"AisInstantSearch",props:{searchClient:{type:Object,required:!0},insightsClient:{type:Function,default:void 0},indexName:{type:String,required:!0},routing:{default:void 0,validator:function(t){return !("boolean"==typeof t||!t.router&&!t.stateMapping)||(a$5("The `routing` option expects an object with `router` and/or `stateMapping`.\n\nSee https://www.algolia.com/doc/api-reference/widgets/instantsearch/vue/#widget-param-routing"),!1)}},stalledSearchDelay:{type:Number,default:void 0},searchFunction:{type:Function,default:void 0},onStateChange:{type:Function,default:void 0},initialUiState:{type:Object,default:void 0},apiKey:{type:String,default:void 0,validator:function(t){return t&&a$5(r$1),!1}},appId:{type:String,default:void 0,validator:function(t){return t&&a$5(r$1),!1}},middlewares:{type:Array,default:null}},data:function(){return {instantSearchInstance:a$6({searchClient:this.searchClient,insightsClient:this.insightsClient,indexName:this.indexName,routing:this.routing,stalledSearchDelay:this.stalledSearchDelay,searchFunction:this.searchFunction,onStateChange:this.onStateChange,initialUiState:this.initialUiState})}},render:n$4(function(t){var i;return t("div",{class:(i={},i[this.suit()]=!0,i[this.suit("","ssr")]=!1,i)},p(this))})});

i({name:"AisInstantSearchSsr",inject:{$_ais_ssrInstantSearchInstance:{default:function(){throw new Error("`createServerRootMixin` is required when using SSR.")}}},data:function(){return {instantSearchInstance:this.$_ais_ssrInstantSearchInstance}},render:n$4(function(t){var e;return t("div",{class:(e={},e[this.suit()]=!0,e[this.suit("","ssr")]=!0,e)},p(this))})});

({name:"AisInfiniteHits",mixins:[n$2({connector:connectInfiniteHitsWithInsights},{$$widgetType:"ais.infiniteHits"}),t$3({name:"InfiniteHits"})],props:{showPrevious:{type:Boolean,default:!1},escapeHTML:{type:Boolean,default:!0},transformItems:{type:Function,default:void 0},cache:{type:Object,default:void 0}},computed:{widgetParams:function(){return {showPrevious:this.showPrevious,escapeHTML:this.escapeHTML,transformItems:this.transformItems,cache:this.cache}},items:function(){return this.state.hits}},methods:{refinePrevious:function(){this.state.showPrevious();},refineNext:function(){this.state.showMore();}}});

({name:"AisMenu",mixins:[t$3({name:"Menu"}),n$2({connector:connectMenu},{$$widgetType:"ais.menu"}),r$5()],props:{attribute:{type:String,required:!0},limit:{type:Number,default:void 0},showMoreLimit:{type:Number,default:void 0},showMore:{type:Boolean,default:!1},sortBy:{type:[Array,Function],default:void 0},transformItems:{type:Function,default:void 0}},computed:{widgetParams:function(){return {attribute:this.attribute,limit:this.limit,showMore:this.showMore,showMoreLimit:this.showMoreLimit,sortBy:this.sortBy,transformItems:this.transformItems}},showShowMoreButton:function(){return this.state.canRefine&&this.showMore}}});

({name:"AisMenuSelect",mixins:[t$3({name:"MenuSelect"}),n$2({connector:connectMenu},{$$widgetType:"ais.menuSelect"}),r$5()],props:{attribute:{type:String,required:!0},limit:{type:Number,default:10},sortBy:{type:[Array,Function],default:void 0},transformItems:{type:Function,default:function(t){return t}}},computed:{widgetParams:function(){return {attribute:this.attribute,limit:this.limit,sortBy:this.sortBy,transformItems:this.transformItems}}},methods:{refine:function(t){this.state.refine(t);}}});

createTextVNode(" See all ");

({name:"AisNumericMenu",mixins:[n$2({connector:connectNumericMenu},{$$widgetType:"ais.numericMenu"}),t$3({name:"NumericMenu"}),r$5()],props:{attribute:{type:String,required:!0},items:{type:Array,required:!0},transformItems:{type:Function,default:void 0}},computed:{widgetParams:function(){return {attribute:this.attribute,transformItems:this.transformItems,items:this.items}}}});

({name:"AisPagination",mixins:[t$3({name:"Pagination"}),n$2({connector:connectPagination},{$$widgetType:"ais.pagination"}),r$5()],props:{padding:{type:Number,default:void 0,validator:function(t){return t>0}},totalPages:{type:Number,default:void 0,validator:function(t){return t>0}},showFirst:{type:Boolean,default:!0},showLast:{type:Boolean,default:!0},showNext:{type:Boolean,default:!0},showPrevious:{type:Boolean,default:!0}},computed:{widgetParams:function(){return {padding:this.padding,totalPages:this.totalPages}}},emits:["page-change"],methods:{refine:function(t){var e=Math.min(Math.max(t,0),this.state.nbPages-1);this.state.refine(e),this.$emit("page-change",e);}}});

({name:"AisPanel",mixins:[t$3({name:"Panel"}),i$1()],methods:{getSlot:function(i){return this.$slots[i]}}});

({name:"AisPoweredBy",mixins:[t$3({name:"PoweredBy"})],props:{theme:{default:"light",validator:function(t){return -1!==["light","dark"].indexOf(t)}}},computed:{algoliaUrl:function(){return "https://www.algolia.com/?utm_source=vue-instantsearch&utm_medium=website&utm_content="+(location?location.hostname:"")+"&utm_campaign=poweredby"}}});

({name:"AisQueryRuleContext",mixins:[t$3({name:"QueryRuleContext"}),n$2({connector:connectQueryRules},{$$widgetType:"ais.queryRuleContext"})],props:{trackedFilters:{type:Object,required:!0},transformRuleContexts:{type:Function,required:!1,default:void 0}},computed:{widgetParams:function(){return {trackedFilters:this.trackedFilters,transformRuleContexts:this.transformRuleContexts}}},render:function(){return null}});

({name:"AisQueryRuleCustomData",mixins:[t$3({name:"QueryRuleCustomData"}),n$2({connector:connectQueryRules},{$$widgetType:"ais.queryRuleCustomData"})],props:{transformItems:{type:Function,required:!1,default:void 0}},computed:{widgetParams:function(){return {transformItems:this.transformItems}}}});

({name:"AisRangeInput",mixins:[t$3({name:"RangeInput"}),n$2({connector:connectRange},{$$widgetType:"ais.rangeInput"}),r$5()],props:{attribute:{type:String,required:!0},min:{type:Number,required:!1,default:void 0},max:{type:Number,required:!1,default:void 0},precision:{type:Number,required:!1,default:0}},data:function(){return {minInput:void 0,maxInput:void 0}},updated:function(){this.minInput=void 0,this.maxInput=void 0;},computed:{widgetParams:function(){return {attribute:this.attribute,min:this.min,max:this.max,precision:this.precision}},step:function(){return 1/Math.pow(10,this.precision)},values:function(){var t=this.state.start,i=t[0],e=t[1],n=this.state.range,r=n.min,s=n.max;return {min:i!==-1/0&&i!==r?i:void 0,max:e!==1/0&&e!==s?e:void 0}}},methods:{pick:function(t,i){return null!=t?t:i},refine:function(t){var i=t.min,e=t.max;this.state.refine([i,e]);}}});

createTextVNode("to");createTextVNode(" Go ");

({name:"AisRatingMenu",mixins:[t$3({name:"RatingMenu"}),n$2({connector:connectRatingMenu},{$$widgetType:"ais.ratingMenu"}),r$5()],props:{attribute:{type:String,required:!0},max:{type:Number,default:void 0}},computed:{widgetParams:function(){return {attribute:this.attribute,max:this.max}}}});

createVNode("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"}},[createVNode("symbol",{id:"ais-RatingMenu-starSymbol",viewBox:"0 0 24 24"},[createVNode("path",{d:"M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"})]),createVNode("symbol",{id:"ais-RatingMenu-starEmptySymbol",viewBox:"0 0 24 24"},[createVNode("path",{d:"M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"})])],-1);createVNode("use",{"xlink:href":"#ais-RatingMenu-starSymbol"},null,-1);createVNode("use",{"xlink:href":"#ais-RatingMenu-starEmptySymbol"},null,-1);createTextVNode("& Up");

const e$3 = {name:"SearchInput",mixins:[t$3({name:"SearchBox"})],props:{placeholder:{type:String,default:"Search here…"},autofocus:{type:Boolean,default:!1},showLoadingIndicator:{type:Boolean,default:!1},shouldShowLoadingIndicator:{type:Boolean,default:!1},submitTitle:{type:String,default:"Search"},resetTitle:{type:String,default:"Clear"},value:{type:String,required:!1,default:void 0},modelValue:{type:String,required:!1,default:void 0}},emits:["input","update:modelValue","blur","focus","reset"],data:function(){return {query:""}},methods:{isFocused:function(){return document.activeElement===this.$refs.input},onFormSubmit:function(){this.$refs.input.blur();},onFormReset:function(){this.$emit("input",""),this.$emit("update:modelValue",""),this.$emit("reset");}}};

var r=createVNode("path",{d:"M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z",fillRule:"evenodd"},null,-1),a$2=createVNode("path",{d:"M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z",fillRule:"evenodd"},null,-1),s=createVNode("g",{fill:"none","fill-rule":"evenodd"},[createVNode("g",{transform:"translate(1 1)","stroke-width":"2"},[createVNode("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),createVNode("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[createVNode("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})])])],-1);function u$1(u,c,d,h,m,f){return openBlock(),createBlock("form",{action:"",role:"search",novalidate:"",class:u.suit("form"),onSubmit:c[4]||(c[4]=withModifiers(function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return f.onFormSubmit&&f.onFormSubmit.apply(f,t)},["prevent"])),onReset:c[5]||(c[5]=withModifiers(function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return f.onFormReset&&f.onFormReset.apply(f,t)},["prevent"]))},[createVNode("input",{type:"search",autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false",required:"",maxlength:"512","aria-label":"Search",placeholder:d.placeholder,autofocus:d.autofocus,class:u.suit("input"),value:d.value||d.modelValue,onFocus:c[1]||(c[1]=function(t){return u.$emit("focus",t)}),onBlur:c[2]||(c[2]=function(t){return u.$emit("blur",t)}),onInput:c[3]||(c[3]=function(t){u.$emit("input",t.target.value),u.$emit("update:modelValue",t.target.value);}),ref:"input"},null,42,["placeholder","autofocus","value"]),createVNode("button",{type:"submit",title:d.submitTitle,class:u.suit("submit"),hidden:d.showLoadingIndicator&&d.shouldShowLoadingIndicator},[renderSlot(u.$slots,"submit-icon",{},function(){return [(openBlock(),createBlock("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 40 40",class:u.suit("submitIcon")},[r],2))]})],10,["title","hidden"]),createVNode("button",{type:"reset",title:d.resetTitle,class:u.suit("reset"),hidden:!d.value&&!d.modelValue||d.showLoadingIndicator&&d.shouldShowLoadingIndicator},[renderSlot(u.$slots,"reset-icon",{},function(){return [(openBlock(),createBlock("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 20 20",class:u.suit("resetIcon")},[a$2],2))]})],10,["title","hidden"]),d.showLoadingIndicator?(openBlock(),createBlock("span",{key:0,hidden:!d.shouldShowLoadingIndicator,class:u.suit("loadingIndicator")},[renderSlot(u.$slots,"loading-indicator",{},function(){return [(openBlock(),createBlock("svg",{role:"img","aria-label":"Results are loading",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",stroke:"#444",viewBox:"0 0 38 38",class:u.suit("loadingIcon")},[s],2))]})],10,["hidden"])):createCommentVNode("",!0)],34)}

e$3.render=u$1;

var a$1=function(){};({name:"AisRefinementList",components:{SearchInput:e$3,AisHighlight:e$5},mixins:[t$3({name:"RefinementList"}),n$2({connector:connectRefinementList},{$$widgetType:"ais.refinementList"}),r$5()],props:{attribute:{type:String,required:!0},searchable:{type:Boolean,default:void 0},searchablePlaceholder:{type:String,required:!1,default:"Search here…"},operator:{default:"or",validator:function(e){return "and"===e||"or"===e},required:!1},limit:{type:Number,required:!1,default:void 0},showMoreLimit:{type:Number,required:!1,default:void 0},showMore:{type:Boolean,required:!1,default:!1},sortBy:{type:[Array,Function],required:!1,default:void 0},transformItems:{type:Function,required:!1,default:void 0}},data:function(){return {searchForFacetValuesQuery:""}},computed:{searchForFacetValues:{get:function(){return this.searchForFacetValuesQuery},set:function(e){this.state.searchForItems(e),this.searchForFacetValuesQuery=e;}},toggleShowMore:function(){return this.state.toggleShowMore||a$1},items:function(){return this.state.items.map(function(e){return Object.assign({},e,{_highlightResult:{item:{value:e.highlighted}}})})},widgetParams:function(){return {attribute:this.attribute,operator:this.operator,limit:this.limit,showMore:this.showMore,showMoreLimit:this.showMoreLimit,sortBy:this.sortBy,escapeFacetValues:!0,transformItems:this.transformItems}}},methods:{refine:function(e){this.state.refine(e),this.searchForFacetValuesQuery="";}}});

var n$1;const e$2 = ((n$1={name:"AisStateResults",mixins:[n$2({connector:!0}),t$3({name:"StateResults"})],props:{catchError:{type:Boolean,default:!1}},data:function(){var t=this;return {renderFn:function(){var e=t.instantSearchInstance,r=e.status,n=e.error,s=t.getParentIndex().getResults(),i=t.getParentIndex().getHelper(),a=i?i.state:null;t.state={results:s,state:a,status:r,error:n};}}},created:function(){this.instantSearchInstance.addListener("render",this.renderFn),this.renderFn();}}).beforeUnmount=function(){this.widget&&(this.instantSearchInstance.removeListener("render",this.renderFn),this.errorFn&&this.instantSearchInstance.removeListener("error",this.errorFn));},n$1.watch={catchError:{immediate:!0,handler:function(t){t?(this.errorFn=function(){},this.instantSearchInstance.addListener("error",this.errorFn)):this.errorFn&&(this.instantSearchInstance.removeListener("error",this.errorFn),this.errorFn=void 0);}}},n$1.computed={stateResults:function(){var t=this.state,r=t.results,n=t.state,s=t.status,i=t.error;return e$b({},r,{results:r,state:n,status:s,error:i})}},n$1);

var n=createVNode("p",null," Use this component to have a different layout based on a certain state. ",-1),u=createVNode("p",null,"Fill in the slot, and get access to the following things:",-1);function o(o,i,c,p,f,d){return o.state&&o.state.state&&o.state.results?(openBlock(),createBlock("div",{key:0,class:o.suit()},[renderSlot(o.$slots,"default",d.stateResults,function(){return [n,u,createVNode("pre",null,"results: "+toDisplayString(Object.keys(o.state.results)),1),createVNode("pre",null,"state: "+toDisplayString(Object.keys(o.state.state)),1),createVNode("pre",null,"status: "+toDisplayString(o.state.status),1),createVNode("pre",null,"error: "+toDisplayString(o.state.error),1)]})],2)):createCommentVNode("",!0)}

e$2.render=o;

const e$1 = {name:"AisSearchBox",mixins:[n$2({connector:connectSearchBox},{$$widgetType:"ais.searchBox"}),t$3({name:"SearchBox"})],components:{SearchInput:e$3},props:{placeholder:{type:String,default:"Search here…"},autofocus:{type:Boolean,default:!1},showLoadingIndicator:{type:Boolean,default:!1},submitTitle:{type:String,default:"Search"},resetTitle:{type:String,default:"Clear"},value:{type:String,default:void 0},modelValue:{type:String,default:void 0},queryHook:{type:Function,default:void 0}},data:function(){return {localValue:"",isVue2:e$a,isVue3:o$1}},computed:{widgetParams:function(){return {queryHook:this.queryHook}},isControlled:function(){return void 0!==this.value||void 0!==this.modelValue},model:function(){return this.value||this.modelValue},currentRefinement:{get:function(){this.isControlled&&this.model!==this.localValue&&(this.localValue=this.model,this.$emit("input",this.model),this.$emit("update:modelValue",this.model),this.state.refine(this.model));var e=this.$refs.searchInput;return e&&e.isFocused()?this.localValue:this.model||this.state.query||""},set:function(e){this.localValue=e,this.state.refine(e),this.isControlled&&(this.$emit("input",e),this.$emit("update:modelValue",e));}}}};

function a(a,l,c,d,f,m){var h=resolveComponent("search-input");return a.state?(openBlock(),createBlock("div",{key:0,class:a.suit()},[renderSlot(a.$slots,"default",{currentRefinement:m.currentRefinement,isSearchStalled:a.state.isSearchStalled,refine:a.state.refine},function(){return [createVNode(h,{onFocus:l[1]||(l[1]=function(e){return a.$emit("focus",e)}),onBlur:l[2]||(l[2]=function(e){return a.$emit("blur",e)}),onReset:l[3]||(l[3]=function(e){return a.$emit("reset")}),placeholder:c.placeholder,autofocus:c.autofocus,"show-loading-indicator":c.showLoadingIndicator,"should-show-loading-indicator":a.state.isSearchStalled,"submit-title":c.submitTitle,"reset-title":c.resetTitle,"class-names":a.classNames,modelValue:m.currentRefinement,"onUpdate:modelValue":l[4]||(l[4]=function(e){return m.currentRefinement=e}),ref:"searchInput"},createSlots({default:withCtx(function(){return [f.isVue2?renderSlot(a.$slots,"loading-indicator",{key:0,slot:"loading-indicator"}):createCommentVNode("",!0),f.isVue2?renderSlot(a.$slots,"submit-icon",{key:1,slot:"submit-icon"}):createCommentVNode("",!0),f.isVue2?renderSlot(a.$slots,"reset-icon",{key:2,slot:"reset-icon"}):createCommentVNode("",!0)]}),_:2},[f.isVue3?{name:"loading-indicator",fn:withCtx(function(){return [renderSlot(a.$slots,"loading-indicator")]})}:void 0,f.isVue3?{name:"submit-icon",fn:withCtx(function(){return [renderSlot(a.$slots,"submit-icon")]})}:void 0,f.isVue3?{name:"reset-icon",fn:withCtx(function(){return [renderSlot(a.$slots,"reset-icon")]})}:void 0]),1032,["placeholder","autofocus","show-loading-indicator","should-show-loading-indicator","submit-title","reset-title","class-names","modelValue"])]})],2)):createCommentVNode("",!0)}

e$1.render=a;

({name:"AisSnippet",mixins:[t$3({name:"Snippet"})],components:{AisHighlighter:e$7},props:{hit:{type:Object,required:!0},attribute:{type:String,required:!0},highlightedTagName:{type:String,default:"mark"}}});

({name:"AisSortBy",mixins:[t$3({name:"SortBy"}),n$2({connector:connectSortBy},{$$widgetType:"ais.sortBy"}),r$5()],props:{items:{type:Array,required:!0},transformItems:{type:Function,default:void 0}},computed:{widgetParams:function(){return {items:this.items,transformItems:this.transformItems}}}});

({name:"AisStats",mixins:[n$2({connector:connectStats},{$$widgetType:"ais.stats"}),t$3({name:"Stats"})],computed:{widgetParams:function(){return {}}}});

({name:"AisToggleRefinement",mixins:[t$3({name:"ToggleRefinement"}),n$2({connector:connectToggleRefinement},{$$widgetType:"ais.toggleRefinement"}),r$5()],props:{attribute:{type:String,required:!0},label:{type:String,required:!0},on:{type:[String,Number,Boolean,Array],required:!1,default:!0},off:{type:[String,Number,Boolean,Array],required:!1,default:void 0}},computed:{widgetParams:function(){return {attribute:this.attribute,label:this.label,on:this.on,off:this.off}}}});

({name:"AisVoiceSearch",mixins:[n$2({connector:connectVoiceSearch},{$$widgetType:"ais.voiceSearch"}),t$3({name:"VoiceSearch"})],props:{searchAsYouSpeak:{type:Boolean,required:!1,default:void 0},language:{type:String,default:void 0},additionalQueryParameters:{type:Object,default:void 0},buttonTitle:{type:String,required:!1,default:"Search by voice"},disabledButtonTitle:{type:String,required:!1,default:"Search by voice (not supported on this browser)"}},data:function(){return {buttonSvgAttrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}}},computed:{widgetParams:function(){return {searchAsYouSpeak:this.searchAsYouSpeak,language:this.language,additionalQueryParameters:this.additionalQueryParameters}},errorNotAllowed:function(){return "error"===this.state.voiceListeningState.status&&"not-allowed"===this.state.voiceListeningState.errorCode},rootSlotProps:function(){return {isBrowserSupported:this.state.isBrowserSupported,isListening:this.state.isListening,toggleListening:this.state.toggleListening,voiceListeningState:this.state.voiceListeningState}},innerSlotProps:function(){return {status:this.state.voiceListeningState.status,errorCode:this.state.voiceListeningState.errorCode,isListening:this.state.isListening,transcript:this.state.voiceListeningState.transcript,isSpeechFinal:this.state.voiceListeningState.isSpeechFinal,isBrowserSupported:this.state.isBrowserSupported}}},methods:{handleClick:function(t){t.currentTarget.blur(),this.state.toggleListening();}}});

createVNode("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1);createVNode("path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"},null,-1);createVNode("path",{d:"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"},null,-1);createVNode("line",{x1:"12",y1:"19",x2:"12",y2:"23"},null,-1);createVNode("line",{x1:"8",y1:"23",x2:"16",y2:"23"},null,-1);createVNode("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"},null,-1);createVNode("line",{x1:"12",y1:"19",x2:"12",y2:"23"},null,-1);createVNode("line",{x1:"8",y1:"23",x2:"16",y2:"23"},null,-1);

({name:"AisRelevantSort",mixins:[t$3({name:"RelevantSort"}),n$2({connector:connectRelevantSort},{$$widgetType:"ais.relevantSort"})],methods:{refine:function(){this.state.isRelevantSorted?this.state.refine(0):this.state.refine(void 0);}}});

const e = {name:"AisDynamicWidgets",mixins:[n$2({connector:connectDynamicWidgets},{$$widgetType:"ais.dynamicWidgets"}),t$3({name:"DynamicWidgets"})],props:{transformItems:{type:Function,default:void 0},facets:{type:Array,default:void 0},maxValuesPerFacet:{type:Number,default:void 0}},render:n$4(function(t){var i=this,s=new Map;if((p(this)||[]).forEach(function(e){var r=function t(e){var i,r=e.props;if(r){if(r.attribute)return r.attribute;if(Array.isArray(r.attributes))return r.attributes[0]}if(i=e.children&&e.children.default&&e.children.default(),Array.isArray(i))return i.reduce(function(e,i){return e||t(i)},void 0)}(e);r&&s.set(r,t("div",{key:r,class:[i.suit("widget")]},[e]));}),!this.state){var a=[];return s.forEach(function(t){return a.push(t)}),t("div",e$b({class:[this.suit()]},{attrs:{hidden:!0}}),a)}return t("div",{class:[this.suit()]},this.state.attributesToRender.map(function(t){return s.get(t)}))}),computed:{widgetParams:function(){return {transformItems:this.transformItems,facets:this.facets,maxValuesPerFacet:this.maxValuesPerFacet,widgets:[]}}}};

Object.assign({},e,{name:"AisExperimentalDynamicWidgets",mounted:function(){a$5("Use AisDynamicWidgets instead of AisExperimentalDynamicWidgets.");}});

const useAlgoliaRef = () => {
  const nuxtApp = useNuxtApp();
  const algolia = nuxtApp.$algolia;
  return algolia;
};
const _sfc_main = {
  __name: "haku",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Haku",
      description: "Hae koiramets\xE4\xE4 nimell\xE4, kaupungilla, avainsanalla tai osoitteella. Tehokas haku koirametsiin."
    });
    const indexName = "dev_koirametsat";
    const algolia = useAlgoliaRef();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><header class="pt-16 pb-12 text-center"><h1 class="text-4xl font-bold text-secondary leading-tight">Haku</h1><p class="text-sm leading-relaxed">Hae koiramets\xE4\xE4 nimell\xE4, kaupungilla, avainsanalla...</p></header><main>`);
      _push(ssrRenderComponent(unref(AisInstantSearch), {
        "index-name": indexName,
        "search-client": unref(algolia)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-sm mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(e$1), {
              placeholder: "Hae nimell\xE4, paikkakunnalla...",
              "submit-title": "Hae",
              "reset-title": "Tyhjenn\xE4"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="bg-secondary flex flex-col justify-start pb-12 min-h-screen"${_scopeId}><div class="max-w-lg mx-auto w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(e$4), null, {
              item: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: item.path
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}><p class="text-lg font-bold"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(e$5), {
                          attribute: "title",
                          hit: item
                        }, null, _parent4, _scopeId3));
                        _push4(`</p><p class="text-sm"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(e$5), {
                          attribute: "tags",
                          hit: item
                        }, null, _parent4, _scopeId3));
                        _push4(`</p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"${_scopeId3}></path></svg>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("p", { class: "text-lg font-bold" }, [
                              createVNode(unref(e$5), {
                                attribute: "title",
                                hit: item
                              }, null, 8, ["hit"])
                            ]),
                            createVNode("p", { class: "text-sm" }, [
                              createVNode(unref(e$5), {
                                attribute: "tags",
                                hit: item
                              }, null, 8, ["hit"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: item.path
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("p", { class: "text-lg font-bold" }, [
                            createVNode(unref(e$5), {
                              attribute: "title",
                              hit: item
                            }, null, 8, ["hit"])
                          ]),
                          createVNode("p", { class: "text-sm" }, [
                            createVNode(unref(e$5), {
                              attribute: "tags",
                              hit: item
                            }, null, 8, ["hit"])
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
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-sm mx-auto" }, [
                createVNode(unref(e$1), {
                  placeholder: "Hae nimell\xE4, paikkakunnalla...",
                  "submit-title": "Hae",
                  "reset-title": "Tyhjenn\xE4"
                })
              ]),
              createVNode("div", { class: "bg-secondary flex flex-col justify-start pb-12 min-h-screen" }, [
                createVNode("div", { class: "max-w-lg mx-auto w-full" }, [
                  createVNode(unref(e$4), null, {
                    item: withCtx(({ item }) => [
                      createVNode(_component_NuxtLink, {
                        to: item.path
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("p", { class: "text-lg font-bold" }, [
                              createVNode(unref(e$5), {
                                attribute: "title",
                                hit: item
                              }, null, 8, ["hit"])
                            ]),
                            createVNode("p", { class: "text-sm" }, [
                              createVNode(unref(e$5), {
                                attribute: "tags",
                                hit: item
                              }, null, 8, ["hit"])
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
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/haku.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=haku-b7b7cbf6.mjs.map
