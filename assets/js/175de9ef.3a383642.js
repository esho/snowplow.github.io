"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[15504],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),A=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=A(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=A(a),d=n,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(g,l(l({ref:t},s),{},{components:a})):r.createElement(g,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var A=2;A<o;A++)l[A]=a[A];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52991:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(67294),n=a(86010),o=a(53438),l=a(39960),i=a(13919),c=a(95999);const A="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:a}=e;return r.createElement(l.Z,{href:t,className:(0,n.Z)("card padding--lg",A)},a)}function d(e){let{href:t,icon:a,title:o,description:l}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,n.Z)("text--truncate",s),title:o},a," ",o),l&&r.createElement("p",{className:(0,n.Z)("text--truncate",p),title:l},l))}function g(e){let{item:t}=e;const a=(0,o.Wl)(t);return a?r.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function w(e){var t;let{item:a}=e;const n=(0,i.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.xz)(null!=(t=a.docId)?t:void 0);return r.createElement(d,{href:a.href,icon:n,title:a.label,description:null==l?void 0:l.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(w,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){let{className:t}=e;const a=(0,o.jA)();return r.createElement(N,{items:a.items,className:t})}function N(e){const{items:t,className:a}=e;if(!t)return r.createElement(h,e);const l=(0,o.MN)(t);return r.createElement("section",{className:(0,n.Z)("row",a)},l.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},31492:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);function n(e){return"Actively Maintained"===e.badgeType?r.createElement("a",{href:"/docs/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Actively%20Maintained&color=6638b8&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Actively Maintained",title:"Actively Maintained badge",className:"img_ev3q"})):"Maintained"===e.badgeType?r.createElement("a",{href:"/docs/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Maintained&color=9e62dd&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Maintained",title:"Maintained badge",className:"img_ev3q"})):"Early Release"===e.badgeType?r.createElement("a",{href:"/docs/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Early%20Release&color=014477&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Early Release",title:"Early Release badge",className:"img_ev3q"})):"Unsupported"===e.badgeType?r.createElement("a",{href:"/docs/collecting-data/collecting-from-own-applications/tracker-maintenance-classification"},r.createElement("img",{loading:"lazy",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Unsupported&color=24292e&labelColor=lightgrey&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Unsupported",title:"Unsupported badge",className:"img_ev3q"})):"Snowplow Tracker Release"===e.badgeType?r.createElement("img",{src:"https://img.shields.io/packagist/v/snowplow/snowplow-tracker",alt:"Latest version"}):"React Native Tracker Release"===e.badgeType?r.createElement("a",{href:"https://www.npmjs.com/package/@snowplow/react-native-tracker"},r.createElement("img",{src:"https://img.shields.io/npm/v/@snowplow/react-native-tracker",alt:"Latest version"})):"Pypi Tracker Release"===e.badgeType?r.createElement("a",{href:"https://pypi.org/project/snowplow-tracker/"},r.createElement("img",{src:"https://img.shields.io/pypi/v/snowplow-tracker",alt:"Latest version"})):"Snowplow Tracker PHP Release"===e.badgeType?r.createElement("img",{src:"https://img.shields.io/packagist/php-v/snowplow/snowplow-tracker",alt:"PHP Version"}):"Snowplow Tracker React Native Release"===e.badgeType?r.createElement("a",{href:"https://www.npmjs.com/package/@snowplow/react-native-tracker"},r.createElement("img",{src:"https://img.shields.io/npm/dependency-version/@snowplow/react-native-tracker/peer/react-native",alt:"React Native Version"})):"Snowplow Tracker Pypi Release"===e.badgeType?r.createElement("a",{href:"https://pypi.org/project/snowplow-tracker/"},r.createElement("img",{src:"https://img.shields.io/pypi/pyversions/snowplow-tracker",alt:"React Native Version"})):void 0}},29406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>A,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(31492),l=a(52991);const i={title:"Google AMP Tracker",date:"2020-02-25",sidebar_position:150},c=void 0,A={unversionedId:"collecting-data/collecting-from-own-applications/google-amp-tracker/index",id:"collecting-data/collecting-from-own-applications/google-amp-tracker/index",title:"Google AMP Tracker",description:"",source:"@site/docs/collecting-data/collecting-from-own-applications/google-amp-tracker/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/google-amp-tracker",slug:"/collecting-data/collecting-from-own-applications/google-amp-tracker/",permalink:"/docs/collecting-data/collecting-from-own-applications/google-amp-tracker/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/google-amp-tracker/index.md",tags:[],version:"current",lastUpdatedAt:1662741920,formattedLastUpdatedAt:"Sep 9, 2022",sidebarPosition:150,frontMatter:{title:"Google AMP Tracker",date:"2020-02-25",sidebar_position:150},sidebar:"defaultSidebar",previous:{title:"Example Roku app with Snowplow tracking",permalink:"/docs/collecting-data/collecting-from-own-applications/roku-tracker/example-app/"},next:{title:"Google AMP (1.0.3)",permalink:"/docs/collecting-data/collecting-from-own-applications/google-amp-tracker/google-amp-1-0-0-2/"}},s={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{badgeType:"Maintained",mdxType:"Badges"}),(0,n.kt)(l.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);