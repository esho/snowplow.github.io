"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[58620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Understanding events and entities",date:"2020-02-13",sidebar_position:20},o=void 0,s={unversionedId:"understanding-tracking-design/understanding-events-entities/index",id:"understanding-tracking-design/understanding-events-entities/index",title:"Understanding events and entities",description:"Snowplow\xa0is an\xa0event collection platform. Once you have set up one or more\xa0Snowplow trackers, every time an event occurs, Snowplow will generate a packet of data to describe the event and send that event into your\xa0Snowplow data pipeline.",source:"@site/docs/understanding-tracking-design/understanding-events-entities/index.md",sourceDirName:"understanding-tracking-design/understanding-events-entities",slug:"/understanding-tracking-design/understanding-events-entities/",permalink:"/docs/understanding-tracking-design/understanding-events-entities/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/understanding-tracking-design/understanding-events-entities/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:20,frontMatter:{title:"Understanding events and entities",date:"2020-02-13",sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Structuring your data with schemas",permalink:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},next:{title:"Out-of-the-box vs custom events",permalink:"/docs/understanding-tracking-design/out-of-the-box-vs-custom-events-and-entities/"}},l={},p=[{value:"What is an event?",id:"what-is-an-event",level:2},{value:"What is an entity?",id:"what-is-an-entity",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Snowplow"),"\xa0is an\xa0",(0,r.kt)("em",{parentName:"p"},"event collection platform"),". Once you have set up one or more\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/"},"Snowplow trackers"),", every time an event occurs, Snowplow will generate a packet of data to describe the event and send that event into your\xa0Snowplow data pipeline."),(0,r.kt)("h2",{id:"what-is-an-event"},"What is an event?"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"event")," signifies an action for which we gave a specific name and we are interested in a set of data characterising the event. For example:"),(0,r.kt)("p",null,"An\xa0",(0,r.kt)("strong",{parentName:"p"},"event"),"\xa0is something that occurred in a particular point in time. Examples of events include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Load a web page"),(0,r.kt)("li",{parentName:"ul"},"Add an item to basket"),(0,r.kt)("li",{parentName:"ul"},"Enter a destination"),(0,r.kt)("li",{parentName:"ul"},"Check a balance"),(0,r.kt)("li",{parentName:"ul"},"Search for an item"),(0,r.kt)("li",{parentName:"ul"},"Share a video")),(0,r.kt)("h2",{id:"what-is-an-entity"},"What is an entity?"),(0,r.kt)("p",null,"An\xa0",(0,r.kt)("strong",{parentName:"p"},"entity"),"\xa0(aka context) describes the setting in which an\xa0",(0,r.kt)("strong",{parentName:"p"},"event"),"\xa0has taken place."),(0,r.kt)("p",null,"When an\xa0",(0,r.kt)("strong",{parentName:"p"},"event"),"\xa0occurs, it generally involves a number of\xa0",(0,r.kt)("strong",{parentName:"p"},"entities")," (aka contexts), and takes place in a particular setting. Those entities give the event extra context."),(0,r.kt)("p",null,"Let's take the example of a search event. It may have the following entities associated with it:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A user entity, who performed the search"),(0,r.kt)("li",{parentName:"ol"},"A web page in which the event occurred"),(0,r.kt)("li",{parentName:"ol"},"A variation on the web page that was part of an A/B test"),(0,r.kt)("li",{parentName:"ol"},"A set of products that were returned from the search")),(0,r.kt)("p",null,"All the above are examples of the context in which the event happened, described by entities."),(0,r.kt)("p",null,'What makes contexts interesting is that they are common across multiple different event types. For example, the following events for a retailer will all involve a "product" context:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View product"),(0,r.kt)("li",{parentName:"ul"},"Select product"),(0,r.kt)("li",{parentName:"ul"},"Like product"),(0,r.kt)("li",{parentName:"ul"},"Add product to basket"),(0,r.kt)("li",{parentName:"ul"},"Purchase product"),(0,r.kt)("li",{parentName:"ul"},"Review product"),(0,r.kt)("li",{parentName:"ul"},"Recommend product")),(0,r.kt)("p",null,"Our retailer might want to describe product using a number of fields including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SKU"),(0,r.kt)("li",{parentName:"ul"},"Name"),(0,r.kt)("li",{parentName:"ul"},"Unit price"),(0,r.kt)("li",{parentName:"ul"},"Category"),(0,r.kt)("li",{parentName:"ul"},"Tags")),(0,r.kt)("p",null,"Rather than define all the set of product-related fields for all the different product-related events in their respective schemas, they would define the product entity with a single schema, and pass this as a context with any product related event."),(0,r.kt)("p",null,"Contexts provide a convenient way in Snowplow to schema common entities once, and then use those schemas across all the different events where those entities are relevant."),(0,r.kt)("p",null,"Moreover,\xa0",(0,r.kt)("em",{parentName:"p"},"multiple"),"\xa0contexts of either different or the same type can be sent with a single event. For example, you could send multiple product impressions (one for each product) with a page view event (say, if a user has loaded a catalogue page) or a transaction event (if a user has multiple line items in a transaction)."))}d.isMDXComponent=!0}}]);