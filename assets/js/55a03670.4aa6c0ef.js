"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[35371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),i=n(54358);const o={title:"Creating your own plugins",date:"2021-04-12",sidebar_position:500},l=void 0,c={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/creating-your-own-plugins/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/creating-your-own-plugins/index",title:"Creating your own plugins",description:"Example",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/creating-your-own-plugins/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/creating-your-own-plugins",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/creating-your-own-plugins/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/creating-your-own-plugins/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/creating-your-own-plugins/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:500,frontMatter:{title:"Creating your own plugins",date:"2021-04-12",sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/"},next:{title:"Ad Tracking",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/ad-tracking/"}},p={},s=[{value:"Example",id:"example",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.ZP,{mdxType:"Block7289"}),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const myPlugin = {\n  SimpleContextPlugin: function () {\n    return {\n      contexts: () => {\n        return [\n          {\n            schema: 'iglu:com.acme/my_context/jsonschema/1-0-0',\n            data: {\n              property: 'value',\n            },\n          },\n        ];\n      },\n    };\n  },\n  trackMyEvent: function (event) {\n    // Extend the API and track something here (see advanced-template above)\n    console.log(event);\n  }\n};\n\nwindow.snowplow('addPlugin:sp1', myPlugin, 'SimpleContextPlugin');\nwindow.snowplow('trackMyEvent', { eventProp: 'value' }); );\n")))}d.isMDXComponent=!0},54358:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={toc:[{value:"Plugin Interface",id:"plugin-interface",level:2},{value:"Plugin Templates",id:"plugin-templates",level:2},{value:"Simple Context Plugin Template",id:"simple-context-plugin-template",level:3},{value:"Advanced Plugin Template",id:"advanced-plugin-template",level:3},{value:"Inline Plugins",id:"inline-plugins",level:2}]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Snowplow JavaScript Trackers v3 allow extension via plugins. There a number of official Snowplow plugins, but we also encourage building your own. You can either include them directly in your codebase or tag management tool, or you could publish them to npm as public packages that the whole community can use."),(0,r.kt)("h2",{id:"plugin-interface"},"Plugin Interface"),(0,r.kt)("p",null,"The Browser Plugins conform to a common interface which describes a number of functions you can optionally use to create your own plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"interface BrowserPlugin {\n /**\n Called when the plugin is initialised during the Tracker construction\n *\n @remark\n Use to capture the specific Tracker instance for each instance of a Browser Plugin\n */\n activateBrowserPlugin?: (tracker: BrowserTracker) => void;\n\n /**\n Called when the plugin is initialised during the trackerCore construction\n *\n @remark\n Use to capture the specific core instance for each instance of a core plugin\n */;\n activateCorePlugin?: (core: TrackerCore) => void;\n\n /**\n Called just before the trackerCore callback fires\n @param payloadBuilder - The payloadBuilder which will be sent to the callback, can be modified\n */\n beforeTrack?: (payloadBuilder: PayloadBuilder) => void;\n\n /**\n Called just after the trackerCore callback fires\n @param payload - The final built payload\n */\n afterTrack?: (payload: Payload) => void;\n\n /**\n Called when constructing the context for each event\n Useful for adding additional context to events\n */\n contexts?: () => SelfDescribingJson[];\n\n /**\n Passed a logger instance which can be used to send log information\n to the active logger\n */\n logger?: (logger: Logger) => void;\n} \n")),(0,r.kt)("h2",{id:"plugin-templates"},"Plugin Templates"),(0,r.kt)("p",null,"If you'd like to build your own plugins and publish them on NPM then we've created two template repositories to help you get started."),(0,r.kt)("h3",{id:"simple-context-plugin-template"},"Simple Context Plugin Template"),(0,r.kt)("p",null,"This template shows how you can add a context to every single event that is emitted from a tracker which is using this plugin. The template is written in TypeScript, so you'll need to build it before using it and/or publishing. We've also included some example Jest tests to help you write tests for your plugin."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-browser-plugin-simple-template"},"https://github.com/snowplow-incubator/snowplow-browser-plugin-simple-template")),(0,r.kt)("p",null,"The README should guide you through building, testing, publishing and using a plugin built with this template."),(0,r.kt)("h3",{id:"advanced-plugin-template"},"Advanced Plugin Template"),(0,r.kt)("p",null,"This template shows how you can use all the available functions of a plugin, as well as how to make the plugin only repond to certain trackers in a multi-tracker setup. The template is written in TypeScript, so you'll need to build it before using it and/or publishing. We've also included some example Jest tests to help you write tests for your plugin."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-browser-plugin-advanced-template"},"https://github.com/snowplow-incubator/snowplow-browser-plugin-advanced-template")),(0,r.kt)("p",null,"The README should guide you through building, testing, publishing and using a plugin built with this template."),(0,r.kt)("h2",{id:"inline-plugins"},"Inline Plugins"),(0,r.kt)("p",null,"You might not want to publish a package for your plugin but directly include the code in your codebase. In that case, you can pass the plugin directly into the tracker when you call ",(0,r.kt)("inlineCode",{parentName:"p"},"newTracker"),"."))}o.isMDXComponent=!0}}]);