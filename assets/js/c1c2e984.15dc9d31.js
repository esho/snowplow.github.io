"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[11162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},20804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={title:"Custom API Request enrichment",date:"2020-02-14",sidebar_position:12},r=void 0,l={unversionedId:"enriching-your-data/available-enrichments/custom-api-request-enrichment/index",id:"enriching-your-data/available-enrichments/custom-api-request-enrichment/index",title:"Custom API Request enrichment",description:"Summary",source:"@site/docs/enriching-your-data/available-enrichments/custom-api-request-enrichment/index.md",sourceDirName:"enriching-your-data/available-enrichments/custom-api-request-enrichment",slug:"/enriching-your-data/available-enrichments/custom-api-request-enrichment/",permalink:"/docs/enriching-your-data/available-enrichments/custom-api-request-enrichment/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/enriching-your-data/available-enrichments/custom-api-request-enrichment/index.md",tags:[],version:"current",lastUpdatedAt:1662459597,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:12,frontMatter:{title:"Custom API Request enrichment",date:"2020-02-14",sidebar_position:12},sidebar:"defaultSidebar",previous:{title:"Custom SQL enrichment",permalink:"/docs/enriching-your-data/available-enrichments/custom-sql-enrichment/"},next:{title:"IP anonymization enrichment",permalink:"/docs/enriching-your-data/available-enrichments/ip-anonymization-enrichment/"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Overview",id:"overview",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Configuration",id:"configuration-1",level:3},{value:"<code>inputs</code>",id:"inputs",level:4},{value:"<code>api</code>",id:"api",level:4},{value:"<code>outputs</code>",id:"outputs",level:4},{value:"<code>cache</code>",id:"cache",level:4},{value:"Data sources",id:"data-sources",level:3},{value:"Algorithm",id:"algorithm",level:3},{value:"Data generated",id:"data-generated",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The API Request Enrichment lets you perform dimension widening on a Snowplow event via your own or third-party proprietary http(s) API."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This enrichment gives you the flexibility to add additional data points for your events by pulling in data from other sources. Using a common key like a user ID or an email address for example, you might be able to add relevant information about a user to each event before it gets written to your database."),(0,a.kt)("p",null,"The configuration for this enrichment is all about connecting to your data source and fetching the relevant data points you want to enrich your events with."),(0,a.kt)("p",null,"If you\u2019d like support in setting up or configuring this enrichment please contact us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@snowplowanalytics.com"},"support@snowplowanalytics.com"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow.enrichments/api_request_enrichment_config/jsonschema/1-0-1"},"schema")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/enrich/blob/master/config/enrichments/api_request_enrichment_config.json"},"example"))),(0,a.kt)("p",null,"The example configuration is using imaginary api.acme.com RESTful service to widen Snowplow event with context containing information about users. To find real-world example you can check our extensive tutorial on\xa0",(0,a.kt)("a",{parentName:"p",href:"https://discourse.snowplow.io/t/integrating-clearbit-data-into-snowplow-using-the-api-request-enrichment/210"},"Integrating Clearbit data into Snowplow using the API Request Enrichment"),"."),(0,a.kt)("p",null,"The configuration JSON for this enrichment contains four sub-objects:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"inputs"),"\xa0specifies the datapoint(s) from the Snowplow event to use as keys when performing your API lookup"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"api"),"\xa0defines how the enrichment can access your API"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"outputs"),"\xa0lets you tune how you convert the returned JSON into one or more self-describing JSONs ready to be attached to your Snowplow event"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"cache"),"\xa0improves the enrichment's performance by storing values retrieved from the API")),(0,a.kt)("h3",{id:"configuration-1"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/API-Request-enrichment#configuration"}),"Configuration"),(0,a.kt)("p",null,"To go through each of sub-objects in more detail:"),(0,a.kt)("h4",{id:"inputs"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/API-Request-enrichment#inputs"}),(0,a.kt)("inlineCode",{parentName:"h4"},"inputs")),(0,a.kt)("p",null,"Specify an array of\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"inputs"),"\xa0to use as keys when performing your API lookup. Each input consists of a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\xa0and a source: either\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"pojo"),"\xa0if the datapoint comes from the Snowplow enriched event POJO, or\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"\xa0if the datapoint comes from a self-describing JSON inside one of the three JSON fields. The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\xa0can be referred to later in the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"api.http.uri"),"\xa0property. Note that key name can contain only alphanumeric symbols, hyphens and underscores."),(0,a.kt)("p",null,"For\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"pojo"),", the field name must be specified. A field name which is not recognized as part of the POJO will be ignored by the enrichment."),(0,a.kt)("p",null,"For\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"json"),", you must specify the field name as either\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"unstruct_event"),",\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"contexts"),"\xa0or\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"derived_contexts"),". You must then provide two additional fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schemaCriterion"),"\xa0lets you specify the self-describing JSON you are looking for in the given JSON field. You can specify all SchemaVers (",(0,a.kt)("inlineCode",{parentName:"li"},"*-*-*"),"), only the SchemaVer MODEL (e.g.\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"1-*-*"),"), MODEL plus REVISION (e.g.\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"1-1-*"),") or a full MODEL-REVISION-ADDITION version (e.g.\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"1-1-1"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jsonPath"),"\xa0lets you provide the\xa0",(0,a.kt)("a",{parentName:"li",href:"http://goessner.net/articles/JsonPath/"},"JSON Path statement"),"\xa0to navigate to the field inside the JSON that you want to use as the input.")),(0,a.kt)("p",null,"The lookup algorithm is short-circuiting: the first match for a given key will be used."),(0,a.kt)("h4",{id:"api"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/API-Request-enrichment#api"}),(0,a.kt)("inlineCode",{parentName:"h4"},"api")),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"api"),"\xa0section lets you configure how the enrichment should access your API. At the moment only\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"\xa0is supported, with this option covering both HTTP and HTTPS - the protocol on the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"uri"),"\xa0field will determine which to use. Before R113, only\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0was supported as the HTTP\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"method"),"\xa0for the lookup. Now it supports both\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),"."),(0,a.kt)("p",null,"For the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"uri"),"\xa0field, specify the full URI including the protocol. You can attach a querystring to the end of the URI. You can also embed the keys from your\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"inputs"),"\xa0section in the URI, by wrapping the key in\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"{{}}"),"\xa0brackets thus:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"uri": "http://api.acme.com/users/{{client}}/{{user}}?format=json"\n')),(0,a.kt)("p",null,"If a key required in the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"uri"),"\xa0was not found in any of the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"inputs"),", then the lookup will not proceed, but this will\xa0",(0,a.kt)("strong",{parentName:"p"},"not"),"\xa0be flagged as a failure."),(0,a.kt)("p",null,"Make sure your\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"uri"),'\xa0is actually valid URI and does not contain any special symbols or spaces. Enrichment will "urlize" content of input extracted from event with\xa0',(0,a.kt)("inlineCode",{parentName:"p"},"java.net.URLEncoder.encode"),"\xa0function, but safety of\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"uri"),"\xa0is on user's behalf."),(0,a.kt)("p",null,"Currently the only supported\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"authentication"),"\xa0option is\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"http-basic"),": provide a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"username"),"\xa0and/or a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"password"),"\xa0for the enrichment to use to connect to your API using\xa0",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"basic access authentication"),". Some APIs use only the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"username"),"\xa0or\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"password"),"\xa0field to contain an API key; in this case, set the other property to the empty string\xa0",(0,a.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,a.kt)("p",null,"If your API is unsecured (because for example it is only accessible from inside your private subnet, or using IP address whitelisting), then configure the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"authentication"),"\xa0section like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"authentication": { }\n')),(0,a.kt)("h4",{id:"outputs"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/API-Request-enrichment#outputs"}),(0,a.kt)("inlineCode",{parentName:"h4"},"outputs")),(0,a.kt)("p",null,"This enrichment assumes that your API returns a JSON, which will contain one or more\xa0",(0,a.kt)("em",{parentName:"p"},"entities"),"\xa0that you want to add to your event as derived contexts. Within the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"outputs"),"\xa0array, each entry is a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"\xa0sub-object that contains a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"jsonPath"),"\xa0configuration field that lets you specify which part of the returned JSON you want to add to your enriched event.\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"$"),"\xa0can be used if you want to attach returned JSON as is."),(0,a.kt)("p",null,"If the JSON Path specified cannot be not found within the API's returned JSON, then the lookup (and thus the overall event) will be flagged as a failure."),(0,a.kt)("p",null,"The enrichment adds the returned JSON into the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"derived_contexts"),"\xa0field within a Snowplow enriched event. Because all JSONs in the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"derived_contexts"),"\xa0field must be self-describing JSONs, use the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"schema"),"\xa0field to specify the Iglu schema URI that you want to attach to the event."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'GET http://api.acme.com/users/northwind-traders/123?format=json\n{\n  "metadata": {\n    "whenCreated": 1448371243,\n    "whenUpdated": 1448373431\n  },\n  "record": {\n    "name": "Bob Thorpe",\n    "id": "123"\n  }\n}\n')),(0,a.kt)("p",null,"With this configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"outputs": [ {\n  "schema": "iglu:com.acme/user/jsonschema/1-0-0",\n  "json": {\n    "jsonPath": "$.record"\n  }\n} ]\n')),(0,a.kt)("p",null,"This would be added to the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"derived_contexts"),"\xa0array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": "iglu:com.acme/user/jsonschema/1-0-0",\n  "data": {\n    "name": "Bob Thorpe",\n    "id": "123"\n  }\n}\n')),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"outputs"),"\xa0array must have at least one entry in it."),(0,a.kt)("h4",{id:"cache"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/API-Request-enrichment#cache"}),(0,a.kt)("inlineCode",{parentName:"h4"},"cache")),(0,a.kt)("p",null,"A Snowplow enrichment can run many millions of time per hour, effectively launching a DoS attack on a data source if we are not careful. The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"cache"),"\xa0configuration attempts to minimize the number of lookups performed."),(0,a.kt)("p",null,"The cache is an LRU (least-recently used) cache, where less frequently accessed values are evicted to make space for new values. The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"uri"),"\xa0with all keys populated is used as the key in the cache. Configure the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"cache"),"\xa0as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"size"),"\xa0is the maximum number of entries to hold in the cache at any one time (minimum value for is\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"1"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ttl"),"\xa0is the number of seconds that an entry can stay in the cache before it is forcibly evicted. This is useful to prevent stale values from being retrieved in the case that your API can return different values for the same key over time.")),(0,a.kt)("p",null,"To disable\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"ttl"),"\xa0so keys could be stored in cache until job is done\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\xa0value should be used."),(0,a.kt)("h3",{id:"data-sources"},"Data sources"),(0,a.kt)("p",null,"The data source for this enrichment is the entire ",(0,a.kt)("inlineCode",{parentName:"p"},"enriched/good")," event. More precisely, input data can be accessed in any of four forms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Snowplow Plain Old Java Object produced during common enrichment process"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/wiki/Custom-events#unstructured-event"},"Snowplow Unstructured event")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/wiki/Custom-contexts"},"Custom contexts")," attached to event by tracking SDK"),(0,a.kt)("li",{parentName:"ul"},"Derived contexts attached to event by ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/wiki/Configurable-enrichments"},"other enrichments"))),(0,a.kt)("p",null,"More precise usage of these data sources is described in inputs section."),(0,a.kt)("h3",{id:"algorithm"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/API-Request-enrichment#algorithm"}),"Algorithm"),(0,a.kt)("p",null,"This enrichment uses any 3rd party RESTful service to fetch data in JSON format. In most cases however you probably want to use your own private server to maintain acceptable performance since third-party service may cause serious slowdown of your enrichment process."),(0,a.kt)("p",null,"Here are some clues on how this enrichment will handle some exceptional cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if provided JSONPath is invalid - all events attempted to being enriched will be sent to\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"enriched/bad")),(0,a.kt)("li",{parentName:"ul"},"if more than one context (derived or custom) matches\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"schemaCriterion"),"\xa0- first one will be picked, no matter if following have higher SchemaVer"),(0,a.kt)("li",{parentName:"ul"},"if input's value found more than in one sources - last one will be picked, so try to put more precise input last (for example to get longitude/latitude pair use data from IP Lookup enrichment first and GPS-derived longitude/latitude second)"),(0,a.kt)("li",{parentName:"ul"},"if any of input key wasn't found - HTTP request won't be sent and new context won't be derived, but event will be processed as usual"),(0,a.kt)("li",{parentName:"ul"},"if output's JSONPath wasn't found - event will be sent to\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"enriched/bad"),"\xa0bucket"),(0,a.kt)("li",{parentName:"ul"},"if server returned any non-successful response or timed-out - event will be sent to\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"enriched/bad"),"\xa0bucket"),(0,a.kt)("li",{parentName:"ul"},"if server response returned JSON which invalidated by schema provided in output - event will be sent to\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"shredded/bad")),(0,a.kt)("li",{parentName:"ul"},"if input JSONPath will match non-primitive value in context or unstructured event, enrichment will try to stringify it. Array will be concatenated with commas,\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"null"),'\xa0will be transformed to string "null", object will be just stringified and will inevitable result in invalid URL')),(0,a.kt)("h3",{id:"data-generated"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/API-Request-enrichment#data-generated"}),"Data generated"),(0,a.kt)("p",null,"This enrichment adds a new context to the enriched event with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/ua_parser_context/jsonschema/1-0-0"},"this schema"),"."),(0,a.kt)("p",null,"As during the API Request enrichment process the new context is added to\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"derived_contexts"),"\xa0of the enriched/good event, the data generated will end up in its own table determined by the custom\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"schema"),"\xa0key in\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"output"),"\xa0configuration sub-object."))}c.isMDXComponent=!0}}]);