(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,a){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(n.default.useContext(r.AmpStateContext))};var o,n=(o=a("q1tI"))&&o.__esModule?o:{default:o},r=a("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,o=e.hybrid,n=void 0!==o&&o,r=e.hasQuery,i=void 0!==r&&r;return a||n&&i}},"5fIB":function(e,t,a){var o=a("7eYB");e.exports=function(e){if(Array.isArray(e))return o(e)}},"8Kt/":function(e,t,a){"use strict";a("oI91");t.__esModule=!0,t.defaultHead=h,t.default=void 0;var o,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=o?Object.getOwnPropertyDescriptor(e,n):null;r&&(r.get||r.set)?Object.defineProperty(a,n,r):a[n]=e[n]}a.default=e,t&&t.set(e,a);return a}(a("q1tI")),r=(o=a("Xuae"))&&o.__esModule?o:{default:o},i=a("lwAK"),p=a("FYa8"),l=a("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function h(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var u=["name","httpEquiv","charSet","itemProp"];function s(e,t){return e.reduce((function(e,t){var a=n.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(d,[]).reverse().concat(h(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,o={};return function(n){var r=!0,i=!1;if(n.key&&"number"!==typeof n.key&&n.key.indexOf("$")>0){i=!0;var p=n.key.slice(n.key.indexOf("$")+1);e.has(p)?r=!1:e.add(p)}switch(n.type){case"title":case"base":t.has(n.type)?r=!1:t.add(n.type);break;case"meta":for(var l=0,c=u.length;l<c;l++){var h=u[l];if(n.props.hasOwnProperty(h))if("charSet"===h)a.has(h)?r=!1:a.add(h);else{var d=n.props[h],s=o[h]||new Set;"name"===h&&i||!s.has(d)?(s.add(d),o[h]=s):r=!1}}}return r}}()).reverse().map((function(e,t){var a=e.key||t;return n.default.cloneElement(e,{key:a})}))}function m(e){var t=e.children,a=(0,n.useContext)(i.AmpStateContext),o=(0,n.useContext)(p.HeadManagerContext);return n.default.createElement(r.default,{reduceComponentsToState:s,headManager:o,inAmpMode:(0,l.isInAmpMode)(a)},t)}m.rewind=function(){};var f=m;t.default=f},"9ixD":function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d}));var o=a("g4pe"),n=a.n(o),r=a("q1tI"),i=a.n(r);function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e){var t=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var a="";e.title?(a=e.title,l.templateTitle&&(a=l.templateTitle.replace(/%s/g,(function(){return a})))):e.defaultTitle&&(a=e.defaultTitle),a&&t.push(i.a.createElement("title",{key:"title"},a));var o=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,n=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow,r="";if(e.robotsProps){var p=e.robotsProps,c=p.nosnippet,h=p.maxSnippet,d=p.maxImagePreview,u=p.maxVideoPreview,s=p.noarchive,m=p.noimageindex,f=p.notranslate,g=p.unavailableAfter;r=(c?",nosnippet":"")+(h?",max-snippet:"+h:"")+(d?",max-image-preview:"+d:"")+(s?",noarchive":"")+(g?",unavailable_after:"+g:"")+(m?",noimageindex":"")+(u?",max-video-preview:"+u:"")+(f?",notranslate":"")}if(o||n?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),t.push(i.a.createElement("meta",{key:"robots",name:"robots",content:(o?"noindex":"index")+","+(n?"nofollow":"follow")+r})),t.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(o?"noindex":"index")+","+(n?"nofollow":"follow")+r}))):(t.push(i.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+r})),t.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+r}))),e.description&&t.push(i.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(i.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){t.push(i.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(i.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(i.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(i.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(i.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(i.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var y=e.openGraph.type.toLowerCase();t.push(i.a.createElement("meta",{key:"og:type",property:"og:type",content:y})),"profile"===y&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(i.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(i.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(i.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(i.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===y&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"book:author:0"+a,property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(i.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(i.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"book:tag:0"+a,property:"book:tag",content:e}))}))):"article"===y&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(i.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(i.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(i.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"article:author:0"+a,property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(i.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"article:tag:0"+a,property:"article:tag",content:e}))}))):"video.movie"!==y&&"video.episode"!==y&&"video.tv_show"!==y&&"video.other"!==y||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,a){e.profile&&t.push(i.a.createElement("meta",{key:"video:actor:0"+a,property:"video:actor",content:e.profile})),e.role&&t.push(i.a.createElement("meta",{key:"video:actor:role:0"+a,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"video:director:0"+a,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"video:writer:0"+a,property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(i.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(i.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"video:tag:0"+a,property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(i.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&t.push(i.a.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||a})),(e.openGraph.description||e.description)&&t.push(i.a.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"og:image:0"+a,property:"og:image",content:e.url})),e.alt&&t.push(i.a.createElement("meta",{key:"og:image:alt0"+a,property:"og:image:alt",content:e.alt})),e.width?t.push(i.a.createElement("meta",{key:"og:image:width0"+a,property:"og:image:width",content:e.width.toString()})):l.defaultOpenGraphImageWidth&&t.push(i.a.createElement("meta",{key:"og:image:width0"+a,property:"og:image:width",content:l.defaultOpenGraphImageWidth.toString()})),e.height?t.push(i.a.createElement("meta",{key:"og:image:height"+a,property:"og:image:height",content:e.height.toString()})):l.defaultOpenGraphImageHeight&&t.push(i.a.createElement("meta",{key:"og:image:height"+a,property:"og:image:height",content:l.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"og:video:0"+a,property:"og:video",content:e.url})),e.alt&&t.push(i.a.createElement("meta",{key:"og:video:alt0"+a,property:"og:video:alt",content:e.alt})),e.width?t.push(i.a.createElement("meta",{key:"og:video:width0"+a,property:"og:video:width",content:e.width.toString()})):l.defaultOpenGraphVideoWidth&&t.push(i.a.createElement("meta",{key:"og:video:width0"+a,property:"og:video:width",content:l.defaultOpenGraphVideoWidth.toString()})),e.height?t.push(i.a.createElement("meta",{key:"og:video:height"+a,property:"og:video:height",content:e.height.toString()})):l.defaultOpenGraphVideoHeight&&t.push(i.a.createElement("meta",{key:"og:video:height"+a,property:"og:video:height",content:l.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&t.push(i.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(i.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(i.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){t.push(i.a.createElement("meta",Object.assign({key:e.name||e.property||e.httpEquiv},e)))})),t},h=function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.titleTemplate,o=e.defaultTitle,r=e.dangerouslySetAllPagesToNoIndex,p=void 0!==r&&r,l=e.dangerouslySetAllPagesToNoFollow,h=void 0!==l&&l,d=e.description,u=e.canonical,s=e.facebook,m=e.openGraph,f=e.additionalMetaTags,g=e.twitter,y=e.defaultOpenGraphImageWidth,v=e.defaultOpenGraphImageHeight,G=e.defaultOpenGraphVideoWidth,k=e.defaultOpenGraphVideoHeight,b=e.mobileAlternate,w=e.languageAlternates;return i.a.createElement(n.a,null,c({title:t,titleTemplate:a,defaultTitle:o,dangerouslySetAllPagesToNoIndex:p,dangerouslySetAllPagesToNoFollow:h,description:d,canonical:u,facebook:s,openGraph:m,additionalMetaTags:f,twitter:g,defaultOpenGraphImageWidth:y,defaultOpenGraphImageHeight:v,defaultOpenGraphVideoWidth:G,defaultOpenGraphVideoHeight:k,mobileAlternate:b,languageAlternates:w}))},t}(r.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.noindex,o=void 0!==a&&a,r=e.nofollow,p=e.robotsProps,l=e.description,h=e.canonical,d=e.openGraph,u=e.facebook,s=e.twitter,m=e.additionalMetaTags,f=e.titleTemplate,g=e.mobileAlternate,y=e.languageAlternates;return i.a.createElement(n.a,null,c({title:t,noindex:o,nofollow:r,robotsProps:p,description:l,canonical:h,facebook:u,openGraph:d,additionalMetaTags:m,twitter:s,titleTemplate:f,mobileAlternate:g,languageAlternates:y}))},t}(r.Component)},Xuae:function(e,t,a){"use strict";var o=a("mPvQ"),n=a("/GRZ"),r=a("i2R6"),i=(a("qXWd"),a("48fX")),p=a("tCBg"),l=a("T0f4");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,o=l(e);if(t){var n=l(this).constructor;a=Reflect.construct(o,arguments,n)}else a=o.apply(this,arguments);return p(this,a)}}t.__esModule=!0,t.default=void 0;var h=a("q1tI"),d=function(e){i(a,e);var t=c(a);function a(e){var r;return n(this,a),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(o(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(a,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),a}(h.Component);t.default=d},g4pe:function(e,t,a){e.exports=a("8Kt/")},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,a){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var n=((o=a("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=n},mPvQ:function(e,t,a){var o=a("5fIB"),n=a("rlHP"),r=a("KckH"),i=a("kG2m");e.exports=function(e){return o(e)||n(e)||r(e)||i()}},oI91:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}}]);