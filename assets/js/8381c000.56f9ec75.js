"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[24518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={title:"Tutorial: E-commerce analytics",date:"2020-10-12",sidebar_position:40},i=void 0,l={unversionedId:"try-snowplow/recipes/recipe-ecommerce-analytics/index",id:"try-snowplow/recipes/recipe-ecommerce-analytics/index",title:"Tutorial: E-commerce analytics",description:"Introduction",source:"@site/docs/try-snowplow/recipes/recipe-ecommerce-analytics/index.md",sourceDirName:"try-snowplow/recipes/recipe-ecommerce-analytics",slug:"/try-snowplow/recipes/recipe-ecommerce-analytics/",permalink:"/docs/try-snowplow/recipes/recipe-ecommerce-analytics/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/try-snowplow/recipes/recipe-ecommerce-analytics/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:40,frontMatter:{title:"Tutorial: E-commerce analytics",date:"2020-10-12",sidebar_position:40},sidebar:"defaultSidebar",previous:{title:"Tutorial: Content analytics",permalink:"/docs/try-snowplow/recipes/recipe-content-analytics/"},next:{title:"Tutorial: Anonymous tracking",permalink:"/docs/try-snowplow/recipes/recipe-anonymous-tracking/"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"What you&#39;ll be doing",id:"what-youll-be-doing",level:2},{value:"Designing and implementing the <code>product</code> entity",id:"designing-and-implementing-the-product-entity",level:2},{value:"Designing the <code>product</code> entity",id:"designing-the-product-entity",level:4},{value:"Implementing the <code>product</code> entity",id:"implementing-the-product-entity",level:4},{value:"In the Javascript Tracker",id:"in-the-javascript-tracker",level:4},{value:"Via Google Tag Manager",id:"via-google-tag-manager",level:4},{value:"Designing and implementing the <code>cart_action</code> event",id:"designing-and-implementing-the-cart_action-event",level:2},{value:"Designing the <code>cart_action</code> event",id:"designing-the-cart_action-event",level:4},{value:"Implementing the <code>cart_action</code> event",id:"implementing-the-cart_action-event",level:4},{value:"Designing and implementing the <code>purchase</code> event",id:"designing-and-implementing-the-purchase-event",level:2},{value:"Designing the <code>purchase</code> event",id:"designing-the-purchase-event",level:4},{value:"Implementing the <code>purchase</code> event",id:"implementing-the-purchase-event",level:4},{value:"Example for a single product purchase",id:"example-for-a-single-product-purchase",level:4},{value:"Example for a multi-product purchase",id:"example-for-a-multi-product-purchase",level:4},{value:"Modeling the data you&#39;ve collected",id:"modeling-the-data-youve-collected",level:2},{value:"What does the model do?",id:"what-does-the-model-do",level:4},{value:"First generate the table:",id:"first-generate-the-table",level:4},{value:"And then view it:",id:"and-then-view-it",level:4},{value:"Let&#39;s break down what you&#39;ve done",id:"lets-break-down-what-youve-done",level:2},{value:"What you might want to do next",id:"what-you-might-want-to-do-next",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Snowplow empowers you to collect granular data from your e-commerce store. Specifically, you'll want to capture all types of product interactions, such as product views, add to carts, remove from carts and purchases. Aggregating these events into a table of one row per product will allow you to easily see how the different products are performing."),(0,o.kt)("h2",{id:"what-youll-be-doing"},"What you'll be doing"),(0,o.kt)("p",null,"You have already set up Snowplow\u2019s out of the box web tracking by instrumenting the Javascript Tracker in your application. This includes tracking ",(0,o.kt)("inlineCode",{parentName:"p"},"page_view")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"page_ping")," events."),(0,o.kt)("p",null,"To understand how people are engaging with your products, you\u2019ll want to make a couple of tracking additions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You\u2019ll want to be able to tie all of the events you are capturing to specific products, not just pages; to achieve this you'll attach a product entity to all of your product-related events. Learn more about Snowplow events and entities ",(0,o.kt)("a",{parentName:"li",href:"/docs/understanding-tracking-design/understanding-events-entities/"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"You'll want to extend this tracking to include cart actions and purchases; for this purpose, we've created a couple of custom events for you to instrument.")),(0,o.kt)("p",null,"You can then run a simple SQL query to model this data into a product table. This is straightforward as the information about the product is always captured in the same place across events, in the product entity."),(0,o.kt)("h2",{id:"designing-and-implementing-the-product-entity"},"Designing and implementing the ",(0,o.kt)("inlineCode",{parentName:"h2"},"product")," entity"),(0,o.kt)("h4",{id:"designing-the-product-entity"},"Designing the ",(0,o.kt)("inlineCode",{parentName:"h4"},"product")," entity"),(0,o.kt)("p",null,"We have already created a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"product")," entity for you, and uploaded its data structure to ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-resolver/"},"your Iglu server"),"."),(0,o.kt)("p",null,"Snowplow uses self-describing JSON schemas to structure events and entities so that they can be validated in the pipeline and loaded into tidy tables in the warehouse. You can learn more about these data structures ",(0,o.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"here"),", and about why we take this approach ",(0,o.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2020/01/24/re-thinking-the-structure-of-event-data/"},"here"),"."),(0,o.kt)("p",null,"While Try Snowplow only ships with a pre-designed set of custom events and entities required for the recipes, Snowplow BDP lets you create an unlimited number of your own via the ",(0,o.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/managing-data-structures/"},"Data Structures UI")," (and API)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"product")," entity has the following fields:"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Field")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Description")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Type")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Validation")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Required?"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name")),(0,o.kt)("td",null,"The name of the piece of content"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,(0,o.kt)("code",null,"maxLength: 255")),(0,o.kt)("td",null,"\u2705\xa0")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"price")),(0,o.kt)("td",null,"The current price of the product"),(0,o.kt)("td",null,"number"),(0,o.kt)("td",null,(0,o.kt)("code",null,"minimum: 0"),(0,o.kt)("br",null),(0,o.kt)("code",null,"maximum: 100000 multipleOf: 0.01")),(0,o.kt)("td",null,"\u2705")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"quantity")),(0,o.kt)("td",null,"The number of this product (used in basket events)"),(0,o.kt)("td",null,"integer"),(0,o.kt)("td",null,(0,o.kt)("code",null,"minimum: 0 maximum: 100000")),(0,o.kt)("td",null,"\u2705")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"category")),(0,o.kt)("td",null,"The category of the product"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,(0,o.kt)("code",null,"maxLength: 255")),(0,o.kt)("td",null,"\u274c")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sku")),(0,o.kt)("td",null,"The SKU for the product"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,(0,o.kt)("code",null,"maxLength: 255")),(0,o.kt)("td",null,"\u274c")))),(0,o.kt)("h4",{id:"implementing-the-product-entity"},"Implementing the ",(0,o.kt)("inlineCode",{parentName:"h4"},"product")," entity"),(0,o.kt)("h4",{id:"in-the-javascript-tracker"},"In the Javascript Tracker"),(0,o.kt)("p",null,"Add the product entity to your ",(0,o.kt)("inlineCode",{parentName:"p"},"page_view")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"page_ping")," events by editing your ",(0,o.kt)("inlineCode",{parentName:"p"},"trackPageView")," events to include the entity. Specifically, you'll update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"window.snowplow('trackPageView');\n")),(0,o.kt)("p",null,"to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'window.snowplow(\'trackPageView\', { \n   "context": [{\n      "schema": "iglu:com.trysnowplow/product/jsonschema/1-0-0",\n      "data": {\n         "name": "example_name",\n         "quantity": 1,\n         "price": 100,\n         "category": "example_category",\n         "sku": "example_sku"\n     }\n   }]\n});\n')),(0,o.kt)("h4",{id:"via-google-tag-manager"},"Via Google Tag Manager"),(0,o.kt)("p",null,"If you are using Google Tag Manager, you can add the variables like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'window.snowplow(\'trackPageView\', {\n   "context": [{\n      "schema": "iglu:com.trysnowplow/product/jsonschema/1-0-0",\n      "data": {\n         "name": "{{example_name_variable}}",\n     "quantity": {{example_quantity_variable}},\n     "price": {{example_price_variable}},\n     "category": "{{example_category_variable}}",\n     "sku": "{{example_sku_variable}}"\n      }\n   }]\n});\n')),(0,o.kt)("h2",{id:"designing-and-implementing-the-cart_action-event"},"Designing and implementing the ",(0,o.kt)("inlineCode",{parentName:"h2"},"cart_action")," event"),(0,o.kt)("h4",{id:"designing-the-cart_action-event"},"Designing the ",(0,o.kt)("inlineCode",{parentName:"h4"},"cart_action")," event"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cart_action")," event records actions that the user performs to their cart. In this simplified version you'll be recording a single property that describes whether an item was added or removed."),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Field")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Description")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Type")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Validation")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Required?"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"type")),(0,o.kt)("td",null,"The type of action taken by the user"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,(0,o.kt)("code",null,'enum: ["add", "remove'),'"]'),(0,o.kt)("td",null,"\u2705\xa0")))),(0,o.kt)("h4",{id:"implementing-the-cart_action-event"},"Implementing the ",(0,o.kt)("inlineCode",{parentName:"h4"},"cart_action")," event"),(0,o.kt)("p",null,"When you trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"cart_action")," event, you'll also want to attach the ",(0,o.kt)("inlineCode",{parentName:"p"},"product")," entity that we designed earlier to describe which product is being changed in the cart."),(0,o.kt)("p",null,"Instrument the ",(0,o.kt)("inlineCode",{parentName:"p"},"cart_action")," event when items are added to or removed from the cart on your website."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'window.snowplow(\'trackSelfDescribingEvent\', {\n   "event": {\n      "schema": "iglu:com.trysnowplow/cart_action/jsonschema/1-0-0",\n      "data": {\n         "type": "add" // or "remove"\n      }\n   },\n   "context": [{\n      "schema": "iglu:com.trysnowplow/product/jsonschema/1-0-0",\n      "data": {\n         "name": "example_name",\n         "quantity": 1,\n     "price": 100,\n     "category": "example_category",\n     "sku": "example_sku"\n      }\n   }]\n});\n')),(0,o.kt)("h2",{id:"designing-and-implementing-the-purchase-event"},"Designing and implementing the ",(0,o.kt)("inlineCode",{parentName:"h2"},"purchase")," event"),(0,o.kt)("h4",{id:"designing-the-purchase-event"},"Designing the ",(0,o.kt)("inlineCode",{parentName:"h4"},"purchase")," event"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"purchase")," event is a simple event that should be triggered when a purchase is made."),(0,o.kt)("p",null,"The event itself has no properties, but should be sent with one or more ",(0,o.kt)("inlineCode",{parentName:"p"},"product")," entities that describe which products were purchased."),(0,o.kt)("h4",{id:"implementing-the-purchase-event"},"Implementing the ",(0,o.kt)("inlineCode",{parentName:"h4"},"purchase")," event"),(0,o.kt)("p",null,"When you trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"purchase")," event, you'll want to attach one or more of the ",(0,o.kt)("inlineCode",{parentName:"p"},"product")," entity to describe what has been purchased."),(0,o.kt)("p",null,"Instrument the ",(0,o.kt)("inlineCode",{parentName:"p"},"purchase")," event when a purchase is made in your store."),(0,o.kt)("h4",{id:"example-for-a-single-product-purchase"},"Example for a single product purchase"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'window.snowplow(\'trackSelfDescribingEvent\', { \n   "event": {\n      "schema": "iglu:com.trysnowplow/purchase/jsonschema/1-0-0",\n      "data": {}\n   },\n   "context": [{\n      "schema": "iglu:com.trysnowplow/product/jsonschema/1-0-0",\n      "data": {\n         "name": "example_name",\n     "quantity": 1,\n     "price": 100,\n     "category": "example_category",\n     "sku": "example_sku"\n      }\n   }]\n});\n')),(0,o.kt)("h4",{id:"example-for-a-multi-product-purchase"},"Example for a multi-product purchase"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'window.snowplow(\'trackSelfDescribingEvent\', {\n   "event": {\n      "schema": "iglu:com.trysnowplow/purchase/jsonschema/1-0-0",\n      "data": {}\n   },\n   "context": [{\n      "schema": "iglu:com.trysnowplow/product/jsonschema/1-0-0",\n      "data": {\n         "name": "example_name",\n         "quantity": 1,\n         "price": 100,\n         "category": "example_category",\n         "sku": "example_sku"\n     }\n   },{\n      "schema": "iglu:com.trysnowplow/product/jsonschema/1-0-0",\n      "data": {\n         "name": "example_name_2",\n         "quantity": 1,\n         "price": 50,\n         "category": "example_category_2",\n         "sku": "example_sku_2"\n     }\n  }]\n});\n')),(0,o.kt)("h2",{id:"modeling-the-data-youve-collected"},"Modeling the data you've collected"),(0,o.kt)("h4",{id:"what-does-the-model-do"},"What does the model do?"),(0,o.kt)("p",null,"The tracking above captures events about the user's product purchasing journey, and attaches the context of which product was engaged with to all events you are firing. You can now start to get a better understanding of how your products are performing."),(0,o.kt)("p",null,"For this recipe you'll create a simple table describing product engagement. Specifically, for each product you'll aggregate the number of product views, add to carts, remove from carts and purchases, as well as the revenue earned."),(0,o.kt)("p",null,"Once you have collected some data with your new tracking you can run the following two queries in your tool of choice."),(0,o.kt)("h4",{id:"first-generate-the-table"},"First generate the table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE derived.products AS(\n\n    SELECT\n        p.category AS product_category, \n        p.name AS product_name, \n        p.sku AS product_sku,\n        p.price AS product_price,\n        SUM(CASE WHEN ev.event_name = 'page_view' THEN 1 ELSE 0 END) AS product_views,\n        SUM(CASE WHEN ev.event_name = 'cart_action' AND ca.type = 'add' THEN p.quantity ELSE 0 END) AS add_to_carts,\n        SUM(CASE WHEN ev.event_name = 'cart_action' AND ca.type = 'remove' THEN p.quantity ELSE 0 END) AS remove_from_carts,\n        SUM(CASE WHEN ev.event_name = 'purchase' THEN p.quantity ELSE 0 END) AS purchases,\n        SUM(CASE WHEN ev.event_name = 'purchase' THEN 1 ELSE 0 END * p.quantity * p.price) AS revenue\n\n    FROM atomic.events AS ev\n    INNER JOIN atomic.com_trysnowplow_product_1 AS p\n        ON ev.event_id = p.root_id AND ev.collector_tstamp = p.root_tstamp\n    LEFT JOIN atomic.com_trysnowplow_cart_action_1 AS ca\n        USING(root_id,root_tstamp)\n\n    WHERE ev.event_name IN ('page_view', 'cart_action', 'purchase')\n\n    GROUP BY 1,2,3,4\n\n);\n")),(0,o.kt)("h4",{id:"and-then-view-it"},"And then view it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM derived.products;\n")),(0,o.kt)("h2",{id:"lets-break-down-what-youve-done"},"Let's break down what you've done"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have captured granular data around how your users are engaging with your products throughout their purchasing journeys."),(0,o.kt)("li",{parentName:"ul"},"You have modeled this data into a product engagement table that surfaces the user engagement per product.")),(0,o.kt)("h2",{id:"what-you-might-want-to-do-next"},"What you might want to do next"),(0,o.kt)("p",null,"Understanding how your users are engaging with your products is the first step in optimizing your e-commerce store. Next, you might want to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Extend this table to include returns by joining this data with data from your transactional databases, so you get a more accurate picture of how products are actually performing."),(0,o.kt)("li",{parentName:"ul"},"Extend this table to include where these products are being promoted on your site to understand how visual merchandising affects performance."),(0,o.kt)("li",{parentName:"ul"},"Join this data with your inventory data to get a 360 view of e-commerce strategy."),(0,o.kt)("li",{parentName:"ul"},"Start mapping the relationships between products based on user behaviour, working towards compelling product recommendations."),(0,o.kt)("li",{parentName:"ul"},"Pivot this data to look at users instead: understand which marketing channels customers come from, and their customer lifetime value."),(0,o.kt)("li",{parentName:"ul"},"Etc.")),(0,o.kt)("p",null,"To learn more about Snowplow for retail and e-commerce, check out ",(0,o.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2019/03/06/snowplow-for-retail-part-1-how-can-I-use-snowplow/"},"our blog series on the topic"),"!"))}d.isMDXComponent=!0}}]);