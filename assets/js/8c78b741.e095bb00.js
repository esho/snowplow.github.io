"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[11690],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},24807:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=t(87462),i=(t(67294),t(3905));const l={title:"Tutorial: Funnel analysis",date:"2021-01-05",sidebar_position:20},o=void 0,r={unversionedId:"try-snowplow/recipes/recipe-funnel-analysis/index",id:"try-snowplow/recipes/recipe-funnel-analysis/index",title:"Tutorial: Funnel analysis",description:"Introduction",source:"@site/docs/try-snowplow/recipes/recipe-funnel-analysis/index.md",sourceDirName:"try-snowplow/recipes/recipe-funnel-analysis",slug:"/try-snowplow/recipes/recipe-funnel-analysis/",permalink:"/docs/try-snowplow/recipes/recipe-funnel-analysis/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/try-snowplow/recipes/recipe-funnel-analysis/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:20,frontMatter:{title:"Tutorial: Funnel analysis",date:"2021-01-05",sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Tutorial: Marketing attribution",permalink:"/docs/try-snowplow/recipes/recipe-marketing-attribution/"},next:{title:"Tutorial: Content analytics",permalink:"/docs/try-snowplow/recipes/recipe-content-analytics/"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"What you&#39;ll be doing",id:"what-youll-be-doing",level:2},{value:"Design and implement the <code>funnel_interaction</code> event (optional)",id:"design-and-implement-the-funnel_interaction-event-optional",level:2},{value:"Designing the event",id:"designing-the-event",level:4},{value:"Implementing the event",id:"implementing-the-event",level:4},{value:"In the Javascript Tracker",id:"in-the-javascript-tracker",level:4},{value:"Via Google Tag Manager",id:"via-google-tag-manager",level:4},{value:"Modeling funnels",id:"modeling-funnels",level:2},{value:"First, classify the funnel steps:",id:"first-classify-the-funnel-steps",level:4},{value:"Second, build the funnel:",id:"second-build-the-funnel",level:4},{value:"Then, view it:",id:"then-view-it",level:4},{value:"Let&#39;s break down what you&#39;ve done",id:"lets-break-down-what-youve-done",level:2},{value:"Further reading",id:"further-reading",level:2}],p={toc:u};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Funnel analysis is a great way to get started with understanding how your users are using your digital products. Specifically, it allows you to identify where users might be struggling or dropping off, and therefore optimize your users' journeys and conversions."),(0,i.kt)("h2",{id:"what-youll-be-doing"},"What you'll be doing"),(0,i.kt)("p",null,"You have already set up Snowplow\u2019s out of the box web tracking by instrumenting the Javascript Tracker in your application. This includes tracking\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"page_view"),"\xa0events. In the modeling section of this recipe, you will be able to classify any page view as a funnel step. However, you might also want to track additional actions as part of your funnel analysis. For this purpose, you will implement a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"funnel_interaction")," event (optional)."),(0,i.kt)("p",null,"You will then collect all funnel step interactions (whether they are page views or specific interactions) into a single table to easily visualise and analyse how your users are moving through your funnels, and where they are getting stuck or dropping off."),(0,i.kt)("h2",{id:"design-and-implement-the-funnel_interaction-event-optional"},"Design and implement the ",(0,i.kt)("inlineCode",{parentName:"h2"},"funnel_interaction")," event (optional)"),(0,i.kt)("h4",{id:"designing-the-event"},"Designing the event"),(0,i.kt)("p",null,"We have already created the custom ",(0,i.kt)("inlineCode",{parentName:"p"},"funnel_interaction")," event for you, and uploaded its data structure to ",(0,i.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-resolver/"},"your Iglu server"),"."),(0,i.kt)("p",null,"Snowplow uses self-describing JSON schemas to structure events and entities so that they can be validated in the pipeline and loaded into tidy tables in the warehouse. You can learn more about these data structures ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"here"),", and about why we take this approach ",(0,i.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2020/01/24/re-thinking-the-structure-of-event-data/"},"here"),"."),(0,i.kt)("p",null,"While Try Snowplow only ships with a pre-designed set of custom events and entities required for the recipes, Snowplow BDP lets you create an unlimited number of your own via the ",(0,i.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/managing-data-structures/"},"Data Structures UI")," (and API)."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"funnel_interaction")," event has the following fields:"),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("strong",null,"Field")),(0,i.kt)("td",null,(0,i.kt)("strong",null,"Description")),(0,i.kt)("td",null,(0,i.kt)("strong",null,"Type")),(0,i.kt)("td",null,(0,i.kt)("strong",null,"Validation")),(0,i.kt)("td",null,(0,i.kt)("strong",null,"Required?"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"funnel_name")),(0,i.kt)("td",null,"The name of the funnel"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null,(0,i.kt)("code",null,"maxLength: 255")),(0,i.kt)("td",null,"\u2705")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"step_name")),(0,i.kt)("td",null,"The funnel step"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null,"maxLength: 255"),(0,i.kt)("td",null,"\u2705\xa0")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"step_position")),(0,i.kt)("td",null,"The position of this step in the funnel"),(0,i.kt)("td",null,"integer"),(0,i.kt)("td",null,"minimum: 1, maximum: 100"),(0,i.kt)("td",null,"\u274c\xa0")))),(0,i.kt)("h4",{id:"implementing-the-event"},"Implementing the event"),(0,i.kt)("h4",{id:"in-the-javascript-tracker"},"In the Javascript Tracker"),(0,i.kt)("p",null,"Track the ",(0,i.kt)("inlineCode",{parentName:"p"},"funnel_interaction")," event whenever a user completes a given funnel step:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'window.snowplow(\'trackSelfDescribingEvent\', {\n   "event": {\n      "schema": "iglu:com.trysnowplow/funnel_interaction/jsonschema/1-0-0",\n      "data": {\n         "funnel_name": "example_funnel_name",\n         "step_name": "example_step_name",\n         "step_position": 1\n      }\n   }\n});\n')),(0,i.kt)("p",null,"For example, on the ",(0,i.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/"},"snowplowanalytics.com website"),", we might consider a home page view as step 1 , a ",(0,i.kt)("inlineCode",{parentName:"p"},"/get-started/")," page view as step 2 and then the submission of the form as step 3. All three steps can be tracked has ",(0,i.kt)("inlineCode",{parentName:"p"},"funnel _interaction")," events. However, the first two funnel steps are already tracked as page views, so we could also just track the form submission as a ",(0,i.kt)("inlineCode",{parentName:"p"},"funnel_interaction")," event and then classify the other two steps in the modeling step below."),(0,i.kt)("h4",{id:"via-google-tag-manager"},"Via Google Tag Manager"),(0,i.kt)("p",null,"If you are using Google Tag Manager, you can add the variables like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'window.snowplow(\'trackSelfDescribingEvent\', {\n   "event": {\n      "schema": "iglu:com.trysnowplow/funnel_interaction/jsonschema/1-0-0",\n      "data": {\n         "funnel_name": "{{example_funnel_name_variable}}",\n         "step_name": "{{example_step_name_variable}}",\n         "step_position": {{example_position_variable}}\n      }\n   }\n});\n')),(0,i.kt)("h2",{id:"modeling-funnels"},"Modeling funnels"),(0,i.kt)("h4",{id:"first-classify-the-funnel-steps"},"First, classify the funnel steps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- select all explicitly defined funnel steps (optional)\nCREATE TABLE derived.funnel_step_definitions AS(\n\n    SELECT \n        funnel_name,\n        step_name,\n        step_position,\n        NULL AS page_urlpath\n    FROM atomic.com_trysnowplow_funnel_interaction_1\n    GROUP BY 1,2,3,4\n\n);\n\n-- classify relevant page views as funnel steps\nINSERT INTO derived.funnel_step_definitions\n    ('example_funnel_name', 'example_step_name', 1, '/example_page_url_path/'),\n    ('example_funnel_name_2', 'example_step_name_2', 2, '/example_page_url_path_2/'),\n    ...,\n    ('example_funnel_name_n', 'example_step_name_n', n, '/example_page_url_path_n/')\n;\n\n-- verify funnel definitions\nSELECT * FROM derived.funnel_step_definitions GROUP BY 1 ORDER BY 3 ASC;\n")),(0,i.kt)("h4",{id:"second-build-the-funnel"},"Second, build the funnel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE derived.funnel_interactions AS(\n\n    SELECT\n        ev.domain_userid,\n        ev.domain_sessionid AS session_id,\n        ev.derived_tstamp as "timestamp",\n        fi.funnel_name,\n        fi.step_name,\n        fi.step_position\n\n    FROM atomic.events AS ev\n    INNER JOIN atomic.com_trysnowplow_funnel_interaction_1 AS fi\n        ON ev.event_id = fi.root_id AND ev.collector_tstamp = fi.root_tstamp\n    \n    GROUP BY 1,2,3,4,5,6\n\n    UNION\n\n    SELECT\n        ev.domain_userid,\n        ev.domain_sessionid AS session_id,\n        ev.derived_tstamp as "timestamp",\n        fd.funnel_name,\n        fd.step_name,\n        fd.step_position\n\n    FROM atomic.events AS ev\n    INNER JOIN derived.funnel_step_definitions AS fd USING(page_urlpath)\n\n    WHERE ev.event_name = \'page_view\' AND\n        fd.page_urlpath IS NOT NULL\n\n    GROUP BY 1,2,3,4,5,6\n\n);\n')),(0,i.kt)("h4",{id:"then-view-it"},"Then, view it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    funnel_name,\n    step_name,\n    step_position,\n    COUNT(DISTINCT domain_userid) AS users\n\nFROM derived.funnel_interactions\n\nGROUP BY 1,2,3\nORDER BY 1,3 ASC;\n")),(0,i.kt)("h2",{id:"lets-break-down-what-youve-done"},"Let's break down what you've done"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have captured all funnel steps, whether they are page views or specific interactions."),(0,i.kt)("li",{parentName:"ul"},"You have modeled this data into a single table to easily visualise and analyse how your users are moving through your funnels."),(0,i.kt)("li",{parentName:"ul"},"This gives you initial insights into where users are getting stuck or dropping off, and how you might improve their journeys.")),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("p",null,"Funnels can be difficult to construct and visualise in relational databases using common BI tools. Hence a multitude of different dedicated Product Analytics tools (such as Amplitude or Heap) have emerged. However, being able to include different types of data in your funnels can be key if you have more complex user journeys."),(0,i.kt)("p",null,"For example, if your users can also interact with you via email or a ticketing system such as ZenDesk, you might want to include those interactions too. Building out funnel analytics yourself in the data warehouse gives you that flexibility. You might want to try this out by joining the data collected through Try Snowplow with our customer data you have."),(0,i.kt)("p",null,"To learn more about Snowplow's approach to Product Analytics, check out ",(0,i.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/use-cases/product-analytics/"},"the relevant page in our use case library")," or download our ",(0,i.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/resources/product-analytics-ebook/"},"e-book"),"."))}d.isMDXComponent=!0}}]);