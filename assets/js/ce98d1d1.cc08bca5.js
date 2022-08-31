"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[53856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,g=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"Tutorial: Content analytics",date:"2020-10-12",sidebar_position:30},r=void 0,l={unversionedId:"try-snowplow/recipes/recipe-content-analytics/index",id:"try-snowplow/recipes/recipe-content-analytics/index",title:"Tutorial: Content analytics",description:"Introduction",source:"@site/docs/try-snowplow/recipes/recipe-content-analytics/index.md",sourceDirName:"try-snowplow/recipes/recipe-content-analytics",slug:"/try-snowplow/recipes/recipe-content-analytics/",permalink:"/docs/try-snowplow/recipes/recipe-content-analytics/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/try-snowplow/recipes/recipe-content-analytics/index.md",tags:[],version:"current",lastUpdatedAt:1661937959,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:30,frontMatter:{title:"Tutorial: Content analytics",date:"2020-10-12",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Funnel analysis",permalink:"/docs/try-snowplow/recipes/recipe-funnel-analysis/"},next:{title:"Tutorial: E-commerce analytics",permalink:"/docs/try-snowplow/recipes/recipe-ecommerce-analytics/"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What you&#39;ll be doing",id:"what-youll-be-doing",level:2},{value:"Design and implement the <code>content</code> entity",id:"design-and-implement-the-content-entity",level:2},{value:"Designing the entity",id:"designing-the-entity",level:4},{value:"Implementing the entity",id:"implementing-the-entity",level:4},{value:"In the Javascript Tracker",id:"in-the-javascript-tracker",level:4},{value:"Via Google Tag Manager",id:"via-google-tag-manager",level:4},{value:"Modeling the data you&#39;ve collected",id:"modeling-the-data-youve-collected",level:2},{value:"What does the model do?",id:"what-does-the-model-do",level:4},{value:"First generate the table:",id:"first-generate-the-table",level:4},{value:"And then view it:",id:"and-then-view-it",level:4},{value:"Let&#39;s break down what you&#39;ve done",id:"lets-break-down-what-youve-done",level:2},{value:"What you might want to do next",id:"what-you-might-want-to-do-next",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"If the primary function of your site is content consumption, whether it's reading news articles or watching videos, you'll want to understand how that content is performing. While traditional web analytics is focused on page views and sessions, you might be more interested in how long users are engaging with what content."),(0,o.kt)("p",null,"This recipe will give you an overview of how Snowplow empowers you to get better insights into how your content is performing."),(0,o.kt)("h2",{id:"what-youll-be-doing"},"What you'll be doing"),(0,o.kt)("p",null,"You have already set up Snowplow\u2019s out of the box web tracking by instrumenting the Javascript Tracker in your application. This includes tracking ",(0,o.kt)("inlineCode",{parentName:"p"},"page_view")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"page_ping")," events."),(0,o.kt)("p",null,"To understand how people are engaging with your content, you\u2019ll want to be tie these events to specific pieces of content, not just pages."),(0,o.kt)("p",null,"For this purpose, you can add a content entity which will be sent every time these events are tracked. Learn more about Snowplow events and entities\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-events-entities/"},"here"),". You can then aggregate all of your user behavioural data into one row per content piece to get a better view of how your content is performing."),(0,o.kt)("h2",{id:"design-and-implement-the-content-entity"},"Design and implement the ",(0,o.kt)("inlineCode",{parentName:"h2"},"content")," entity"),(0,o.kt)("h4",{id:"designing-the-entity"},"Designing the entity"),(0,o.kt)("p",null,"We have already created a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," entity for you, and uploaded its data structure to ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-resolver/"},"your Iglu server"),"."),(0,o.kt)("p",null,"Snowplow uses self-describing JSON schemas to structure events and entities so that they can be validated in the pipeline and loaded into tidy tables in the warehouse. You can learn more about these data structures ",(0,o.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"here"),", and about why we take this approach ",(0,o.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2020/01/24/re-thinking-the-structure-of-event-data/"},"here"),"."),(0,o.kt)("p",null,"While Try Snowplow only ships with a pre-designed set of custom events and entities required for the recipes, Snowplow BDP lets you create an unlimited number of your own via the ",(0,o.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/managing-data-structures/"},"Data Structures UI")," (and API)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," entity has the following fields:"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Field")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Description")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Type")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Validation")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Required?"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name")),(0,o.kt)("td",null,"The name of the piece of content"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,(0,o.kt)("code",null,"maxLength: 255")),(0,o.kt)("td",null,"\u2705\xa0")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"id"),(0,o.kt)("td",null,"The content identifier"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"maxLength: 255"),(0,o.kt)("td",null,"\u274c")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"category")),(0,o.kt)("td",null,"The category of the piece of content"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,(0,o.kt)("code",null,"maxLength: 255")),(0,o.kt)("td",null,"\u274c")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"date_published")),(0,o.kt)("td",null,"The date the piece of content was published"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,(0,o.kt)("code",null,"maxLength: 255")),(0,o.kt)("td",null,"\u274c")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"author")),(0,o.kt)("td",null,"The author of the piece of content"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,(0,o.kt)("code",null,"maxLength: 255")),(0,o.kt)("td",null,"\u274c")))),(0,o.kt)("h4",{id:"implementing-the-entity"},"Implementing the entity"),(0,o.kt)("h4",{id:"in-the-javascript-tracker"},"In the Javascript Tracker"),(0,o.kt)("p",null,"Add the content entity to your ",(0,o.kt)("inlineCode",{parentName:"p"},"page_view")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"page_ping")," events by editing your ",(0,o.kt)("inlineCode",{parentName:"p"},"trackPageView")," events to include the entity. Specifically, update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"window.snowplow('trackPageView');\n")),(0,o.kt)("p",null,"to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'window.snowplow(\'trackPageView\', {\n   "context": [{\n      "schema": "iglu:com.trysnowplow/content/jsonschema/1-0-1",\n      "data": {\n         "name": "example_name",\n         "id": "example_id",\n         "category": "example_category",  \n         "date_published": "01-01-1970",\n         "author": "example_author"\n      }\n   }]\n});\n')),(0,o.kt)("h4",{id:"via-google-tag-manager"},"Via Google Tag Manager"),(0,o.kt)("p",null,"If you are using Google Tag Manager, you can add the variables like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'window.snowplow(\'trackPageView\', {\n   "context": [{\n      "schema": "iglu:com.trysnowplow/content/jsonschema/1-0-1",\n      "data": {\n         "name": "{{example_name_variable}}",\n         "id": "{{example_id_variable}}",\n         "category": "{{example_category_variable}}",\n         "date_published": "{{example_date_variable}}",\n         "author": "{{example_author_variable}}"\n      }\n   }]\n});\n')),(0,o.kt)("h2",{id:"modeling-the-data-youve-collected"},"Modeling the data you've collected"),(0,o.kt)("h4",{id:"what-does-the-model-do"},"What does the model do?"),(0,o.kt)("p",null,"The tracking above captures which content users are consuming and how they are engaging with it. This allows you to get a better understanding of how your content is performing."),(0,o.kt)("p",null,"For this recipe we'll create a simple table describing content engagement. Once you have collected some data with your new tracking you can run the following two queries in your tool of choice."),(0,o.kt)("h4",{id:"first-generate-the-table"},"First generate the table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE derived.content AS(\n\n    WITH content_page_views AS(\n\n        SELECT\n            wp.id AS page_view_id,\n            c.category AS content_category, \n            c.name AS content_name, \n            c.date_published AS date_published,\n            c.author AS author,\n            10*SUM(CASE WHEN ev.event_name = 'page_ping' THEN 1 ELSE 0 END) AS time_engaged_in_s, \n            ROUND(100*(LEAST(LEAST(GREATEST(MAX(COALESCE(ev.pp_yoffset_max, 0)), 0), MAX(ev.doc_height)) + ev.br_viewheight, ev.doc_height)/ev.doc_height::FLOAT)) AS percentage_vertical_scroll_depth\n\n        FROM atomic.events AS ev\n        INNER JOIN atomic.com_snowplowanalytics_snowplow_web_page_1 AS wp\n            ON ev.event_id = wp.root_id AND ev.collector_tstamp = wp.root_tstamp\n        INNER JOIN atomic.com_trysnowplow_content_1 AS c\n            ON ev.event_id = c.root_id AND ev.collector_tstamp = c.root_tstamp\n        \n        GROUP BY 1,2,3,4,5,ev.br_viewheight,ev.doc_height\n\n    )\n\n    SELECT\n        content_category, \n        content_name, \n        date_published,\n        author,\n        COUNT(DISTINCT page_view_id) AS page_views,\n        ROUND(SUM(time_engaged_in_s)/COUNT(DISTINCT page_view_id)) AS average_time_engaged_in_s, \n        ROUND(SUM(percentage_vertical_scroll_depth)/COUNT(DISTINCT page_view_id))AS average_percentage_vertical_scroll_depth\n\n    FROM content_page_views\n\n    GROUP BY 1,2,3,4\n\n);\n")),(0,o.kt)("h4",{id:"and-then-view-it"},"And then view it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM derived.content;\n")),(0,o.kt)("h2",{id:"lets-break-down-what-youve-done"},"Let's break down what you've done"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have captured granular data around how your users are engaging with your content, including time engaged and scroll depth."),(0,o.kt)("li",{parentName:"ul"},"You have modeled this data into a content engagement table that surfaces the user engagement per content piece. This gives you an overview of how your content is performing across your site.")),(0,o.kt)("h2",{id:"what-you-might-want-to-do-next"},"What you might want to do next"),(0,o.kt)("p",null,"Understanding how your users are engaging with your content is just the first step. Next, you might want to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Extend this table to include where the content is being promoted on your site to understand how placement affects performance."),(0,o.kt)("li",{parentName:"ul"},"Start mapping the relationships between content pieces based on user behaviour, working towards compelling content recommendations."),(0,o.kt)("li",{parentName:"ul"},"Pivot this data to look at users instead: understand which marketing channels users come from, and how that affects their engagement with your content."),(0,o.kt)("li",{parentName:"ul"},"Etc.")),(0,o.kt)("p",null,"To learn more about Snowplow for media and entertainment, check out\xa0",(0,o.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2019/05/29/snowplow-for-media-part-1/"},"our blog series on the topic"),"."),(0,o.kt)("p",null,"Ready to get started with content recommendations? Check out our ",(0,o.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2020/10/26/how-to-build-a-content-recommendation-engine-with-snowplow/"},"step-by-step guide"),"."))}u.isMDXComponent=!0}}]);