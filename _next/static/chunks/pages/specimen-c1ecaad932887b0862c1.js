_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/HOU":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n("KQm4"),a=n("rePB"),i=n("ODXe"),c=n("q1tI"),s=n("nKUr"),o=n("8Kt/"),l=n.n(o),u=n("PGlZ"),h=(n("rHLO"),n("9gBE"),n("uGJH")),b=n("16fy"),p=n("ara8"),d=n("r4d+"),j=n("qX4b"),f=n("0iN6");function g(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw i}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(){return Object(s.jsxs)("div",{className:"page",children:[Object(s.jsx)(l.a,{children:Object(s.jsx)("title",{children:"Iosevka Specimen"})}),Object(s.jsx)(k,{})]})}var x=Object(c.createContext)({value:{standouts:[]},set:function(){}});function k(){var e=Object(c.useState)({standouts:[]}),t=e[0],n=e[1];return Object(s.jsx)(x.Provider,{value:{value:t,set:n},children:Object(s.jsxs)(p.a,{withToolbar:!0,className:"character-specimen",children:[Object(s.jsx)("h1",{children:"Iosevka Specimen"}),Object(s.jsx)(b.a,{wholeSection:!0,enableSpacing:!0,enableMarkings:!0,content:S,styleGrades:[j.j.Sans,j.j.Slab,j.j.Aile,j.j.Etoile,j.j.Sparkle],defaultFontStyle:{style:j.j.Sans}})]})})}function S(e){var t=Object(c.useContext)(x);return console.log(t.value.standouts),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(s.Fragment,{children:d.b.map((function(t){return Object(s.jsx)(w,{block:t,fontStyle:e.fontStyle},"block-"+t.name)}))}),Object(s.jsx)("div",{className:"standouts",children:t.value.standouts.map((function(t,n){return Object(s.jsx)(L,{fontStyle:e.fontStyle,index:n,standout:t},"standout-".concat(n))}))})]})}function w(e){var t=Object(u.a)(),n=Object(i.a)(t,2),r=n[0],a=n[1],c=a?e.block.characters.map((function(t){return Object(s.jsx)(N,{blockName:e.block.name,char:t,fontStyle:e.fontStyle},t.lch)})):null;return Object(s.jsxs)("div",{className:"specimen-block",children:[Object(s.jsx)("h3",{children:e.block.name}),Object(s.jsx)("div",{className:Object(f.a)("specimen-block-body",a?"visible":"virtualized"),style:{height:e.block.characters.length/16*4+"rem"},ref:r,children:c})]})}function N(e){var t=Object(c.useState)(!1),n=t[0],r=t[1],a=Object(c.useRef)(null);return Object(h.a)(a,(function(){return r(!1)})),Object(s.jsxs)("div",{ref:a,className:Object(f.a)("specimen-character",e.char.inFont?"in-font":"Unassigned"===e.char.gc?"unassigned":"not-in-font","column-".concat(e.char.lch%16),n?"variant-menu-visible":null),"data-unicode-label":F(e.char.lch),onClick:function(){return r(!0)},children:[Object(s.jsx)(P,v(v({},e),{},{allowCreateStandout:!0})),Object(s.jsx)(_,v({},e))]})}function V(e){var t=[];return function e(t,n,r,a){if(n===t.length)a.push(r.slice(0));else{var i,c=g(t[n]);try{for(c.s();!(i=c.n()).done;){var s=i.value;r[n]=s,e(t,n+1,r,a)}}catch(o){c.e(o)}finally{c.f()}}}(e,0,[],t),t}function C(e,t){var n,a=[],i=g(e);try{for(i.s();!(n=i.n()).done;){var c,s=n.value,o=g(t);try{for(o.s();!(c=o.n()).done;){var l,u=c.value,h=[],b=g(u);try{for(b.s();!(l=b.n()).done;){var p=l.value;h.push([].concat(Object(r.a)(s),[p]))}}catch(d){b.e(d)}finally{b.f()}a.push(h)}}catch(d){o.e(d)}finally{o.f()}}}catch(d){i.e(d)}finally{i.f()}return a}function M(e){var t=function(e,t,n){if(!e)return[];switch(n){case j.g.Upright:return t.charVariantsUpright||[];case j.g.Italic:return t.charVariantsItalic||[];case j.g.Oblique:return t.charVariantsOblique||[]}}(Object(j.o)(e.fontStyle.style||j.j.Sans),e.char,e.fontStyle.slope||j.g.Upright),n=e.char.typographicVariants&&e.char.typographicVariants.length?e.char.typographicVariants:null;if(!t.length)return n?C([[]],[n]):[];for(var r=0,a=0,i=0;i<t.length;i++)for(var c=Math.min(t[i].length,8);c>0;c--)t[i].length%c===0&&c>r&&(a=i,r=c);r<=1&&(r=t[a].length);for(var s=[],o=[],l=0;l<t.length;l++)if(l===a)for(var u=0;u*r<t[a].length;u++){for(var h=[],b=0;b<r;b++)h.push(t[l][u*r+b]);o.push(h)}else s.push(t[l]);return n?C(V([n].concat(s)),o):s.length?C(V([].concat(s)),o):C([[]],o)}function _(e){if(!e.char.inFont)return null;if((t=e.char.lch)<32||t>=65520&&t<=65535||847===t)return null;var t,n,r=M(e);if(((n=r)&&n.length?n.length*n[0].length:0)<=1)return null;for(var a=[],i=0;i<r.length;i++){for(var o=r[i],l=[],u=0;u<o.length;u++){var h=o[u].join(", ");l.push(Object(c.createElement)(P,v(v({},e),{},{fontStyle:e.fontStyle,variantOverride:h,key:u,allowCreateStandout:!0})))}a.push(Object(s.jsx)("div",{className:"row",children:l},i))}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"has-variant-marker"}),Object(s.jsx)("div",{className:Object(f.a)("character-sample-variants"),children:a})]})}function P(e){var t=Object(c.useContext)(x),n=e.char.inFont&&"Nonspacing_Mark"===e.char.gc,a=e.char.inFont&&("Space_Separator"===e.char.gc||"Format"===e.char.gc),i=e.char.inFont&&("Private Use Area"===e.blockName||"Box Drawing"===e.blockName||"Block Elements"===e.blockName||"Symbols for Legacy Computing"===e.blockName),o=e.char.inFont&&!i&&("Decimal_Number"===e.char.gc||"Uppercase_Letter"===e.char.gc||"Lowercase_Letter"===e.char.gc||"Titlecase_Letter"===e.char.gc||"Other_Letter"===e.char.gc||"Currency Symbols"===e.blockName);return Object(s.jsxs)("div",{className:Object(f.a)("character-sample",Object(j.m)(e.fontStyle),e.fontStyle.markingsVisible||n||a?"markings-visible":"markings-hidden"),style:e.variantOverride?{fontFeatureSettings:e.variantOverride+(n?', "NWID" on':"")}:n?{fontFeatureSettings:"'NWID' on"}:Object(j.n)(e.fontStyle),title:I(e.char,e.variantOverride),onDoubleClick:function(){e.allowCreateStandout&&t.set(v(v({},t.value),{},{standouts:[].concat(Object(r.a)(t.value.standouts),[e])}))},children:[Object(s.jsx)(E,{char:e.char,isMark:n,isLetter:o,isMosaic:i}),Object(s.jsxs)("span",{className:"character-sample-inner",children:[Object(s.jsx)("span",{className:"pre",children:(n?"\ue00e":"")+String.fromCodePoint(e.char.lch)}),Object(s.jsx)(D,{char:e.char,isMark:n,isLetter:o,isMosaic:i})]}),Object(s.jsx)(U,{char:e.char,isMark:n,isLetter:o,isMosaic:i})]})}function F(e){return e.toString(16).toUpperCase().padStart(4,"0")}function I(e,t){var n="\u200b"+("Nonspacing_Mark"===e.gc?"\u25cc":"")+String.fromCodePoint(e.lch)+"\u200b";return"U+".concat(F(e.lch)," \u27e6").concat(n,"\u27e7\n").concat(e.charName||"","\n(").concat(e.gc,")")+(t?"\n"+t:"")}function E(e){return e.char.inFont?e.isMark?Object(s.jsx)("span",{className:"background mark-base"}):e.isLetter?Object(s.jsx)("span",{className:"background pre-letter"}):e.isMosaic?Object(s.jsx)("span",{className:"background pre-mosaic"}):Object(s.jsx)("span",{className:"background pre-symbol"}):null}function D(e){return e.char.inFont&&e.isLetter?Object(s.jsx)("span",{className:"background under-letter"}):null}function U(e){return!e.char.inFont||e.isMark?null:e.isLetter?Object(s.jsx)("span",{className:"background post-letter"}):e.isMosaic?Object(s.jsx)("span",{className:"background post-mosaic"}):Object(s.jsx)("span",{className:"background post-symbol"})}function L(e){var t=Object(c.useContext)(x);return Object(s.jsxs)("div",{className:Object(f.a)("standout",e.standout.char.inFont?"in-font":"outside-font"),children:[Object(s.jsx)("button",{className:"close",onClick:function(){var n=t.value.standouts;n.splice(e.index,1),t.set(v(v({},t.value),{},{standouts:n}))},children:"\u2715"}),Object(s.jsx)(P,v(v({},e.standout),{},{fontStyle:v(v({},e.fontStyle),{},{markingsVisible:!0}),allowCreateStandout:!1}))]})}},"16fy":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("rePB"),a=n("nKUr"),i=n("q1tI"),c=n("qX4b"),s=n("0iN6"),o=n("ara8");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=Object(i.createContext)({externFontStyle:{},currentFontStyle:{},receiver:function(){}});function b(e){var t=Object(i.useState)(u({},e.defaultFontStyle)),n=t[0],r=t[1],s=e.styleGrades||[c.j.Sans,c.j.Slab];return Object(a.jsx)(h.Provider,{value:{externFontStyle:e.externFontStyle,currentFontStyle:n,receiver:function(t){e.onFontSet&&e.onFontSet(u(u({},n),t)),r(u(u({},n),t))}},children:Object(a.jsxs)("div",{className:"picker-frame",children:[Object(a.jsxs)(o.b,{withToolbar:e.wholeSection,children:[Object(a.jsx)(p,{className:"style",disabled:e.disableStyle,children:s.map((function(e){return Object(a.jsx)(d,{apply:{style:e},children:c.j[e]},e)}))}),Object(a.jsxs)(p,{className:"weight",disabled:e.disableWeight,children:[Object(a.jsx)(d,{apply:{weight:c.k.Thin},children:"1"}),Object(a.jsx)(d,{apply:{weight:c.k.ExtraLight},children:"2"}),Object(a.jsx)(d,{apply:{weight:c.k.Light},children:"3"}),Object(a.jsx)(d,{apply:{weight:c.k.Regular},children:"4"}),Object(a.jsx)(d,{apply:{weight:c.k.Medium},children:"5"}),Object(a.jsx)(d,{apply:{weight:c.k.SemiBold},children:"6"}),Object(a.jsx)(d,{apply:{weight:c.k.Bold},children:"7"}),Object(a.jsx)(d,{apply:{weight:c.k.ExtraBold},children:"8"}),Object(a.jsx)(d,{apply:{weight:c.k.Heavy},children:"9"})]}),Object(a.jsxs)(p,{className:"slope",disabled:e.disableSlope,children:[Object(a.jsx)(d,{unapply:{slope:c.g.Upright},apply:{slope:c.g.Italic},children:"Italic"}),Object(a.jsx)(d,{unapply:{slope:c.g.Upright},apply:{slope:c.g.Oblique},children:"Oblique"})]}),Object(a.jsx)(p,{className:"width",disabled:e.disableWidth||!Object(c.o)(n.style||c.j.Sans),children:Object(a.jsx)(d,{unapply:{width:c.l.Normal},apply:{width:c.l.Extended},children:"Extended"})}),Object(a.jsxs)(p,{className:"spacing",disabled:!e.enableSpacing,children:[Object(a.jsx)(d,{unapply:{spacingTag:void 0},apply:{spacingTag:"NWID"},title:"Show symbols in terminal width",children:"Terminal"}),Object(a.jsx)(d,{unapply:{spacingTag:void 0},apply:{spacingTag:"WWID"},title:"Make mosaics double-width",children:"WideMosaic"})]}),Object(a.jsx)(p,{className:"markings",disabled:!e.enableMarkings,children:Object(a.jsx)(d,{apply:{markingsVisible:!0},unapply:{markingsVisible:!1},title:"Toggle markings visibility",children:"Markings"})})]}),Object(a.jsx)(e.content,{fontStyle:u(u({},e.externFontStyle),n)})]})})}function p(e){return e.disabled?null:Object(a.jsx)("div",{className:Object(s.a)("button-group",e.className),children:e.children})}function d(e){var t=Object(i.useContext)(h),n=!0,r=u(u({},c.a),t.currentFontStyle);for(var o in e.apply)r[o]!==e.apply[o]&&(n=!1);return Object(a.jsx)("a",{onClick:function(){return t.receiver(n&&e.unapply?e.unapply:e.apply)},className:Object(s.a)("picker-button",n?"active":null,Object(c.m)(u(u({},c.a),e.apply))),title:e.title,children:e.children})}},"8bMz":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/specimen",function(){return n("/HOU")}])},PGlZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=new Map,c=new Map,s=0;function o(e){return Object.keys(e).filter(Boolean).sort().map((function(t){return t+"_"+("root"===t?(n=e.root)?(c.has(n)||(s+=1,c.set(n,s.toString())),c.get(n)):"0":e[t]);var n})).toString()}function l(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var r=function(e){var t=o(e),n=i.get(t);if(!n){var r=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var n,i=t.isIntersecting&&a.thresholds.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=i),null==(n=r.get(t.target))||n.forEach((function(e){e(i,t)}))}))}),e);n={id:t,observer:a,elements:r},i.set(t,n)}return n}(n),a=r.id,c=r.observer,s=r.elements,l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),c.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),c.unobserve(e)),0===s.size&&(c.disconnect(),i.delete(a))}}function u(e){return"function"!==typeof e.children}var h=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),u(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=i.prototype;return c.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},c.componentWillUnmount=function(){this.unobserve(),this.node=null},c.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,a=e.trackVisibility,i=e.delay;this._unobserveCb=l(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:a,delay:i})}},c.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},c.render=function(){if(!u(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var i=this.props,c=i.children,s=i.as,o=i.tag,l=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(i,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(r.createElement)(s||o||"div",a({ref:this.handleNode},l),c)},i}(r.Component);function b(e){var t=void 0===e?{}:e,n=t.threshold,a=t.delay,i=t.trackVisibility,c=t.rootMargin,s=t.root,o=t.triggerOnce,u=t.skip,h=t.initialInView,b=Object(r.useRef)(),p=Object(r.useState)({inView:!!h}),d=p[0],j=p[1],f=Object(r.useCallback)((function(e){void 0!==b.current&&(b.current(),b.current=void 0),u||e&&(b.current=l(e,(function(e,t){j({inView:e,entry:t}),t.isIntersecting&&o&&b.current&&(b.current(),b.current=void 0)}),{root:s,rootMargin:c,threshold:n,trackVisibility:i,delay:a}))}),[Array.isArray(n)?n.toString():n,s,c,o,u,i,a]);Object(r.useEffect)((function(){b.current||!d.entry||o||u||j({inView:!!h})}));var g=[f,d.inView,d.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}h.displayName="InView",h.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}}},[["8bMz",0,1,2,3]]]);