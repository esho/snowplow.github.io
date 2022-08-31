"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[72524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,v=h["".concat(u,".").concat(m)]||h[m]||c[m]||a;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},74226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:"Tutorial: first and last touch attribution with SQL",date:"2020-02-26",sidebar_position:20},o=void 0,s={unversionedId:"tutorials/tutorial-first-and-last-touch-attribution/index",id:"tutorials/tutorial-first-and-last-touch-attribution/index",title:"Tutorial: first and last touch attribution with SQL",description:"In order to calculate the return on marketing spend on individual campaigns, digital marketers need to connect revenue events, downstream in a user journey, with marketing touch events, upstream in a user journey. This connection is necessary so that the cost of those associated with the marketing campaign that drove those marketing touches can be connected to profit associated with the conversion events later on.",source:"@site/docs/tutorials/tutorial-first-and-last-touch-attribution/index.md",sourceDirName:"tutorials/tutorial-first-and-last-touch-attribution",slug:"/tutorials/tutorial-first-and-last-touch-attribution/",permalink:"/docs/tutorials/tutorial-first-and-last-touch-attribution/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/tutorials/tutorial-first-and-last-touch-attribution/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:20,frontMatter:{title:"Tutorial: first and last touch attribution with SQL",date:"2020-02-26",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Tutorial: using Snowplow for marketing data analytics",permalink:"/docs/tutorials/using-snowplow-for-marketing-data-analytics/"},next:{title:"Tutorial: basic tracking design and setup",permalink:"/docs/tutorials/tutorial-basic-tracking-design-and-setup/"}},u={},l=[{value:"Identifying the different marketing touches",id:"identifying-the-different-marketing-touches",level:2},{value:"Identifying the different revenue events",id:"identifying-the-different-revenue-events",level:2},{value:"Connecting marketing touches with revenue events: first touch attribution model",id:"connecting-marketing-touches-with-revenue-events-first-touch-attribution-model",level:2},{value:"Connecting marketing touches with revenue events: last touch attribution model",id:"connecting-marketing-touches-with-revenue-events-last-touch-attribution-model",level:2}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to calculate the return on marketing spend on individual campaigns, digital marketers need to connect revenue events, downstream in a user journey, with marketing touch events, upstream in a user journey. This connection is necessary so that the cost of those associated with the marketing campaign that drove those marketing touches can be connected to profit associated with the conversion events later on."),(0,i.kt)("p",null,"Different attribution models involve applying different logic to connecting those marketing touch events with subsequent revenue events. In this blog post, we will document the analytic approach and the corresponding SQL statements to perform the most basic types of attribution: first and last touch. Our example SQL will focus on the web use case. The same undelying analytic approach can, however, be applied to any channel."),(0,i.kt)("p",null,"Note that all the SQL given below is Redshift compatible. It can be easier to do attribution analysis with other dialects of SQL that support complicated data types (arrays and objects) in particular."),(0,i.kt)("h2",{id:"identifying-the-different-marketing-touches"},"Identifying the different marketing touches"),(0,i.kt)("p",null,"First we need to identify all our marketing touch events. We can generate a table with all of these as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table derived.marketing_touches as (\n  select\n    domain_userid,\n    derived_tstamp,\n    event_id, \n    mkt_medium,\n    mkt_source,\n    mkt_term,\n    mkt_content,\n    mkt_campaign,\n    refr_medium,\n    refr_source,\n    refr_term\n  from atomic.events\n  where refr_medium != 'internal'\n    and refr_medium is not null\n  order by 1,2);\n")),(0,i.kt)("p",null,"The above table includes a line of data per marketing touch, ordered by user (as identified via the first party cookie id\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"domain_userid"),") and time (as identified by the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"derived_tstamp"),")."),(0,i.kt)("h2",{id:"identifying-the-different-revenue-events"},"Identifying the different revenue events"),(0,i.kt)("p",null,"Now lets create a table with all our different revenue events. What these look like will depend on your own particular event schema - for this example we\u2019ll assume that revenue events are standard\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/canonical-event-model?_sp=44dbe9a530cc476d.1459636607965#233-ecommerce-transactions"},"Snowplow transaction events"),". It should be straightforward to modify / update the below SQL with your own set of revenue events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table derived.revenue_events as (\n  select\n    domain_userid,\n    derived_tstamp,\n    event_id,\n    tr_total\n  from atomic.events\n  where event_name = 'transaction'\n  order by 1,2);\n\ufeff\n")),(0,i.kt)("h2",{id:"connecting-marketing-touches-with-revenue-events-first-touch-attribution-model"},"Connecting marketing touches with revenue events: first touch attribution model"),(0,i.kt)("p",null,"Now that we have our marketing touches and our revenue events, we need to join them together."),(0,i.kt)("p",null,"How we do the join is firstly a question of business logic: what type of attribution model do we want to apply? The simplest model is a first touch model - this credits all the value associated with the revenue event to the first marketing touch for each user."),(0,i.kt)("p",null,"To do this, we create a new\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"derived.first_marketing_touch"),"\xa0table, that records only the first marketing touch for each user. This is a subset of the marketing touches recorded in the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"derived.marketing_touches"),"\xa0table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"with first_touch_tstamps as (\n  select\n    domain_userid,\n    min(derived_tstamp) as first_touch_tstamp\n  from derived.marketing_touches\n  group by 1,\n  order by 1\n)\ncreate table derived.first_marketing_touch as (\n  select\n    m.domain_userid,\n    m.derived_tstamp,\n    m.event_id, \n    m.mkt_medium,\n    m.mkt_source,\n    m.mkt_term,\n    m.mkt_content,\n    m.mkt_campaign,\n    m.refr_medium,\n    m.refr_source,\n    m.refr_term\n  from derived.marketing_touches m\n  join first_touch_tstamps f            \n    -- only return first touch tstamps\n  on m.domain_userid = f.domain_userid\n  and m.derived_tstamp = f.first_touch_tstamp\n);\n")),(0,i.kt)("p",null,"Now it is trivial to join our\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"derived.first_marketing_touch"),"\xa0table with our\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"derived.revenue_events"),"\xa0table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n  f.*,\n  r.tr_total\nfrom derived.first_marketing_touch f\nright join derived.revenue_events r    \n  -- right join in case there is no marketing touch event to join to the revenue event\non f.domain_userid = r.domain_userid\n\ufeff\n")),(0,i.kt)("p",null,"Bingo! We have a table with a line of data for each revenue event, and all the marketing data associated with the corresponding first touch event for that user."),(0,i.kt)("p",null,"Note that the above is especially straightforward because:"),(0,i.kt)("p",null,"It is easy to identify the first marketing touch for each user. (It\u2019s simply the one wiht the earlierst timestamp.) By the time we do the join we have a table with a maximum of one marketing touch event per user ID, so we do not have to worry about generating a cartesian product when performing the join. Because neither of the above is true when we are applying a last click attribution model, the SQL gets a bit more complicated."),(0,i.kt)("h2",{id:"connecting-marketing-touches-with-revenue-events-last-touch-attribution-model"},"Connecting marketing touches with revenue events: last touch attribution model"),(0,i.kt)("p",null,"In a last touch attribution model, we want to credit all the value associated with each revenue event to the most recent marketing touch that occurred prior to that event."),(0,i.kt)("p",null,"There are a number of ways to do this in SQL - I think the following is the most straightforward, but welcome any suggestions at alternatives that are clearer / more performant."),(0,i.kt)("p",null,"First, we need to identify for each revenue event what is the corresponding marketing touch event that we wish to connect. To do this, we first union our marketing touches and revenue event tables into a single table that contains both the marketing touches and the revenue events. For performance reasons, we only include a subset of the columns in our marketing touches table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table derived.marketing_touches_and_revenue_events as (\n  select\n    domain_userid,\n    derived_tstamp,\n    event_id as marketing_event_id,\n    null as revenue_event_id,\n    'marketing touch' as event_type,\n    null as revenue\n  from derived.marketing_touches\n  union\n  select\n    domain_userid,\n    derived_tstamp,\n    null as marketing_event_id,\n    event_id as revenue_event_id\n    'revenue event' as event_type,\n    tr_total as revenue\n  from derived.revenue_events\n);\n")),(0,i.kt)("p",null,"The above table includes a line for every marketing touch event and every revenue events. Marketing touch events have a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"marketing_event_id"),"\xa0set and revenue events have a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"revenue_event_id"),"\xa0set."),(0,i.kt)("p",null,"We need to aggregate over this table so that we set the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"marketing_event_id"),"\xa0for each revenue event. This will be the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"event_id"),"\xa0of the most recent marketing touch event prior to the revenue event. We\u2019ll then be able to use the event ID to join back with our marketing touches table, to pull all the metadata associated with that marketing touch to the revenue event."),(0,i.kt)("p",null,"To do that, we use a window function to identify the most recent marketing touch event prior to the revenue event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n  domain_userid,\n  derived_tstamp,\n  last_value(marketing_event_id ignore nulls) over (\n    partition by domain_userid\n    order by derived_tstamp\n    rows between unbounded preceding and current row\n  ) as marketing_event_id,\n  revenue_event_id,\n  event_type,\n  tr_total\nfrom derived.marketing_touches_and_revenue_events\n")),(0,i.kt)("p",null,"The window function is doing a lot of work for us, so it is worth explaining what\u2019s going on before we use the above query to generate our final result set:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, it partitions our marketing touch and revenue events by user ID"),(0,i.kt)("li",{parentName:"ul"},"Then it orders the event stream by time"),(0,i.kt)("li",{parentName:"ul"},"Then for each event, it fetches the most recent not null marketing","_","event","_","id value. Note that this will be applied to every row in the table i.e. marketing touch events and transaction events.")),(0,i.kt)("p",null,"Where it is applied to marketing events, the most recent marketing event ID will be the marketing event ID for the current event. That doesn\u2019t matter (we\u2019re going to filter these events out of the event stream in the next step). The important thing is that for revenue events, it will correctly fetch the most recent marketing event ID. (Because the marketing event ID for the current row will be null, so will be ignored.)"),(0,i.kt)("p",null,"Now we apply the above window function to generate our final result set:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"with last_touch_event_ids_calculated as (\n  select\n    domain_userid,\n    derived_tstamp,\n    last_value(marketing_event_id ignore nulls) over (\n      partition by domain_userid\n      order by derived_tstamp\n      rows between unbounded preceding and current row\n    ) as last_marketing_event_id,\n    revenue_event_id,\n    event_type,\n    tr_total\n  from derived.marketing_touches_and_revenue_events  \n)\nselect\n  r.domain_userid,\n  r.derived_tstamp as revenue_event_tstamp,\n  r.last_marketing_event_id\n  r.revenue_event_id,\n  r.tr_total,\n  m.mkt_medium,\n  m.mkt_source,\n  m.mkt_term,\n  m.mkt_content,\n  m.mkt_campaign,\n  m.refr_medium,\n  m.refr_source,\n  m.refr_term\nfrom last_touch_event_ids_calculated r\nright join derived.marketing_touches m\non r.last_marketing_event_id = m.event_id  \n  -- only perform the join for the last touch event\nwhere r.event_type = 'revenue event'    \n  -- only fetch revenue events from the last_touch_event_ids_calculated table\n")),(0,i.kt)("p",null,"The above query will generate a result set with one line of data per revenue event, and each line including the marketing data associated with the last channel that each user engaged with prior before the revenue event occurred."))}c.isMDXComponent=!0}}]);