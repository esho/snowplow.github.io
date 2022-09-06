"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[29940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=o,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},31e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(54358);const i={title:"Creating your own plugins",date:"2021-04-12",sidebar_position:750},l=void 0,c={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/creating-your-own-plugins/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/creating-your-own-plugins/index",title:"Creating your own plugins",description:"Example",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/creating-your-own-plugins/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/creating-your-own-plugins",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/creating-your-own-plugins/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/creating-your-own-plugins/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/creating-your-own-plugins/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:750,frontMatter:{title:"Creating your own plugins",date:"2021-04-12",sidebar_position:750},sidebar:"defaultSidebar",previous:{title:"Adding plugins to your tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/adding-plugins-to-your-tracker/"},next:{title:"Ad Tracking",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/ad-tracking/"}},s={},p=[{value:"Example",id:"example",level:3}],u={toc:p};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{mdxType:"Block7289"}),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { newTracker } from '@snowplow/browser-tracker'; \n\nconst myPlugin = {\n  contexts: () => {\n    return [\n      {\n        schema: 'iglu:com.acme/my_context/jsonschema/1-0-0',\n        data: {\n          property: 'value',\n        },\n      },\n    ];\n  },\n};\n\nnewTracker('sp1', '{{COLLECTOR_URL}}', { plugins: [myPlugin] });\n")))}g.isMDXComponent=!0},54358:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={toc:[{value:"Plugin Interface",id:"plugin-interface",level:2},{value:"Plugin Templates",id:"plugin-templates",level:2},{value:"Simple Context Plugin Template",id:"simple-context-plugin-template",level:3},{value:"Advanced Plugin Template",id:"advanced-plugin-template",level:3},{value:"Inline Plugins",id:"inline-plugins",level:2}]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Snowplow JavaScript Trackers v3 allow extension via plugins. There a number of official Snowplow plugins, but we also encourage building your own. You can either include them directly in your codebase or tag management tool, or you could publish them to npm as public packages that the whole community can use."),(0,o.kt)("h2",{id:"plugin-interface"},"Plugin Interface"),(0,o.kt)("p",null,"The Browser Plugins conform to a common interface which describes a number of functions you can optionally use to create your own plugin."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"interface BrowserPlugin {\n /**\n Called when the plugin is initialised during the Tracker construction\n *\n @remark\n Use to capture the specific Tracker instance for each instance of a Browser Plugin\n */\n activateBrowserPlugin?: (tracker: BrowserTracker) => void;\n\n /**\n Called when the plugin is initialised during the trackerCore construction\n *\n @remark\n Use to capture the specific core instance for each instance of a core plugin\n */;\n activateCorePlugin?: (core: TrackerCore) => void;\n\n /**\n Called just before the trackerCore callback fires\n @param payloadBuilder - The payloadBuilder which will be sent to the callback, can be modified\n */\n beforeTrack?: (payloadBuilder: PayloadBuilder) => void;\n\n /**\n Called just after the trackerCore callback fires\n @param payload - The final built payload\n */\n afterTrack?: (payload: Payload) => void;\n\n /**\n Called when constructing the context for each event\n Useful for adding additional context to events\n */\n contexts?: () => SelfDescribingJson[];\n\n /**\n Passed a logger instance which can be used to send log information\n to the active logger\n */\n logger?: (logger: Logger) => void;\n} \n")),(0,o.kt)("h2",{id:"plugin-templates"},"Plugin Templates"),(0,o.kt)("p",null,"If you'd like to build your own plugins and publish them on NPM then we've created two template repositories to help you get started."),(0,o.kt)("h3",{id:"simple-context-plugin-template"},"Simple Context Plugin Template"),(0,o.kt)("p",null,"This template shows how you can add a context to every single event that is emitted from a tracker which is using this plugin. The template is written in TypeScript, so you'll need to build it before using it and/or publishing. We've also included some example Jest tests to help you write tests for your plugin."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-browser-plugin-simple-template"},"https://github.com/snowplow-incubator/snowplow-browser-plugin-simple-template")),(0,o.kt)("p",null,"The README should guide you through building, testing, publishing and using a plugin built with this template."),(0,o.kt)("h3",{id:"advanced-plugin-template"},"Advanced Plugin Template"),(0,o.kt)("p",null,"This template shows how you can use all the available functions of a plugin, as well as how to make the plugin only repond to certain trackers in a multi-tracker setup. The template is written in TypeScript, so you'll need to build it before using it and/or publishing. We've also included some example Jest tests to help you write tests for your plugin."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-browser-plugin-advanced-template"},"https://github.com/snowplow-incubator/snowplow-browser-plugin-advanced-template")),(0,o.kt)("p",null,"The README should guide you through building, testing, publishing and using a plugin built with this template."),(0,o.kt)("h2",{id:"inline-plugins"},"Inline Plugins"),(0,o.kt)("p",null,"You might not want to publish a package for your plugin but directly include the code in your codebase. In that case, you can pass the plugin directly into the tracker when you call ",(0,o.kt)("inlineCode",{parentName:"p"},"newTracker"),"."))}i.isMDXComponent=!0}}]);