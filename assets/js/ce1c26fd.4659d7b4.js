"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[97573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Tutorial: Integrating Javascript tags with Enhanced E-commerce",date:"2021-03-26",sidebar_position:50},i=void 0,c={unversionedId:"tutorials/tutorial-integrating-javascript-tags-with-enhanced-e-commerce/index",id:"tutorials/tutorial-integrating-javascript-tags-with-enhanced-e-commerce/index",title:"Tutorial: Integrating Javascript tags with Enhanced E-commerce",description:"Warning: This functionality depends on Snowplow JavaScript Tracker v2.6.0 or above.",source:"@site/docs/tutorials/tutorial-integrating-javascript-tags-with-enhanced-e-commerce/index.md",sourceDirName:"tutorials/tutorial-integrating-javascript-tags-with-enhanced-e-commerce",slug:"/tutorials/tutorial-integrating-javascript-tags-with-enhanced-e-commerce/",permalink:"/docs/tutorials/tutorial-integrating-javascript-tags-with-enhanced-e-commerce/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/tutorials/tutorial-integrating-javascript-tags-with-enhanced-e-commerce/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:50,frontMatter:{title:"Tutorial: Integrating Javascript tags with Enhanced E-commerce",date:"2021-03-26",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Tutorial: basic tracking design and setup",permalink:"/docs/tutorials/tutorial-basic-tracking-design-and-setup/"},next:{title:"Tutorial: Getting started with Looker",permalink:"/docs/tutorials/tutorial-getting-started-with-looker/"}},s={},l=[{value:"1. Overview",id:"1-overview",level:3},{value:"2. Creating the Data Layer Variable",id:"2-creating-the-data-layer-variable",level:3},{value:"3. Creating the trigger",id:"3-creating-the-trigger",level:3},{value:"4. Writing the JavaScript",id:"4-writing-the-javascript",level:3},{value:"5. Creating the tag",id:"5-creating-the-tag",level:3}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning: This functionality depends on Snowplow JavaScript Tracker v2.6.0 or above"),"."),(0,r.kt)("p",null,"Please visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/tracking-specific-events/#Enhanced_Ecommerce_tracking"},"technical documentation")," to see example use of the Enhanced E-commerce functions."),(0,r.kt)("h3",{id:"1-overview"},"1","."," Overview"),(0,r.kt)("p",null,"This guide will show you how to configure Google Tag Manager to load the Snowplow JavaScript Tracker and send Enhanced E-commerce data to Snowplow as well as Google without changing any of your calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"dataLayer.push"),". We will assume that you have already implemented the GTM ",(0,r.kt)("inlineCode",{parentName:"p"},"dataLayer")," for Enhanced E-commerce as described in the Enhanced E-commerce (UA) Developer Guide."),(0,r.kt)("p",null,"We also assume that any ecommerce-related call to ",(0,r.kt)("inlineCode",{parentName:"p"},"dataLayer.push"),' which does not contain an "event" field is made before Google Tag Manager loads, as described ',(0,r.kt)("a",{parentName:"p",href:"http://www.simoahava.com/analytics/ecommerce-tips-google-tag-manager/#tip1"},"here"),"."),(0,r.kt)("p",null,"If you are sending very large ecommerce events containing lots of impressions, the size of your events may exceed maximum querystring size for GET requests. In this case we recommend configuring the tracker to use POST instead as described ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/tracker-setup/initializing-a-tracker-2/"},"here"),"."),(0,r.kt)("h3",{id:"2-creating-the-data-layer-variable"},"2","."," Creating the Data Layer Variable"),(0,r.kt)("p",null,'In the Variables tab, create a Data Layer Variable. Set the name of this variable to "ecommerce". This variable will hold all ecommerce-related data and will be updated when you call ',(0,r.kt)("inlineCode",{parentName:"p"},"dataLayer.push"),' with a JSON containing the key "ecommerce".'),(0,r.kt)("h3",{id:"3-creating-the-trigger"},"3","."," Creating the trigger"),(0,r.kt)("p",null,"The trigger will detect ecommerce data pushed into the data layer and cause the main tag to fire."),(0,r.kt)("p",null,'In the Triggers tab, Create a new trigger named "Enhanced Ecommerce". In the "Choose Event" section, choose "Custom Event". Set "Fire On" to something like the string ',(0,r.kt)("inlineCode",{parentName:"p"},"gtm.dom|checkout|checkoutOption|productClick|addToCart|removeFromCart|promotionClick|purchase"),' and check the "Use regex matching" box.'),(0,r.kt)("p",null,'The regex should consist of "gtm.dom" together with every string which you set as a the value of the "event" key in the enhanced ecommerce objects you push to the data layer, separated by the "|" pipe character.'),(0,r.kt)("h3",{id:"4-writing-the-javascript"},"4","."," Writing the JavaScript"),(0,r.kt)("p",null,"Your tag will fire both when the page loads and also every time an ecommerce event is pushed to the data layer."),(0,r.kt)("p",null,"When the page loads, the tag will load the Snowplow JavaScript Tracker, make the API calls necessary to set up tracking. If the data layer contains ecommerce data, like product impressions, the tag will also send that data to Snowplow."),(0,r.kt)("p",null,"Whenever ecommerce data is pushed to the data layer, the tag will fire again. It will not attempt to set up tracking again; instead it will send the ecommerce event to Snowplow."),(0,r.kt)("p",null,'The example script below will be used as the basis for your tag. There are some changes you should make to this script. In the example "SNOWPLOW',"_","NAME","_",'HERE" is used as the name of the Snowplow function. This is the global function used to make API calls to the Snowplow JavaScript Tracker. You should change this string to something unique so that if there is another Snowplow user on the page the namespaces will not collide. Similarly, you should change "MY',"_","COOKIE","_",'NAME" to a unique value. You should change "MY',"_",'COLLECTOR" to the URL of your Snowplow collector (minus the http/https scheme), for example "c.mydomain.com".'),(0,r.kt)("p",null,'You can also customize the part of the tag between the comments containing "!!!". The example below creates a tracker instance, sets page pings to fire every 10 seconds, and sends a page view event. See the ',(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/tracking-specific-events/"},"JavaScript Tracker page")," for more information on other tracking methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"<script>\n  // If this tag fires more than once (e.g. page view followed by ecommerce action),\n  // we don't want to repeat the trackPageView here\n  if (!window.SNOWPLOW_NAME_HERE) {\n    ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];\n    p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)\n    };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;\n    n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,\"script\",\"//cdn.jsdelivr.net/gh/snowplow/sp-js-assets@2.18.2/sp.js\",\"SNOWPLOW_NAME_HERE\"));\n\n    // !!! Customizable section starts\n    // Track page views, enable link clicks, and so on here\n\n    SNOWPLOW_NAME_HERE('newTracker', 'snplow1', 'MY_COLLECTOR', {\n      'appId': 'snowplowweb',\n      'cookieName': 'MY_COOKIE_NAME'\n    });\n\n    SNOWPLOW_NAME_HERE('enableActivityTracking', 10, 10);\n    SNOWPLOW_NAME_HERE('trackPageView');\n\n    // !!! Customizable section ends\n  }\n\n  var ecommerce = {{ecommerce}};\n  var actions = [\n    \"click\",\n    \"detail\",\n    \"add\",\n    \"remove\",\n    \"checkout\",\n    \"checkout_option\",\n    \"purchase\",\n    \"refund\",\n    \"promo_click\",\n    \"view\"\n  ];\n  if (ecommerce) {\n    sendEnhancedEcommerceEvent(ecommerce);\n  }\n\n  function sendEnhancedEcommerceEvent(ecommerce) {\n    var currencyCode = ecommerce.currencyCode;\n    var relevantActions = [];\n\n    for (var i = 0; i < actions.length; i++) {\n      if (ecommerce[actions[i]]) {\n        relevantActions.push(actions[i]);\n      }\n    }\n    if (ecommerce.impressions) {\n      for (var j = 0; j < ecommerce.impressions.length; j++) {\n        var impression = ecommerce.impressions[j];\n        SNOWPLOW_NAME_HERE('addEnhancedEcommerceImpressionContext',\n          impression.id,\n          impression.name,\n          impression.list,\n          impression.brand,\n          impression.category,\n          impression.variant,\n          impression.position,\n          impression.price,\n          currencyCode\n        );\n      }\n    }\n    if (ecommerce.promoView) {\n      for (var l = 0; l < ecommerce.promoView.promotions.length; l++) {\n        var promo = ecommerce.promoView.promotions[l];\n        SNOWPLOW_NAME_HERE('addEnhancedEcommercePromoContext',\n          promo.id,\n          promo.name,\n          promo.creative,\n          promo.position,\n          currencyCode\n        );\n      }\n    }\n    if (relevantActions.length === 0) {\n      SNOWPLOW_NAME_HERE('trackEnhancedEcommerceAction', 'view');\n    } else {\n      for (var m = 0; m < relevantActions.length; m++) {\n        var relevantAction = relevantActions[m];\n        if (ecommerce[relevantAction].products) {\n          for (var k = 0; k < ecommerce[relevantAction].products.length; k++) {\n            var product = ecommerce[relevantAction].products[k];\n            SNOWPLOW_NAME_HERE('addEnhancedEcommerceProductContext',\n              product.id,\n              product.name,\n              product.list,\n              product.brand,\n              product.category,\n              product.variant,\n              product.price,\n              product.quantity,\n              product.coupon,\n              product.position,\n              currencyCode\n            );\n          }\n        }\n        if (ecommerce[relevantAction].actionField) {\n          var actionObject = ecommerce[relevantAction].actionField;\n          SNOWPLOW_NAME_HERE('addEnhancedEcommerceActionContext',\n            actionObject.id,\n            actionObject.affiliation,\n            actionObject.revenue,\n            actionObject.tax,\n            actionObject.shipping,\n            actionObject.coupon,\n            actionObject.list,\n            actionObject.step,\n            actionObject.option,\n            currencyCode\n          );\n        }\n        SNOWPLOW_NAME_HERE('trackEnhancedEcommerceAction', relevantAction);\n      }\n    }\n  }\n<\/script>\n")),(0,r.kt)("h3",{id:"5-creating-the-tag"},"5","."," Creating the tag"),(0,r.kt)("p",null,'In the Tags tab, create a new tag. Name it something like "Enhanced Ecommerce Pageview". In the "Choose Product" section, select "Custom HTML Tag". Copy and paste the JavaScript you wrote in the previous section into the textbox.'),(0,r.kt)("p",null,'From the Fire On section, choose "More", then select the "Enhanced Ecommerce" trigger you created earlier and save.'))}m.isMDXComponent=!0}}]);