"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[79356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,k=p["".concat(u,".").concat(f)]||p[f]||c[f]||r;return n?l.createElement(k,i(i({ref:t},d),{},{components:n})):l.createElement(k,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var l=n(87462),o=(n(67294),n(3905));const r={title:"Iglu Server configuration reference",date:"2021-08-03",sidebar_position:0},i=void 0,a={unversionedId:"pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/reference/index",id:"pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/reference/index",title:"Iglu Server configuration reference",description:"This is a complete list of the options that can be configured in the Iglu Server HOCON config file. The\xa0example configs in github\xa0show how to prepare an input file.",source:"@site/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/reference/index.md",sourceDirName:"pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/reference",slug:"/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/reference/",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/reference/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/reference/index.md",tags:[],version:"current",lastUpdatedAt:1661787e3,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:0,frontMatter:{title:"Iglu Server configuration reference",date:"2021-08-03",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Iglu Server",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/"},next:{title:"Setup Iglu Server",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/setup/"}},u={},s=[{value:"Common options",id:"common-options",level:2},{value:"Advanced options",id:"advanced-options",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a complete list of the options that can be configured in the Iglu Server HOCON config file. The\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/iglu-server/tree/master/config"},"example configs in github"),"\xa0show how to prepare an input file."),(0,o.kt)("h2",{id:"common-options"},"Common options"),(0,o.kt)("table",{class:"has-fixed-layout"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"repoServer.interface")),(0,o.kt)("td",null,"Default ",(0,o.kt)("code",null,"0.0.0.0"),", the address on which the server listens for http connections")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"repoServer.port")),(0,o.kt)("td",null,"Default 8080, the port on which the server listens")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"repoServer.idleTimeout")),(0,o.kt)("td",null,"Default is 30 seconds. TCP connections are dropped after this timeout expires. If you are running Iglu Server behind a load balancer, this should slightly exceed the load balancer's idle timeout.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"database.type")),(0,o.kt)("td",null,"Default is ",(0,o.kt)("code",null,"postgres"),", but change to ",(0,o.kt)("code",null,"dummy")," during development for in-memory only storage")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"database.host")),(0,o.kt)("td",null,"Required. Host name of the postgres database.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"database.port")),(0,o.kt)("td",null,"Default ",(0,o.kt)("code",null,"5432"),". Port of the postgres database.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"database.dbname")),(0,o.kt)("td",null,"Required. Name of the postgres database.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"database.username")),(0,o.kt)("td",null,"Required. Username for connecting to postgres.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"database.password")),(0,o.kt)("td",null,"Required. Password for connecting to postgres.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"swagger.baseUrl")),(0,o.kt)("td",null,"Optional. Customise the api base url in Swagger. Helpful for when running iglu-server behind a proxy server.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"debug")),(0,o.kt)("td",null,"Default false. Enable additional debug api endpoint to respond with all internal state.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"patchesAllowed")),(0,o.kt)("td",null,"Default false. If true, schemas sent to the ",(0,o.kt)("code",null,"/api/schemas")," endpoint will overwrite existing ones rather than be skipped if a schema with the same key already exists.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"webhooks.schemaPublished")),(0,o.kt)("td",null,"Enable webhooks that will be called when a schema is published or updated with a vendor that matches the specified prefixes. This is a list of ",(0,o.kt)("code",null,"uri")," and ",(0,o.kt)("code",null,"vendorPrefixes"),". See the ",(0,o.kt)("a",{href:"https://github.com/snowplow-incubator/iglu-server/blob/0.7.0/config/config.reference.hocon#L81-L88"},"examples in github"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"superApiKey")),(0,o.kt)("td",null,"Optional. Set a super api key with permission to read/write any schema, and add other api keys.")))),(0,o.kt)("h2",{id:"advanced-options"},"Advanced options"),(0,o.kt)("p",null,"We believe these advanced options are set to sensible defaults, and hopefully you won\u2019t need to ever change them."),(0,o.kt)("table",{class:"has-fixed-layout"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"repoServer.threadPool.type")),(0,o.kt)("td",null,'Configures the thread pool used by the underlying BlazeServer for executing Futures. Default "fixed" for a fixed thread pool. Change to "cached" for a cached thread pool.')),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"repoServer.threadPool.size")),(0,o.kt)("td",null,"Default is 4. Only relevant for fixed thread pools.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"repoServer.maxConnections")),(0,o.kt)("td",null,"Default 1024. The maximum number of client connections that may be active at any time.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"database.pool.type")),(0,o.kt)("td",null,"Configures the database connection pool. The default is ",(0,o.kt)("code",null,"hikari")," which is appropriate for production. Change to ",(0,o.kt)("code",null,"nopool")," if you want no upper bound on the number of connections.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"database.pool.maximumPoolSize")),(0,o.kt)("td",null,"Maximum number of connections in the Hikari pool. Default is 5.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"database.pool.connectionTimeout")),(0,o.kt)("td",null,"Configures timeout on the Hikari connection pool. Default is ",(0,o.kt)("code",null,"30 seconds"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"database.pool.maxLifetime")),(0,o.kt)("td",null,"Configures the maximum lifetime of a connection in the Hikari pool. Default is ",(0,o.kt)("code",null,"1800 seconds"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"database.pool.minimumIdle")),(0,o.kt)("td",null,"Configures the minimum number of idle connections in the Hikari pool. Default is 5.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"database.pool.connectionPool.type")),(0,o.kt)("td",null,"The thread pool used for awaiting connection to the database. Default is ",(0,o.kt)("code",null,"fixed")," for a fixed size thread pool, and this is appropriate for production.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"database.pool.connectionPool.size")),(0,o.kt)("td",null,"Number of threads, used when the connection pool has type ",(0,o.kt)("code",null,"fixed"),". Default is 4.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"database.pool.transactionPool.type")),(0,o.kt)("td",null,"The thread pool used for blocking JDBC operations. Default is ",(0,o.kt)("code",null,"cached")," which is appropriate for production.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"preTerminationPeriod"),(0,o.kt)("br",null),(0,o.kt)("em",null,"Added in version 0.8.0")),(0,o.kt)("td",null,"Optional, default \u201c1 seconds\u201d. Configures how long the server should pause after receiving a sigterm before starting the graceful shutdown. During this period the server continues to accept new connections and respond to requests.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"preTerminationUnhealthy"),(0,o.kt)("br",null),(0,o.kt)("em",null,"Added in version 0.8.0")),(0,o.kt)("td",null,"Optional, default false. During the\xa0",(0,o.kt)("code",null,"preTerminationPeriod"),", the server can be configured to return 503s on the\xa0",(0,o.kt)("code",null,"/health"),"\xa0endpoint. Can be helpful for removing the server from a load balancer\u2019s targets.")))))}c.isMDXComponent=!0}}]);