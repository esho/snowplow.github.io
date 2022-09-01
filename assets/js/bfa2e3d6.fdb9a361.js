"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[89632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,v=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return n?i.createElement(v,r(r({ref:t},c),{},{components:n})):i.createElement(v,r({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const a={title:"Tutorial: Marketing attribution",date:"2020-10-12",sidebar_position:10},r=void 0,s={unversionedId:"try-snowplow/recipes/recipe-marketing-attribution/index",id:"try-snowplow/recipes/recipe-marketing-attribution/index",title:"Tutorial: Marketing attribution",description:"Introduction",source:"@site/docs/try-snowplow/recipes/recipe-marketing-attribution/index.md",sourceDirName:"try-snowplow/recipes/recipe-marketing-attribution",slug:"/try-snowplow/recipes/recipe-marketing-attribution/",permalink:"/docs/try-snowplow/recipes/recipe-marketing-attribution/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/try-snowplow/recipes/recipe-marketing-attribution/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:10,frontMatter:{title:"Tutorial: Marketing attribution",date:"2020-10-12",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Web analytics",permalink:"/docs/try-snowplow/recipes/recipe-web-analytics/"},next:{title:"Tutorial: Funnel analysis",permalink:"/docs/try-snowplow/recipes/recipe-funnel-analysis/"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"What you&#39;ll be doing",id:"what-youll-be-doing",level:2},{value:"Design and implement the <code>conversion</code> event",id:"design-and-implement-the-conversion-event",level:2},{value:"Designing the <code>conversion</code> event",id:"designing-the-conversion-event",level:4},{value:"Implementing the event",id:"implementing-the-event",level:4},{value:"In the JavaScript Tracker",id:"in-the-javascript-tracker",level:4},{value:"Via Google Tag Manager",id:"via-google-tag-manager",level:4},{value:"Modeling the data you&#39;ve collected",id:"modeling-the-data-youve-collected",level:2},{value:"What does the model do?",id:"what-does-the-model-do",level:4},{value:"First generate the table:",id:"first-generate-the-table",level:4},{value:"And then view it:",id:"and-then-view-it",level:4},{value:"Let&#39;s break down what you&#39;ve done",id:"lets-break-down-what-youve-done",level:2},{value:"What you might want to do next",id:"what-you-might-want-to-do-next",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Attribution modeling is the process of assigning credit for conversions to marketing touch points. The key to attribution modeling is capturing all marketing touchpoints and all conversions, and being able to assign them to a specific user. This allows you to look at the effectiveness of your marketing spend across platforms and channels, over time."),(0,o.kt)("p",null,"This recipe allows you to explore how you can get started with taking control of your attribution modeling with Snowplow. Owning your attribution modeling forces you make assumptions explicitly and deliberately, a crucial step in understanding its limitations and using its outputs appropriately. Furthermore, being able to run multiple attribution models in parallel allows you to see the impact different modeling logic have on the outputs of the model."),(0,o.kt)("h2",{id:"what-youll-be-doing"},"What you'll be doing"),(0,o.kt)("p",null,"You have already set up Snowplow\u2019s out of the box web tracking by instrumenting the JavaScript Tracker in your application. This includes tracking ",(0,o.kt)("inlineCode",{parentName:"p"},"page_view")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"page_ping")," events."),(0,o.kt)("p",null,"With each page view, Snowplow automatically captures the marketing parameters and referrer information as well as a session identifier. This means you have already started capturing marketing touches."),(0,o.kt)("p",null,"To attribute conversions, you\u2019ll also need to track conversion events. You'll then be able to run simple query that attributes the conversions to the marketing channels based on three popular marketing attribution models:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First touch: this model gives all credit to the user's first touch preceding a conversion"),(0,o.kt)("li",{parentName:"ul"},"Last touch: this model gives all credit to the user\u2019s last touch preceding a conversion"),(0,o.kt)("li",{parentName:"ul"},"Linear: this model gives equal credit to all of the user touches preceding a conversion")),(0,o.kt)("h2",{id:"design-and-implement-the-conversion-event"},"Design and implement the ",(0,o.kt)("inlineCode",{parentName:"h2"},"conversion")," event"),(0,o.kt)("h4",{id:"designing-the-conversion-event"},"Designing the ",(0,o.kt)("inlineCode",{parentName:"h4"},"conversion")," event"),(0,o.kt)("p",null,"We have already created a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"conversion")," event for you, and uploaded its data structure to ",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-resolver/"},"your Iglu server"),"."),(0,o.kt)("p",null,"Snowplow uses self-describing JSON schemas to structure events and entities so that they can be validated in the pipeline and loaded into tidy tables in the warehouse. You can learn more about these data structures ",(0,o.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/understanding-schemas-and-validation/"},"here"),", and about why we take this approach ",(0,o.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2020/01/24/re-thinking-the-structure-of-event-data/"},"here"),"."),(0,o.kt)("p",null,"While Try Snowplow only ships with a pre-designed set of custom events and entities required for the recipes, Snowplow BDP lets you create an unlimited number of your own via the ",(0,o.kt)("a",{parentName:"p",href:"/docs/understanding-tracking-design/managing-data-structures/"},"Data Structures UI")," (and API)."),(0,o.kt)("p",null,"The custom ",(0,o.kt)("inlineCode",{parentName:"p"},"conversion")," event used in this recipe is very flexible so that you can instrument it across as many or as few conversions as possible. Specifically, it has the following fields:"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Field")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Description")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Type")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Validation")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Required?"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name")),(0,o.kt)("td",null,"The name of the conversion"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,(0,o.kt)("code",null,"maxLength: 255")),(0,o.kt)("td",null,"\u274c")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"value")),(0,o.kt)("td",null,"The value assigned to the conversion, such as the revenue associated with it"),(0,o.kt)("td",null,"integer"),(0,o.kt)("td",null,(0,o.kt)("code",null,"minimum: 0"),",",(0,o.kt)("br",null),(0,o.kt)("code",null,"maximum: 1000000"),(0,o.kt)("br",null)),(0,o.kt)("td",null,"\u274c")))),(0,o.kt)("h4",{id:"implementing-the-event"},"Implementing the event"),(0,o.kt)("p",null,"Trigger the conversion events wherever you have conversions on your site. Some examples might be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Newsletter sign up"),(0,o.kt)("li",{parentName:"ul"},"Cart checkout"),(0,o.kt)("li",{parentName:"ul"},"Item download")),(0,o.kt)("h4",{id:"in-the-javascript-tracker"},"In the JavaScript Tracker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'window.snowplow(\'trackSelfDescribingEvent\', {\n   "event": {\n      "schema": "iglu:com.trysnowplow/conversion/jsonschema/1-0-0",\n      "data": {\n         "name": "email-signup",\n         "value": 10\n      }\n   }\n});\n')),(0,o.kt)("h4",{id:"via-google-tag-manager"},"Via Google Tag Manager"),(0,o.kt)("p",null,"If you are using Google Tag Manager, you can add the variables like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'window.snowplow(\'trackSelfDescribingEvent\', {\n   "event": {\n      "schema": "iglu:com.trysnowplow/conversion/jsonschema/1-0-0",\n      "data": {\n         "name": "{{example_conversion_variable}}",\n         "value": {{example_value_variable}}\n      }\n   }\n});\n')),(0,o.kt)("h2",{id:"modeling-the-data-youve-collected"},"Modeling the data you've collected"),(0,o.kt)("h4",{id:"what-does-the-model-do"},"What does the model do?"),(0,o.kt)("p",null,"Now that you are capturing marketing touches and conversions, you can get started with attributing marketing touches to conversions over time. You can compare first click, last click and linear attribution using the simple SQL query below."),(0,o.kt)("h4",{id:"first-generate-the-table"},"First generate the table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE derived.marketing_attribution AS(\n    WITH session_aggregations AS (\n\n        SELECT\n            ev.domain_userid AS domain_userid,\n            ev.domain_sessionid AS session_id, \n            MIN(ev.derived_tstamp) AS session_start, \n            SUM(CASE WHEN ev.event_name = 'page_view' THEN 1 ELSE 0 END) AS page_views,\n            SUM(CASE WHEN ev.event_name = 'conversion' THEN 1 ELSE 0 END) AS conversions,\n            SUM(c.value) AS conversions_value\n\n        FROM atomic.events AS ev\n        LEFT JOIN atomic.com_trysnowplow_conversion_1 AS c\n            ON ev.event_id = c.root_id AND ev.collector_tstamp = c.root_tstamp\n\n        WHERE ev.event_name IN ('page_view', 'conversion')\n        GROUP BY 1,2\n\n    ), session_count AS(\n\n        SELECT \n            domain_userid, \n            COUNT(DISTINCT session_id) AS session_count\n\n        FROM session_aggregations\n\n        GROUP BY 1\n\n    ), marketing_infos AS(\n\n        SELECT\n            -- session information\n            s.domain_userid,\n            s.session_id,\n            s.session_start,\n            s.page_views,\n\n            -- marketing information \n            ev.mkt_medium, \n            ev.mkt_source,\n            ev.mkt_term, \n            ev.mkt_content,\n            ev.mkt_campaign, \n            ev.mkt_network, \n            ev.mkt_clickid,\n\n            -- referer information\n            ev.refr_medium, \n            ev.refr_source, \n            ev.refr_term,\n\n            -- marketing channel\n            CASE\n                WHEN ev.refr_medium IS NULL AND ev.page_url NOT ILIKE '%utm_%' THEN 'Direct'\n                WHEN (ev.refr_medium = 'search' AND ev.mkt_medium IS NULL) OR (ev.refr_medium = 'search' AND ev.mkt_medium = 'organic') THEN 'Organic Search'\n                WHEN ev.refr_medium = 'search' AND ev.mkt_medium SIMILAR TO '%(cpc|ppc|paidsearch)%' THEN 'Paid Search'\n                WHEN ev.refr_medium = 'social' OR ev.mkt_medium SIMILAR TO '%(social|social-network|social-media|sm|social network|social media)%' THEN 'Social'\n                WHEN ev.refr_medium = 'email' OR ev.mkt_medium ILIKE 'email' THEN 'Email'\n                WHEN ev.mkt_medium SIMILAR TO '%(display|cpm|banner)%' THEN 'Display'\n                ELSE 'Other'\n            END AS marketing_channel,\n\n            -- conversions\n            s.conversions,\n            s.conversions_value,\n\n            -- position\n            ROW_NUMBER() OVER(PARTITION BY s.domain_userid ORDER BY s.session_start) AS position,\n            c.session_count\n\n        FROM atomic.events AS ev\n        INNER JOIN session_aggregations AS s\n            ON ev.domain_sessionid = s.session_id AND ev.derived_tstamp = s.session_start\n        INNER JOIN session_count AS c\n            ON s.domain_userid = c.domain_userid\n\n        GROUP BY 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19\n    \n    ) \n\n    SELECT\n        -- session information\n        domain_userid,\n        session_id,\n        session_start,\n        page_views,\n\n        -- marketing information \n        mkt_medium, \n        mkt_source,\n        mkt_term, \n        mkt_content,\n        mkt_campaign, \n        mkt_network, \n        mkt_clickid,\n\n        -- referer information\n        refr_medium, \n        refr_source, \n        refr_term,\n\n        -- marketing channel\n        marketing_channel,\n\n        -- conversions\n        conversions,\n        conversions_value,\n\n        -- attribution\n        CASE WHEN position = 1 THEN 1 ELSE 0 END AS first_touch,\n        CASE WHEN position = session_count THEN 1 ELSE 0 END AS last_touch,\n        1/session_count AS linear\n    \n    FROM marketing_infos\n\n    GROUP BY 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20\n\n);\n")),(0,o.kt)("h4",{id:"and-then-view-it"},"And then view it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \n    marketing_channel, \n    SUM(conversions) AS conversions,\n    SUM(conversions*first_touch) AS first_touch_attribution,\n    SUM(conversions*last_touch) AS last_touch_attribution,\n    SUM(conversions*linear) AS linear_attribution\n\nFROM derived.marketing_attribution\n\nGROUP BY 1;\n")),(0,o.kt)("h2",{id:"lets-break-down-what-youve-done"},"Let's break down what you've done"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With the out of the box tracking, you have automatically captured the marketing and referrer information for each page view and session."),(0,o.kt)("li",{parentName:"ul"},"By instrumenting a custom conversion event, you are collecting all the data you need to get started with attribution."),(0,o.kt)("li",{parentName:"ul"},"By running a simple query that attributes the conversions to the marketing channels based on three popular attribution models, you can explore how Snowplow enables you to take control of your marketing attribution.")),(0,o.kt)("h2",{id:"what-you-might-want-to-do-next"},"What you might want to do next"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add additional marketing sources, such as ad impressions or emails"),(0,o.kt)("li",{parentName:"ul"},"Add acquisition costs, such as the average cpc for paid search based on the click and keyword performance reports from Google"),(0,o.kt)("li",{parentName:"ul"},"Add the revenue associated with conversions from your transactional database"),(0,o.kt)("li",{parentName:"ul"},"Explore different attribution models, such as bathtub or time decay"),(0,o.kt)("li",{parentName:"ul"},"Split out attribution by additional dimensions, such as device type or campaign information"),(0,o.kt)("li",{parentName:"ul"},"Consider different types of conversions, or model intent-to-convert")),(0,o.kt)("p",null,"To learn more about marketing attribution with Snowplow, check out ",(0,o.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2020/04/06/introduction-to-marketing-attribution-with-snowplow/"},"our introductory post")," as well as ",(0,o.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2020/10/26/how-to-do-marketing-attribution-with-snowplow/"},"this full guide to advanced attribution"),"."))}d.isMDXComponent=!0}}]);