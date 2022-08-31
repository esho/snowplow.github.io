"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[45673],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?i.createElement(g,s(s({ref:n},c),{},{components:t})):i.createElement(g,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var d=2;d<o;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48523:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=t(87462),a=(t(67294),t(3905));const o={title:"Tutorial: Web analytics",date:"2020-10-12",sidebar_position:0},s=void 0,r={unversionedId:"try-snowplow/recipes/recipe-web-analytics/index",id:"try-snowplow/recipes/recipe-web-analytics/index",title:"Tutorial: Web analytics",description:"Introduction",source:"@site/docs/try-snowplow/recipes/recipe-web-analytics/index.md",sourceDirName:"try-snowplow/recipes/recipe-web-analytics",slug:"/try-snowplow/recipes/recipe-web-analytics/",permalink:"/docs/try-snowplow/recipes/recipe-web-analytics/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/try-snowplow/recipes/recipe-web-analytics/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:0,frontMatter:{title:"Tutorial: Web analytics",date:"2020-10-12",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/try-snowplow/recipes/"},next:{title:"Tutorial: Marketing attribution",permalink:"/docs/try-snowplow/recipes/recipe-marketing-attribution/"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"What you&#39;ll be doing",id:"what-youll-be-doing",level:2},{value:"Updating the sessionization logic (optional)",id:"updating-the-sessionization-logic-optional",level:2},{value:"Modeling sessions",id:"modeling-sessions",level:2},{value:"What does the model do?",id:"what-does-the-model-do",level:4},{value:"First generate the table:",id:"first-generate-the-table",level:4},{value:"And then view it:",id:"and-then-view-it",level:4},{value:"Other queries you might want to run:",id:"other-queries-you-might-want-to-run",level:4},{value:"Let&#39;s break down what you&#39;ve done",id:"lets-break-down-what-youve-done",level:2},{value:"Further reading",id:"further-reading",level:2}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Snowplow empowers you to collect granular data from your website(s). To gain a better understanding of how users are engaging, let's start off by aggregating this data into sessions. While sessions don't tell you everything, and don't necessarily reflect the entire customer journey, they are great for some initial exploratory analysis such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How many sessions does each of your marketing channels generate?"),(0,a.kt)("li",{parentName:"ul"},"What is the average time users spend engaging with your site in a given session? How does that compare to the average session length?"),(0,a.kt)("li",{parentName:"ul"},"How many pages do users look at in a given session?"),(0,a.kt)("li",{parentName:"ul"},"Etc.")),(0,a.kt)("h2",{id:"what-youll-be-doing"},"What you'll be doing"),(0,a.kt)("p",null,"You have already set up Snowplow\u2019s out of the box web tracking by instrumenting the Javascript Tracker in your application. This includes tracking ",(0,a.kt)("inlineCode",{parentName:"p"},"page_view")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"page_ping")," events."),(0,a.kt)("p",null,"The next step is to aggregate these events into sessions. For that purpose, you'll be reviewing the default Snowplow session logic, and then running a simple SQL query to model the data."),(0,a.kt)("h2",{id:"updating-the-sessionization-logic-optional"},"Updating the sessionization logic (optional)"),(0,a.kt)("p",null,"The Snowplow JavaScript tracker automatically tracks a session identifier and a session index with all web events. Sessions are reset after 30 minutes of inactivity by default, but this can be changed this in the tracker initialization by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionCookieTimeout")," (in seconds):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'window.snowplow("newTracker", "sp", ..., {\n    appId: "try-snowplow-tracking",\n    platform: "web",\n    sessionCookieTimeout: 3600,\n    contexts: {\n        webPage: true,\n        performanceTiming: true\n    }\n});\n')),(0,a.kt)("p",null,"Furthermore, you can manually reset a session, for example after a conversion, like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'window.snowplow("newSession");\n')),(0,a.kt)("p",null,"Go ahead and update the sessionization logic in your tracker implementation if you would like to. More information on the Snowplow session cookie can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/cookies-local-storage/how-the-tracker-stores-state/#The_session_cookie"},"here"),"."),(0,a.kt)("h2",{id:"modeling-sessions"},"Modeling sessions"),(0,a.kt)("h4",{id:"what-does-the-model-do"},"What does the model do?"),(0,a.kt)("p",null,"For this recipe you'll create a simple session table describing web engagement by running the following query in your query tool of choice. This is a very simplified version of the sessions table produced by our standard web data model. For each session, it will capture the session ID, session start and end times, marketing channel as well as engagement information: page views, link clicks and time engaged (in seconds)."),(0,a.kt)("h4",{id:"first-generate-the-table"},"First generate the table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE derived.sessions AS(\n    WITH sessions AS (\n        SELECT\n            ev.domain_sessionid AS session_id, \n            MIN(ev.derived_tstamp) AS session_start, \n            MAX(ev.derived_tstamp) AS session_end,\n            SUM(CASE WHEN ev.event_name = 'page_view' THEN 1 ELSE 0 END) AS page_views,\n            SUM(CASE WHEN ev.event_name = 'link_click' THEN 1 ELSE 0 END) AS link_clicks,\n            10*SUM(CASE WHEN ev.event_name = 'page_ping' THEN 1 ELSE 0 END) AS time_engaged_in_s\n        \n        FROM atomic.events AS ev\n        GROUP BY 1\n    )\n\n    SELECT\n        -- session information\n        s.session_id,\n        s.session_start,\n        s.session_end,\n\n        -- marketing channel\n        CASE\n            WHEN ev.refr_medium IS NULL AND ev.page_url NOT ILIKE '%utm_%' THEN 'Direct'\n            WHEN (ev.refr_medium = 'search' AND ev.mkt_medium IS NULL) OR (ev.refr_medium = 'search' AND ev.mkt_medium = 'organic') THEN 'Organic Search'\n            WHEN ev.refr_medium = 'search' AND ev.mkt_medium SIMILAR TO '%(cpc|ppc|paidsearch)%' THEN 'Paid Search'\n            WHEN ev.refr_medium = 'social' OR ev.mkt_medium SIMILAR TO '%(social|social-network|social-media|sm|social network|social media)%' THEN 'Social'\n            WHEN ev.refr_medium = 'email' OR ev.mkt_medium ILIKE 'email' THEN 'Email'\n            WHEN ev.mkt_medium SIMILAR TO '%(display|cpm|banner)%' THEN 'Display'\n            ELSE 'Other'\n        END AS marketing_channel,\n\n        -- activity\n        s.page_views,\n        s.link_clicks,\n        s.time_engaged_in_s\n\n    FROM atomic.events AS ev\n    INNER JOIN sessions AS s\n        ON ev.domain_sessionid = s.session_id AND ev.derived_tstamp = s.session_start\n\n    GROUP BY 1,2,3,4,5,6,7\n);\n")),(0,a.kt)("h4",{id:"and-then-view-it"},"And then view it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM derived.sessions;\n")),(0,a.kt)("h4",{id:"other-queries-you-might-want-to-run"},"Other queries you might want to run:"),(0,a.kt)("p",null,"Sessions by marketing channel:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    marketing_channel,\n    COUNT(DISTINCT session_id) AS sessions \nFROM derived.sessions\nGROUP BY 1 ORDER BY 2 DESC;\n")),(0,a.kt)("p",null,"Average number of page views and time engaged in seconds per session:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    AVG(page_views) AS avg_page_views,\n    AVG(time_engaged_in_s) AS avg_time_engaged_in_s \nFROM derived.sessions;\n")),(0,a.kt)("h2",{id:"lets-break-down-what-youve-done"},"Let's break down what you've done"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You have captured a session identifier with all web events, and customized the sessionization logic to match your requirements."),(0,a.kt)("li",{parentName:"ul"},"You have run a simple SQL query to model the Snowplow data collected from your website into sessions. Based on the sessions table, you can easily see how users are engaging with your site.")),(0,a.kt)("h2",{id:"further-reading"},"Further reading"),(0,a.kt)("p",null,"For more information on how Snowplow models web data, take a look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/data-models/tree/master"},"our standard web data model"),"."),(0,a.kt)("p",null,"A general view of Snowplow for web can also be found on ",(0,a.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/web/"},"our website"),"."))}p.isMDXComponent=!0}}]);