!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Tabs",[],e):"object"==typeof exports?exports.Tabs=e():t.Tabs=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=136)}({0:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,u){var s,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=s):o&&(s=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(f.functional){f._injectStyles=s;var c=f.render;f.render=function(t,e){return s.call(e),c(t,e)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,s):[s]}return{exports:t,options:f}}n.d(e,"a",function(){return r})},136:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(137),i=(r=o)&&r.__esModule?r:{default:r};i.default.install=function(t){t.component(i.default.name,i.default)},e.default=i.default},137:function(t,e,n){"use strict";n.r(e);var r=n(87),o=n(54);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n(138);var a=n(0),u=Object(a.a)(o.default,r.a,r.b,!1,null,"0d4ff5a6",null);u.options.__file="packages/Tabs/src/Tabs.vue",e.default=u.exports},138:function(t,e,n){"use strict";var r=n(56);n.n(r).a},54:function(t,e,n){"use strict";n.r(e);var r=n(55),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e.default=o.a},55:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=parseFloat(document.documentElement.getAttribute("data-dpr")||1),o=document.documentElement.getBoundingClientRect().width;e.default={name:"FTabs",props:["value"],data:function(){return{translateX:0,len:0,activeTab:this.value||0}},methods:{tabClick:function(t,e){this.translateX=e.target.offsetLeft,this.activeTab=t,this.$emit("input",t),this.$emit("click",t,e)}},computed:{activeStyle:function(){var t=(o-15*r*2*this.len)/this.len;return{transform:"translateX("+this.translateX+"px)",width:t+"px"}}},mounted:function(){var t=this,e=this.$children;this.len=e.length,e.map(function(e,n){e.index=n,t.activeTab===(e.name||n)&&t.$nextTick(function(){t.translateX=e.$el.offsetLeft})})}}},56:function(t,e,n){},87:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"f-tabs-wrap"},[e("div",{staticClass:"tab-active-bar",style:this.activeStyle}),this._v(" "),this._t("default")],2)},o=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})}})});
//# sourceMappingURL=index.js.map