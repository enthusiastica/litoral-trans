(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{3690:function(t,e,n){"use strict";var r=n(5893);e.Z=function(t){var e=t.children,n=t.className,c=void 0===n?"":n;return(0,r.jsx)("p",{className:"break-word max-w-prose ".concat(c),children:e})}},2392:function(t,e,n){"use strict";var r=n(5893);e.Z=function(t){var e=t.data,n=t.type;return(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:e.replace(/\n\s*/g,"")},type:n})}},7882:function(t,e,n){"use strict";var r=n(5893);e.Z=function(t){var e=t.children,n=t.width,c=t.className,i=void 0===c?"":c,s={};return void 0!==n&&(s.width=n),(0,r.jsx)("section",{className:"py-12 px-4 sm:px-8 w-full ".concat(i),style:s,children:(0,r.jsx)("div",{className:"flex flex-col items-center container m-auto",children:e})})}},7940:function(t,e,n){"use strict";var r=n(5893);e.Z=function(t){var e=t.children,n=t.className,c=void 0===n?"":n;return(0,r.jsx)("div",{className:"font-medium font-primary text-secondary-lighter min-h-screen min-w-full ".concat(c),children:e})}},2164:function(t,e,n){"use strict";var r=n(5893),c=n(9583),i=n(3690);e.Z=function(t){var e=t.className,n=void 0===e?"":e;return(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center font-primary ".concat(n),children:[(0,r.jsxs)("div",{className:"lg:border-b lg:border-secondary-lighter font-bold text-xl sm:text-2xl md:text-3xl flex items-center lg:pb-2",children:[(0,r.jsx)(c.C5q,{className:"inline-block mr-2"}),"Litoral Trans"]}),(0,r.jsx)(i.Z,{className:"hidden lg:block text-md pt-1",children:"Servicio de Transporte"})]})}},4587:function(t,e,n){"use strict";var r=n(5893),c=n(7940),i=n(7798);e.Z=function(t){var e=t.title,n=t.description,s=t.path,a=t.children,o=t.className,l=void 0===o?"":o;return(0,r.jsxs)(c.Z,{className:l,children:[(0,r.jsx)(i.Z,{title:e,description:n,path:s,noindex:!0}),a]})}},7798:function(t,e,n){"use strict";var r=n(5893),c=n(2962),i=n(9008),s=n(2392);e.Z=function(t){var e=t.title,n=t.description,a=t.path,o=t.structuredData,l=t.noindex;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.PB,{title:e,description:n,noindex:l,openGraph:{type:"website",url:"https://".concat("litoral-trans.com.ar","/").concat(a),locale:"".concat("es","_").concat("AR"),title:e,site_name:"Litoral Trans",description:n,images:[600,1080].map((function(t){return{url:"https://".concat("litoral-trans.com.ar","/static/images/brand/preview-").concat(t,".png"),width:t,height:t,alt:"".concat("Litoral Trans"," | ").concat("Servicio de Transporte")}}))},twitter:{cardType:"summary"}}),o?(0,r.jsx)(i.default,{children:(0,r.jsx)(s.Z,{data:JSON.stringify(o),type:"application/ld+json"})}):null]})}},5110:function(t,e,n){"use strict";n.r(e);var r=n(5893),c=n(2164),i=n(4587),s=n(3690),a=n(7882);e.default=function(){return(0,r.jsx)(i.Z,{title:"El contenido no existe",description:"El contenido que est\xe1 buscando no existe",path:"404",className:"bg-primary",children:(0,r.jsxs)(a.Z,{className:"flex flex-col items-center justify-center h-screen w-screen",children:[(0,r.jsx)(c.Z,{className:"pb-8"}),(0,r.jsx)(s.Z,{className:"text-center",children:"El contenido que est\xe1 buscando no existe."})]})})}},9014:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(5110)}])},4405:function(t,e,n){"use strict";n.d(e,{w_:function(){return l}});var r=n(7294),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(c),s=function(){return(s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var c in e=arguments[n])Object.prototype.hasOwnProperty.call(e,c)&&(t[c]=e[c]);return t}).apply(this,arguments)},a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(t);c<r.length;c++)e.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]])}return n};function o(t){return t&&t.map((function(t,e){return r.createElement(t.tag,s({key:e},t.attr),o(t.child))}))}function l(t){return function(e){return r.createElement(u,s({attr:s({},t.attr)},e),o(t.child))}}function u(t){var e=function(e){var n,c=t.attr,i=t.size,o=t.title,l=a(t,["attr","size","title"]),u=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,c,l,{className:n,style:s(s({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(t){return e(t)})):e(c)}}},function(t){t.O(0,[774,445,317],(function(){return e=9014,t(t.s=e);var e}));var e=t.O();_N_E=e}]);